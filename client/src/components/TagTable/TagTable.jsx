import React from "react";
import ReactTable from "react-table";
import { inspectionTableColumns, serviceTableColumns, tagTableColumns, Tips} from "./tableDefinition";
import "react-table/react-table.css";
import requestData from "./requestData";

class TagTable extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { data: [], pages: null, loading: true};
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData(state, instance)
    {
        this.setState({ loading: true });

        requestData(
            state.pageSize,
            state.page,
            state.sorted,
            state.filtered)
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
                    manual
                    data={data}
                    pages={pages}
                    loading={loading}
                    onFetchData={this.fetchData}
                    filterable
                    defaultPageSize={10}
                    className="-striped -highlight"
                    columns={tagTableColumns}
                    SubComponent={(row) =>
                    {
                        return (
                            <div style={{ marginLeft: "60px", marginRight: "60px" , marginTop: "20px" }}>
                                <br />
                                <div className="outerTableHeader">Services</div><br /><br />
                                <ReactTable
                                    data={[]}
                                    columns={serviceTableColumns}
                                    defaultPageSize={3}
                                    showPagination={true}
                                /><br /><br />
                                <div className="outerTableHeader">Inspections</div><br /><br />
                                <ReactTable
                                    data={[]}
                                    columns={inspectionTableColumns}
                                    defaultPageSize={3}
                                    showPagination={true}
                                /><br /><br />
                                <div className="outerTableHeader">Files</div><br /><br />
                                <ReactTable
                                    data={[]}
                                    columns={[{columns: [{Header: "Files", accessor: "files"}]} ]}
                                    defaultPageSize={3}
                                    showPagination={false}
                                /><br /><br />
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
