import React from "react";
import ReactTable from "react-table";
import { inspectionTableColumns, serviceTableColumns, tagTableColumns, Tips} from "./tableDefinition";
import "react-table/react-table.css";

class TagTable extends React.Component
{
    render()
    {
        const tagData =
        [
            {code: "1257ht", number: "0001", name: "Tank", itemNumber: "178", location: "Warehouse",
            frequency: "Monthly", quantity: "1", initialDate: "21/02/2018", generalComments: "Test comment"},
            {code: "1257ht", number: "0001", name: "Tank", itemNumber: "178", location: "Warehouse",
            frequency: "Monthly", quantity: "1", initialDate: "21/02/2018", generalComments: "Test comment"},
            {code: "1257ht", number: "0001", name: "Tank", itemNumber: "178", location: "Warehouse",
            frequency: "Monthly", quantity: "1", initialDate: "21/02/2018", generalComments: "Test comment"},
        ];
        const serviceData =
        [
            {number: "1", description: "Wrap plastic", date: "13/07/2019"},
            {number: "1", description: "Wrap plastic", date: "13/07/2019"},
            {number: "1", description: "Wrap plastic", date: "13/07/2019"},
            {number: "1", description: "Wrap plastic", date: "13/07/2019"},
        ];
        const inspectionData =
        [
            {number: "1", description: "Check oil", date: "12/07/2019"},
            {number: "1", description: "Check oil", date: "12/07/2019"},
            {number: "1", description: "Check oil", date: "12/07/2019"},
            {number: "1", description: "Check oil", date: "12/07/2019"},
        ];
        return (
            <div>
                <ReactTable
                    data={tagData}
                    columns={tagTableColumns}
                    filterable
                    defaultPageSize={10}
                    className="-striped -highlight"
                    SubComponent={(row) =>
                    {
                        return (
                            <div style={{ marginLeft: "60px", marginRight: "60px" , marginTop: "20px" }}>
                                <br />
                                <div className="outerTableHeader">Services</div><br /><br />
                                <ReactTable
                                    data={serviceData}
                                    columns={serviceTableColumns}
                                    defaultPageSize={3}
                                    showPagination={true}
                                /><br /><br />
                                <div className="outerTableHeader">Inspections</div><br /><br />
                                <ReactTable
                                    data={inspectionData}
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
