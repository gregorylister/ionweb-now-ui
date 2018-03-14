import React from "react";
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

import taskImage1 from "assets/img/ryan.jpg";
import taskImage2 from "assets/img/eva.jpg";

// ##############################
// // // tasks list for Tasks card in Dashboard view
// #############################

const tasks = [
    {checked: true, image: taskImage1, text: "Sign contract for \"What are conference organizers afraid of?\""},
    {checked: false, image: taskImage1, text: "Lines From Great Russian Literature? Or E-mails From My Boss?"},
    {checked: true, image: taskImage2, text: "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit"}
];

// ##############################
// // // table head data and table body data for Tables view
// #############################

const thead = [
    "Name", "Country", "City", "Salary"
];
const tbody = [
    { className: "table-success", data: [ "Dakota Rice" , "Niger" , "Oud-Turnhout" , "$36,738" ] },
    { className: "", data: [ "Minerva Hooper" , "Curaçao" , "Sinaai-Waas" , "$23,789" ] },
    { className: "table-info", data: [ "Sage Rodriguez" , "Netherlands" , "Baileux" , "$56,142" ] },
    { className: "", data: [ "Philip Chaney" , "Korea, South" , "Overland Park" , "$38,735" ] },
    { className: "table-danger", data: [ "Doris Greene" , "Malawi" , "Feldkirchen in Kärnten" , "$63,542" ] },
    { className: "", data: [ "Mason Porter" , "Chile" , "Gloucester" , "$78,615" ] },
    { className: "table-warning", data: [ "Jon Porter" , "Portugal" , "Gloucester" , "$98,615" ] }
];

// ##############################
// // // stories for Timeline view
// #############################

const stories = [
    {   // First story
        inverted: true,
        badgeColor: "danger",
        badgeIcon: "now-ui-icons business_briefcase-24",
        title: "Some Title",
        titleColor: "danger",
        body: (
            <p>Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!!
                 It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>
        ),
        footerTitle: "11 hours ago via Twitter",
    },
    {   // Second story
        badgeColor: "success",
        badgeIcon: "now-ui-icons design-2_ruler-pencil",
        title: "Another One",
        titleColor: "success",
        body: (
            <p>Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!!
                 I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....</p>
        )
    },
    {   // Third story
        inverted: true,
        badgeColor: "info",
        badgeIcon: "now-ui-icons gestures_tap-01",
        title: "Another Title",
        titleColor: "info",
        body: (
            <div>
                <p>Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM</p>
                <p>What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye</p>
                <hr />
            </div>
        ),
        footer: (
            <UncontrolledButtonDropdown group={false}>
                <DropdownToggle caret className="btn-round" color="info">
                    <i className="now-ui-icons design_bullet-list-67"></i>{" "}
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
        )
    },
    {   // Fourth story
        badgeColor: "warning",
        badgeIcon: "now-ui-icons ui-1_send",
        title: "Another One",
        titleColor: "warning",
        body: (
            <p>Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the whole style squad at Balmain and the Yeezy team.
                 Thank you Anna for the invite thank you to the whole Vogue team</p>
        )
    }
];

// ##############################
// // // stories for Widgets view
// #############################

const widgetStories = [
    {   // First story
        inverted: true,
        badgeColor: "danger",
        badgeIcon: "now-ui-icons business_briefcase-24",
        title: "Some Title",
        titleColor: "danger",
        body: (
            <p>Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!!
                   It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>
        ),
        footerTitle: "11 hours ago via Twitter",
    },
    {   // Second story
        inverted: true,
        badgeColor: "success",
        badgeIcon: "now-ui-icons design-2_ruler-pencil",
        title: "Another One",
        titleColor: "success",
        body: (
            <p>Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!!
                 I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....</p>
        )
    },
    {   // Third story
        inverted: true,
        badgeColor: "info",
        badgeIcon: "now-ui-icons gestures_tap-01",
        title: "Another Title",
        titleColor: "info",
        body: (
            <div>
                <p>Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM</p>
                <p>What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye</p>
                <hr />
            </div>
        ),
        footer: (
            <UncontrolledButtonDropdown group={false}>
                <DropdownToggle caret className="btn-round" color="info">
                    <i className="now-ui-icons design_bullet-list-67"></i>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
        )
    }
];

// ##############################
// // // data for datatables.net in DataTables view
// #############################

