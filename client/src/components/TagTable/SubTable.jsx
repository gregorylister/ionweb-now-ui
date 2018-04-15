import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import requestData from "./requestData";

class SubTable extends React.Component
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

    render()
    {
        return (
            <ReactTable
                tagType={this.props.tagType}
                defaultPageSize={this.props.defaultPageSize}
                columns={this.props.columns}
                manual
                data={this.state.data}
                pages={this.state.pages}
                loading={this.state.loading}
                onFetchData={this.fetchData}
                filterable
                className="-striped -highlight"
            />
        );
    }
}

export default SubTable;
