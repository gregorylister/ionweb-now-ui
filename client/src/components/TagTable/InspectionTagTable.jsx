import React from "react";
import ReactTable from "react-table";
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

            const res = await fetch(
                `/inspectiontag/get
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
