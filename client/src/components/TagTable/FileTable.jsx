import React from "react";
import ReactTable from "react-table";
import requestData from "./requestData";
import { style } from "typestyle";
import "react-table/react-table.css";

const innerHeaderFont = style({
    textAlign: "left",
    fontWeight: "bold"
});

class FileTable extends React.Component
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
                Number(this.props.tagId)
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

    fileTableColumns =
    [
        {
            columns:
            [
                {
                Header: (<div className={innerHeaderFont}>Files</div>),
                accessor: "files"
                }
            ],
        },
    ];

    render()
    {
        return (
            <ReactTable
                // tagType={"files"}
                defaultPageSize={5}
                columns={this.fileTableColumns}
                // manual
                data={this.state.data}
                pages={this.state.pages}
                loading={this.state.loading}
                // onFetchData={this.fetchData}
                filterable
                className="-striped -highlight"
            />
        );
    }
}

export default FileTable;
