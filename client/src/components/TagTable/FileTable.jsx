import React from "react";
import ReactTable from "react-table";
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

            const res = await fetch(
                `/files/get
                ?pageSize=${state.pageSize}
                &page=${state.page}
                &sorted=${JSON.stringify(state.sorted)}
                &filtered=${JSON.stringify(state.filtered)}
                &tagId=${ Number(this.props.tagId)}`
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
