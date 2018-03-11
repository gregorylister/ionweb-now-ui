import * as Sequelize from "sequelize";

export const tagTableName: any = "DELETEME"; // TODO: select tag table

export const TagTableDefinition: any =
{
    FirstInspectionDate: Sequelize.DATE,
    GeneralComments: Sequelize.STRING,
    InspectionFrequency: Sequelize.STRING,
    ItemName: Sequelize.STRING,
    ItemNumber: Sequelize.STRING,
    LastModified: Sequelize.DATE,
    Location: Sequelize.STRING,
    NumberOfInspections: Sequelize.BIGINT,
    TagCode: Sequelize.STRING,
    TagNumber: Sequelize.STRING,
};
