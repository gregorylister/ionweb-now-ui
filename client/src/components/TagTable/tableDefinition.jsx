import React from "react";

export const tagTableColumns =
[
    {
        Header: (<div className="outerTableHeader">Tag</div>),
        columns:
        [
            {
                Header: (<div className="innertableHeader">Code</div>),
                accessor: "tag_code",
            },
            {
                Header: (<div className="innertableHeader">Number</div>),
                accessor: "tag_number",
            },
            {
                Header: (<div className="innertableHeader">Name</div>),
                accessor: "item_name",
            },
            {
                Header: (<div className="innertableHeader">Item #</div>),
                accessor: "item_number",
            },
            {
                Header: (<div className="innertableHeader">Location</div>),
                accessor: "location",
            },
        ],
    },
    {
        Header: (<div className="outerTableHeader">Inspection</div>),
        columns:
        [
            {
                Header: (<div className="innertableHeader">Frequency</div>),
                accessor: "inspection_frequency",
            },
            {
                Header: (<div className="innertableHeader">Quantity</div>),
                accessor: "number_of_inspections",
            },
            {
                Header: (<div className="innertableHeader">Initial Date</div>),
                accessor: "first_inspection_date",
            },
        ],
    },
];

export const inspectionTableColumns =
[
    {
        columns:
        [
            {
                Header: "Number",
                accessor: "number",
            },
            {
                Header: "Description",
                accessor: "description",
            },
            {
                Header: "Date",
                accessor: "date",
            },
            {
                Header: "Inspected by",
                accessor: "inspectedBy",
            },
            {
                Header: "Additional Service Required",
                accessor: "addServRequired",
            },
            {
                Header: "Additional Service Details",
                accessor: "addServDetails",
            },
        ],
    },
];

export const serviceTableColumns =
[
    {
        columns:
        [
            {
                Header: "Number",
                accessor: "number",
            },
            {
                Header: "Description",
                accessor: "description",
            },
            {
                Header: "Date",
                accessor: "date",
            },
            {
                Header: "Start",
                accessor: "start",
            },
            {
                Header: "Finish",
                accessor: "finish",
            },
            {
                Header: "Executed by",
                accessor: "executedBy",
            },
            {
                Header: "Approved by",
                accessor: "approvedBy",
            },
        ],
    },
];

export const Tips = () =>
    <div style={{ textAlign: "center" }}>
        Tip: Hold shift when sorting to multi-sort!
    </div>;