const dataTable = {
    headerRow: ["Name", "Position", "Office", "Age", "Actions"],
    footerRow: ["Name", "Position", "Office", "Age", "Actions"],
    dataRows: [
        ["Tiger Nixon", "System Architect", "Edinburgh", "61"],
        ["Garrett Winters", "Accountant", "Tokyo", "63"],
        ["Ashton Cox", "Junior Technical Author", "San Francisco", "66"],
        ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "22"],
        ["Airi Satou", "Accountant", "Tokyo", "33"],
        ["Brielle Williamson", "Integration Specialist", "New York", "61"],
        ["Herrod Chandler", "Sales Assistant", "San Francisco", "59"],
        ["Rhona Davidson", "Integration Specialist", "Tokyo", "55"],
        ["Colleen Hurst", "Javascript Developer", "San Francisco", "39"],
        ["Sonya Frost", "Software Engineer", "Edinburgh", "23"],
        ["Jena Gaines", "Office Manager", "London", "30"],
        ["Quinn Flynn", "Support Lead", "Edinburgh", "22"],
        ["Charde Marshall", "Regional Director", "San Francisco", "36"],
        ["Haley Kennedy", "Senior Marketing Designer", "London", "43"],
        ["Tatyana Fitzpatrick", "Regional Director", "London", "19"],
        ["Michael Silva", "Marketing Designer", "London", "66"],
        ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "64"],
        ["Gloria Little", "Systems Administrator", "New York", "59"],
        ["Bradley Greer", "Software Engineer", "London", "41"],
        ["Dai Rios", "Personnel Lead", "Edinburgh", "35"],
        ["Jenette Caldwell", "Development Lead", "New York", "30"],
        ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "40"],
        ["Caesar Vance", "Pre-Sales Support", "New York", "21"],
        ["Doris Wilder", "Sales Assistant", "Sidney", "23"],
        ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "47"],
        ["Gavin Joyce", "Developer", "Edinburgh", "42"],
        ["Jennifer Chang", "Regional Director", "Singapore", "28"],
        ["Brenden Wagner", "Software Engineer", "San Francisco", "28"],
        ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "48"],
        ["Shou Itou", "Regional Marketing", "Tokyo", "20"],
        ["Michelle House", "Integration Specialist", "Sidney", "37"],
        ["Suki Burks", "Developer", "London", "53"],
        ["Prescott Bartlett", "Technical Author", "London", "27"],
        ["Gavin Cortez", "Team Leader", "San Francisco", "22"],
        ["Martena Mccray", "Post-Sales support", "Edinburgh", "46"],
        ["Unity Butler", "Marketing Designer", "San Francisco", "47"],
        ["Howard Hatfield", "Office Manager", "San Francisco", "51"],
        ["Hope Fuentes", "Secretary", "San Francisco", "41"],
        ["Vivian Harrell", "Financial Controller", "San Francisco", "62"],
        ["Timothy Mooney", "Office Manager", "London", "37"],
        ["Jackson Bradshaw", "Director", "New York", "65"],
        ["Olivia Liang", "Support Engineer", "Singapore", "64"]
    ]
};

// ##############################
// // // data for populating the calendar in Calendar view
// #############################

var today = new Date();
var y = today.getFullYear();
var m = today.getMonth();
var d = today.getDate();

const events = [
    {
        title: "All Day Event",
        allDay: true,
        start: new Date(y, m, 1),
        end: new Date(y, m, 1),
        color: "default"
    },
    {
        title: "Meeting",
        start: new Date(y, m, d - 1, 10, 30),
        end: new Date(y, m, d - 1, 11, 30),
        allDay: false,
        color: "green"
    },
    {
        title: "Lunch",
        start: new Date(y, m, d + 7, 12, 0),
        end: new Date(y, m, d + 7, 14, 0),
        allDay: false,
        color: "red"
    },
    {
        title: "Nud-pro Launch",
        start: new Date(y, m, d - 2),
        end: new Date(y, m, d - 2),
        allDay: true,
        color: "azure"
    },
    {
        title: "Birthday Party",
        start: new Date(y, m, d + 1, 19, 0),
        end: new Date(y, m, d + 1, 22, 30),
        allDay: false,
        color: "azure"
    },
    {
        title: "Click for Creative Tim",
        start: new Date(y, m, 21),
        end: new Date(y, m, 22),
        color: "orange"
    },
    {
        title: "Click for Google",
        start: new Date(y, m, 21),
        end: new Date(y, m, 22),
        color: "orange"
    }
];

// ##############################
// // // for vector map row in Dashboard view
// #############################

// tslint:disable-next-line:variable-name
const us_flag = require("../assets/img/flags/US.png");
// tslint:disable-next-line:variable-name
const de_flag = require("../assets/img/flags/DE.png");
// tslint:disable-next-line:variable-name
const au_flag = require("../assets/img/flags/AU.png");
// tslint:disable-next-line:variable-name
const gb_flag = require("../assets/img/flags/GB.png");
// tslint:disable-next-line:variable-name
const ro_flag = require("../assets/img/flags/RO.png");
// tslint:disable-next-line:variable-name
const br_flag = require("../assets/img/flags/BR.png");

// tslint:disable-next-line:variable-name
const table_data = [
    {"flag": us_flag, "country": "USA", "count": "2.920", "percentage": "53.23%"},
    {"flag": de_flag, "country": "Germany", "count": "1.300", "percentage": "20.43%"},
    {"flag": au_flag, "country": "Australia", "count": "760", "percentage": "10.35%"},
    {"flag": gb_flag, "country": "United Kingdom", "count": "690", "percentage": "7.87%"},
    {"flag": ro_flag, "country": "Romania", "count": "600", "percentage": "5.94%"},
    {"flag": br_flag, "country": "Brasil", "count": "550", "percentage": "4.34%"}
];

export {
    tasks, // tasks list for Tasks card in Dashboard view
    thead, // data for <thead> of table in Tables view
    tbody, // data for <tbody> of table in Tables view
    stories, // data for the timeline in Timeline view
    widgetStories, // data for the timeline in Widgets view
    dataTable, // data for datatables.net in DataTables view
    events, // data for populating the calendar in Calendar view
    table_data // data for populating the table from Dashboard view
};
