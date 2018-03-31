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

    fetchData(state, instance)
    {
        this.setState({ loading: true });

        requestData(
            instance.props.tagType,
            state.pageSize,
            state.page,
            state.sorted,
            state.filtered,
            Number(this.props.tagId),
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
                    <br/>
                    <div className="innertableHeader">{this.props.title}</div>
                    <br/>
                    <ReactTable
                        tagType={this.props.tagType}
                        defaultPageSize={this.props.defaultPageSize}
                        columns={this.props.columns}
                        manual
                        data={data}
                        pages={pages}
                        loading={loading}
                        onFetchData={this.fetchData}
                        filterable
                        className="-striped -highlight"
                    />
                </div>
        );
    }
}

export default SubTable;
