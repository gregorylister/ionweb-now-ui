import React from "react";
import ReactTable from "react-table";
import requestData from "./requestData";
import SubTable from "./SubTable";
import Expander from "./Expander";
import { style } from "typestyle";
import "react-table/react-table.css";
import { inspectionTableColumns, serviceTableColumns, tagTableColumns} from "./tableDefinition";

const innerTableMargins = style({
    marginLeft: "25px",
    marginRight: "25px"
});

class TagTable extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { data: [], pages: null, loading: true };
        this.fetchData = this.fetchData.bind(this);
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
            console.error(err.message);
        }
    }

    render()
    {
        const { data, pages, loading } = this.state;
        return (
            <div>
                <ReactTable
                    tagType={"tag"}
                    defaultPageSize={10}
                    columns={tagTableColumns}
                    manual
                    data={data}
                    pages={pages}
                    loading={loading}
                    onFetchData={this.fetchData}
                    filterable
                    className="-striped -highlight"
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
                                            <SubTable
                                                tagId={row.row.id}
                                                tagType={"inspectiontag"}
                                                defaultPageSize={5}
                                                columns={inspectionTableColumns}
                                            />
                                    }]}
                                />
                                <Expander
                                    plain
                                    defaultOpened={-1}
                                    components={[{
                                        title: "Services",
                                        data:
                                            <SubTable
                                                tagId={row.row.id}
                                                tagType={"servicetag"}
                                                defaultPageSize={5}
                                                columns={serviceTableColumns}
                                            />
                                    }]}
                                />
                                <Expander
                                    plain
                                    defaultOpened={-1}
                                    components={[{
                                        title: "Files",
                                        data:
                                            <SubTable
                                                tagId={row.row.id}
                                                tagType={"files"}
                                                defaultPageSize={5}
                                                columns={[{columns: [{Header: "Files", accessor: "files"}]} ]}
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
