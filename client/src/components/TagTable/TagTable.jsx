import React from "react";
import ReactTable from "react-table";
import { inspectionTableColumns, serviceTableColumns, tagTableColumns, Tips} from "./tableDefinition";
import "react-table/react-table.css";
import requestData from "./requestData";
import SubTable from "./SubTable";
import Comments from "./Comments";

class TagTable extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { data: [], pages: null, loading: true };
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData(state, instance)
    {
        this.setState({ loading: true });

        requestData(
            instance.props.tagType,
            state.pageSize,
            state.page,
            state.sorted,
            state.filtered,
            -1
        )
        .then(res =>
        {
            this.setState({
                data: res.data.rows,
                pages: res.data.pages,
                loading: false
            });
        })
        .catch(err =>
        {
            console.error(err);
        });
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
                            <div style={{ marginLeft: "45px", marginRight: "45px"}}>
                                <Comments
                                    plain
                                    defaultOpened={0}
                                    components={[{
                                        title: "Comments",
                                        text: row.row.general_comments
                                    }]}
                                />
                                <SubTable
                                    tagId={row.row.id}
                                    title={"Inspections"}
                                    tagType={"inspectiontag"}
                                    defaultPageSize={5}
                                    columns={inspectionTableColumns}
                                />
                                <SubTable
                                    tagId={row.row.id}
                                    title={"Services"}
                                    tagType={"servicetag"}
                                    defaultPageSize={5}
                                    columns={serviceTableColumns}
                                />
                                <SubTable
                                    tagId={row.row.id}
                                    title={"Files"}
                                    tagType={"files"}
                                    defaultPageSize={5}
                                    columns={[{columns: [{Header: "Files", accessor: "files"}]} ]}
                                />
                                <br/>
                            </div>
                        );
                    }}
                />
                <br />
                <Tips />
            </div>
        );
    }
}

export default TagTable;
