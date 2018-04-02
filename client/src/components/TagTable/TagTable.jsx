import React from "react";
import ReactTable from "react-table";
import { inspectionTableColumns, serviceTableColumns, tagTableColumns} from "./tableDefinition";
import "react-table/react-table.css";
import requestData from "./requestData";
import SubTable from "./SubTable";
import Expander from "./Expander";

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
                            <div style={{ marginLeft: "25px", marginRight: "25px"}}>
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
