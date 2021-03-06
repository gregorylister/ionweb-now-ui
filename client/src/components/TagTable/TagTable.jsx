import React from "react";
import ReactTable from "react-table";
import Expander from "./Expander";
import InspectionTagTable from "./InspectionTagTable";
import ServiceTagTable from "./ServiceTagTable";
import FileTable from "./FileTable";
import { Button } from "components";
import { UncontrolledTooltip } from "reactstrap";
import { style } from "typestyle";
import SweetAlert from "react-bootstrap-sweetalert";
import "react-table/react-table.css";

const innerTableMargins = style({
    marginLeft: "25px",
    marginRight: "25px"
});

const innerHeaderFont = style({
    textAlign: "left",
    fontWeight: "bold"
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
            data: [],
            pages: null,
            loading: true,
            refreshTable: this.props.refreshTable,
            alert: null
        };
        this.fetchData = this.fetchData.bind(this);
        this.deleteTag = this.deleteTag.bind(this);
        this.warningAlert = this.warningAlert.bind(this);
        this.successAlert = this.successAlert.bind(this);
        this.errorAlert = this.errorAlert.bind(this);
        this.cancelAlert = this.cancelAlert.bind(this);
        this.hideAlert = this.hideAlert.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState)
    {
        if (nextProps.refreshTable)
        {
            return {
                refreshTable: nextProps.refreshTable
          };
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        if (this.state.refreshTable)
        {
            this.fetchData(this.table.state, this.table);
        }
    }

    async fetchData(state, instance)
    {
        try
        {
            this.setState({ loading: true, refreshTable: false });

            const res = await fetch(
                `/tag/get
                ?pageSize=${state.pageSize}
                &page=${state.page}
                &sorted=${JSON.stringify(state.sorted)}
                &filtered=${JSON.stringify(state.filtered)}
                &tagId=${-1}`
            );
            const resJson = await res.json();

            this.setState({
                data: resJson.data.rows,
                pages: resJson.data.pages,
                loading: false,
            });
        }
        catch (err)
        {
            console.error(err);
        }
    }

    async deleteTag(tagId)
    {
        try
        {
            const res = await fetch(`/tag/delete?tagId=${JSON.stringify(tagId)}`);
            const resJson = await res.json();
            resJson.status ? this.successAlert() : this.errorAlert();
        }
        catch (err)
        {
            console.error(err);
        }
    }

    warningAlert(tagId)
    {
        this.setState({
            alert: (
                <SweetAlert
                    warning
                    style={{display: "block", marginTop: "-200px"}}
                    title="Are you sure?"
                    onConfirm={() => this.deleteTag(tagId)}
                    onCancel={() => this.cancelAlert()}
                    confirmBtnBsStyle="info"
                    cancelBtnBsStyle="danger"
                    confirmBtnText="Yes, delete it!"
                    cancelBtnText="Cancel"
                    showCancel
                >
                </SweetAlert>
            )
        });
    }

    successAlert()
    {
        this.setState({
            alert: (
                <SweetAlert
                    success
                    style={{display: "block", marginTop: "-200px"}}
                    title="Success!"
                    onConfirm={() => this.hideAlert()}
                    onCancel={() => this.hideAlert()}
                    confirmBtnBsStyle="info"
                >
                Tag deleted
                </SweetAlert>
            )
        });
    }

    errorAlert()
    {
        this.setState({
            alert: (
                <SweetAlert
                    danger
                    style={{display: "block", marginTop: "-200px"}}
                    title="Aw snap!"
                    onConfirm={() => this.hideAlert()}
                    onCancel={() => this.hideAlert()}
                    confirmBtnBsStyle="info"
                >
                Internal server error
                </SweetAlert>
            )
        });
    }

    cancelAlert()
    {
        this.setState({
            alert: (
                <SweetAlert
                    danger
                    style={{display: "block", marginTop: "-200px"}}
                    title="Cancelled!"
                    onConfirm={() => this.hideAlert()}
                    onCancel={() => this.hideAlert()}
                    confirmBtnBsStyle="info"
                >
                </SweetAlert>
            )
        });
    }

    hideAlert()
    {
        this.setState({alert: null});
        this.fetchData(this.table.state, this.table);
    }

    tagTableColumns =
    [
        {
            Header: (<div className={innerHeaderFont}>TAGS</div>),
            columns:
            [
                {
                    Header: (<div className={innerHeaderFont}>Actions</div>),
                    accessor: "actions",
                    Cell: row => (
                        <div>
                            <Button
                                onClick={() => this.props.toggleAddTagModal({
                                    id: row.row.id,
                                    tagCode: row.row.tag_code,
                                    tagNumber: row.row.tag_number,
                                    itemName: row.row.item_name,
                                    itemNumber: row.row.item_number,
                                    location: row.row.location,
                                    generalComments: row.row.general_comments,
                                    editTagSwitch: true
                                })}
                                size="sm" id={"edit" + row.index}
                                tiny noMargins icon color="info"
                            >
                                <i className="now-ui-icons ui-2_settings-90"></i>
                            </Button>
                            <Button
                                onClick={() => this.warningAlert(row.row.id)} size="sm" id={"remove" + row.index}
                                tiny noMargins icon color="danger"
                            >
                                <i className="now-ui-icons ui-1_simple-remove"></i>
                            </Button>
                            <UncontrolledTooltip
                                className={tooltipOpacity} placement="right" target={"edit" + row.index} delay={0}
                            >
                                Edit tag
                            </UncontrolledTooltip>
                            <UncontrolledTooltip
                                className={tooltipOpacity} placement="right" target={"remove" + row.index} delay={0}
                            >
                                Delete tag
                            </UncontrolledTooltip>
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
            Header: (<div className={innerHeaderFont}>INSPECTIONS</div>),
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
                {this.state.alert}
                <ReactTable
                    ref={instance => { this.table = instance; }}
                    defaultSorted={[{id: "id", desc: true}]}
                    defaultPageSize={10}
                    manual
                    filterable
                    columns={this.tagTableColumns}
                    className="-striped -highlight"
                    data={this.state.data}
                    pages={this.state.pages}
                    loading={this.state.loading}
                    onFetchData={this.fetchData}
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
