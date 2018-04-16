import React from "react";
import ReactTable from "react-table";
import requestData from "./requestData";
import { style } from "typestyle";
import "react-table/react-table.css";

const innerHeaderFont = style({
    textAlign: "left",
    fontWeight: "bold"
});

class ServiceTagTable extends React.Component
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

    serviceTableColumns =
    [
        {
            columns:
            [
                {
                    Header: (<div className={innerHeaderFont}>Number</div>),
                    accessor: "service_number",
                },
                {
                    Header: (<div className={innerHeaderFont}>Date</div>),
                    accessor: "service_date",
                },
                {
                    Header: (<div className={innerHeaderFont}>Start</div>),
                    accessor: "start_date_time",
                },
                {
                    Header: (<div className={innerHeaderFont}>Finish</div>),
                    accessor: "end_date_time",
                },
                {
                    Header: (<div className={innerHeaderFont}>Executed by</div>),
                    accessor: "executed_by",
                },
                {
                    Header: (<div className={innerHeaderFont}>Approved by</div>),
                    accessor: "approved_by",
                },
            ],
        },
    ];

    render()
    {
        return (
            <ReactTable
                tagType={"servicetag"}
                defaultPageSize={5}
                columns={this.serviceTableColumns}
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

export default ServiceTagTable;
