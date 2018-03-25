import React from "react";

export const tagTableColumns =
[
    {
        Header: (<div className="outerTableHeader">Tag</div>),
        columns:
        [
            {
                Header: (<div className="innertableHeader">Code</div>),
                accessor: "tagCode",
            },
            {
                Header: (<div className="innertableHeader">Number</div>),
                accessor: "tagNumber",
            },
            {
                Header: (<div className="innertableHeader">Name</div>),
                accessor: "itemName",
            },
            {
                Header: (<div className="innertableHeader">Item #</div>),
                accessor: "itemNumber",
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
                accessor: "inspectionFrequency",
            },
            {
                Header: (<div className="innertableHeader">Quantity</div>),
                accessor: "numberOfInspections",
            },
            {
                Header: (<div className="innertableHeader">Initial Date</div>),
                accessor: "firstInspectionDate",
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
