import React from "react";
import ReactTable from "react-table";
import requestData from "./requestData";
import { style } from "typestyle";
import "react-table/react-table.css";

const innerHeaderFont = style({
    textAlign: "left",
    fontWeight: "bold"
});

class InspectionTagTable extends React.Component
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

    inspectionTableColumns =
    [
        {
            columns:
            [
                {
                    Header: (<div className={innerHeaderFont}>Number</div>),
                    accessor: "inspection_number",
                },
                {
                    Header: (<div className={innerHeaderFont}>Description</div>),
                    accessor: "description",
                },
                {
                    Header: (<div className={innerHeaderFont}>Date</div>),
                    accessor: "inspection_date",
                },
                {
                    Header: (<div className={innerHeaderFont}>Inspected by</div>),
                    accessor: "inspected_by",
                },
                {
                    Header: (<div className={innerHeaderFont}>Additional Service</div>),
                    accessor: "additional_service",
                    Cell: row => (
                        row.value === true ? "Yes" : "No"
                    )
                },
                {
                    Header: (<div className={innerHeaderFont}>Additional Service Details</div>),
                    accessor: "additional_service_details",
                },
            ],
        },
    ];

    render()
    {
        return (
            <ReactTable
                tagType={"inspectiontag"}
                defaultPageSize={5}
                columns={this.inspectionTableColumns}
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

export default InspectionTagTable;
