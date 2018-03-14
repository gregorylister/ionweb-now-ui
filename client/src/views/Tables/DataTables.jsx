import React from "react";
// jQuery plugin - used for DataTables.net
import $ from "jquery";
import {
    Table, Card, CardBody, CardHeader, CardTitle, Row, Col
} from "reactstrap";

import { PanelHeader } from "components";

import { dataTable } from "variables/general.jsx";

// DataTables.net plugin - creates a tables with actions on it
$.DataTable = require("datatables.net-bs");
require("datatables.net");
require("datatables.net-responsive");

class DataTables extends React.Component
{
    componentDidMount()
    {
        $("#datatables").DataTable({
            "pagingType": "full_numbers",
            "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
            responsive: true,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search records",
            }
        });
        var table = $("#datatables").DataTable();

        // Edit record
        table.on( "click", ".edit", function()
        {
            var $tr = $(this).closest("tr");

            var data = table.row($tr).data();
            alert( "You press on Row: " + data[0] + " " + data[1] + " " + data[2] + "'s row." );
        } );

        // Delete a record
        table.on( "click", ".remove", function(e)
        {
            var $tr = $(this).closest("tr");
            table.row($tr).remove().draw();
            e.preventDefault();
        } );

        //Like record
        table.on( "click", ".like", function()
        {
            alert("You clicked on Like button");
        });
    }

    componentWillUnmount()
    {
        $(".data-table-wrapper")
        .find("table")
        .DataTable()
        .destroy(true);
    }

    shouldComponentUpdate()
    {
        return false;
    }

    render()
    {
        return (
            <div>
                <PanelHeader size="sm"/>
                <div className="content">
                    <Row>
                        <Col xs={12} md={12}>
                            <Card>
                                <CardHeader><CardTitle>DataTables.net</CardTitle></CardHeader>
                                <CardBody>
                                    <div className="toolbar">
                                        {/* Here you can write extra buttons/actions for the toolbar */}
                                    </div>
                                    <Table id="datatables" striped cellSpacing="0" width="100%" className="dataTable dtr-inline">
                                        <thead>
                                            <tr>
                                                <th>{ dataTable.headerRow[0] }</th>
                                                <th>{ dataTable.headerRow[1] }</th>
                                                <th>{ dataTable.headerRow[2] }</th>
                                                <th>{ dataTable.headerRow[3] }</th>
                                                <th className="disabled-sorting text-right">{ dataTable.headerRow[4] }</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>{ dataTable.footerRow[0] }</th>
                                                <th>{ dataTable.footerRow[1] }</th>
                                                <th>{ dataTable.footerRow[2] }</th>
                                                <th>{ dataTable.footerRow[3] }</th>
                                                <th className="text-right">{ dataTable.footerRow[4] }</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            {
                                                dataTable.dataRows.map((prop, key) =>
                                                {
                                                    return (
                                                        <tr key={key}>
                                                            {
                                                                // tslint:disable-next-line:no-shadowed-variable
                                                                prop.map((prop, key) =>
                                                                {
                                                                    return (
                                                                        <td  key={key}>{prop}</td>
                                                                    );
                                                                })
                                                            }
                                                            <td className="text-right">
                                                                <a href="#like" className="btn btn-round btn-info btn-icon btn-sm like"><i className="fa fa-heart"></i></a>{" "}
                                                                <a href="#edit" className="btn btn-round btn-warning btn-icon btn-sm edit"><i className="fa fa-calendar"></i></a>{" "}
                                                                <a href="#remove" className="btn btn-round btn-danger btn-icon btn-sm remove"><i className="fa fa-times"></i></a>{" "}
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default DataTables;
