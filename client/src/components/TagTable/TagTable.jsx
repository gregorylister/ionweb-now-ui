import React from "react";
import ReactTable from "react-table";
import requestData from "./requestData";
import Expander from "./Expander";
import InspectionTagTable from "./InspectionTagTable";
import ServiceTagTable from "./ServiceTagTable";
import FileTable from "./FileTable";
import { Button } from "components";
import { UncontrolledTooltip } from "reactstrap";
import { style } from "typestyle";
import "react-table/react-table.css";

const innerTableMargins = style({
    marginLeft: "25px",
    marginRight: "25px"
});

const innerHeaderFont = style({
    textAlign: "left",
    fontWeight: "bold"
});

const outerHeaderFont = style({
    textAlign: "left",
    fontWeight: 800,
    fontSize: "large"
});

const tooltipOpacity = style({
    opacity: "1 !important"
});

class TagTable extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            // Table data state
            data: [], pages: null, loading: true,
            // Table view state
            sorted: [], page: 0, pageSize: 10, expanded: {}, resized: [], filtered: []
        };

        this.fetchData = this.fetchData.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState)
    {
        // Check if tag modal has been closed in parent component
        if (nextProps.refreshTagTable)
        {
            // Update table view state and trigger a data fetch
            return {
                prevRefreshTagTable: nextProps.refreshTagTable,
                sorted: [], page: 0, pageSize: 10, expanded: {}, resized: [], filtered: []
          };
        }

        return null;
    }

    async fetchData(state, instance)
    {
        try
        {
            this.setState({ loading: true });

            const res = await requestData(
                instance.props.tagType,
                state.pageSize,
                state.page,
                state.sorted,
                state.filtered,
                -1
            );

            this.setState({
                data: res.data.rows,
                pages: res.data.pages,
                loading: false
            });
        }
        catch (err)
        {
            console.error(err);
        }
    }

    async deleteTag(tagType, tagId)
    {
        try
        {
            await fetch(`/${tagType}/delete?tagId=${JSON.stringify(tagId)}`);
        }
        catch (error)
        {
            console.error(error);
        }
    }

    tagTableColumns =
    [
        {
            Header: (<div className={outerHeaderFont}>Tag Details</div>),
            columns:
            [
                {
                    Header: (<div className={innerHeaderFont}>Actions</div>),
                    accessor: "actions",
                    Cell: row => (
                        <div>
                            <Button size="sm" id={"edit" + row.index} tiny noMargins icon color="info"><i className="now-ui-icons ui-2_settings-90"></i></Button>
                            <Button onClick={() => this.deleteTag("tag", row.row.id)} size="sm" id={"remove" + row.index} tiny noMargins icon color="danger"><i className="now-ui-icons ui-1_simple-remove"></i></Button>
                            <UncontrolledTooltip className={tooltipOpacity} placement="right" target={"edit" + row.index} delay={0}>Edit tag</UncontrolledTooltip>
                            <UncontrolledTooltip className={tooltipOpacity} placement="right" target={"remove" + row.index} delay={0}> Delete tag</UncontrolledTooltip>
                        </div>
                    )
                },
                {
                    Header: (<div className={innerHeaderFont}>ID</div>),
                    accessor: "id",
                },
                {
                    Header: (<div className={innerHeaderFont}>Code</div>),
                    accessor: "tag_code",
                },
                {
                    Header: (<div className={innerHeaderFont}>Number</div>),
                    accessor: "tag_number",
                },
                {
                    Header: (<div className={innerHeaderFont}>Item Name</div>),
                    accessor: "item_name",
                },
                {
                    Header: (<div className={innerHeaderFont}>Item Number</div>),
                    accessor: "item_number",
                },
                {
                    Header: (<div className={innerHeaderFont}>Location</div>),
                    accessor: "location",
                },
                {
                    Header: (<div className={innerHeaderFont}>Comments</div>),
                    accessor: "general_comments",
                },
                {
                    Header: (<div className={innerHeaderFont}>Updated</div>),
                    accessor: "last_modified",
                },
            ],
        },
        {
            Header: (<div className={outerHeaderFont}>Inspections</div>),
            columns:
            [
                {
                    Header: (<div className={innerHeaderFont}>Frequency</div>),
                    accessor: "inspection_frequency",
                },
                {
                    Header: (<div className={innerHeaderFont}>Quantity</div>),
                    accessor: "number_of_inspections",
                },
                {
                    Header: (<div className={innerHeaderFont}>Initial Date</div>),
                    accessor: "first_inspection_date",
                },
            ],
        },
    ];

    render()
    {
        return (
            <div>
                <ReactTable
                    manual
                    filterable
                    tagType={"tag"}
                    columns={this.tagTableColumns}
                    className="-striped -highlight"
                    // Data props
                    data={this.state.data}
                    pages={this.state.pages}
                    loading={this.state.loading}
                    onFetchData={this.fetchData}
                    // View props
                    sorted={this.state.sorted}
                    page={this.state.page}
                    pageSize={this.state.pageSize}
                    expanded={this.state.expanded}
                    resized={this.state.resized}
                    filtered={this.state.filtered}
                    // Callbacks
                    onSortedChange={sorted => this.setState({sorted})}
                    onPageChange={page => this.setState({page})}
                    onPageSizeChange={(pageSize, page) => this.setState({page, pageSize})}
                    onExpandedChange={expanded => this.setState({expanded})}
                    onResizedChange={resized => this.setState({resized})}
                    onFilteredChange={filtered => this.setState({filtered})}
                    SubComponent={(row) =>
                    {
                        return (
                            <div className={innerTableMargins}>
                                <Expander
                                    plain
                                    defaultOpened={-1}
                                    components={[{
                                        title: "Comments",
                                        data: row.row.general_comments
                                    }]}
                                />
                                <Expander
                                    plain
                                    defaultOpened={-1}
                                    components={[{
                                        title: "Inspections",
                                        data:
                                            <InspectionTagTable
                                                tagId={row.row.id}
                                            />
                                    }]}
                                />
                                <Expander
                                    plain
                                    defaultOpened={-1}
                                    components={[{
                                        title: "Services",
                                        data:
                                            <ServiceTagTable
                                                tagId={row.row.id}
                                            />
                                    }]}
                                />
                                <Expander
                                    plain
                                    defaultOpened={-1}
                                    components={[{
                                        title: "Files",
                                        data:
                                            <FileTable
                                                tagId={row.row.id}
                                            />
                                    }]}
                                />
                                <br/>
                            </div>
                        );
                    }}
                />
                <br />
            </div>
        );
    }
}

export default TagTable;
