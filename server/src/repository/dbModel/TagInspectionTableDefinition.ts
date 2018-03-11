import * as Sequelize from "sequelize";

export const tagInspectionTableName: any = "TagInspection";

export const TagInspectionTableDefinition: any =
{
    AdditionalService: Sequelize.BLOB,
    AdditionalServiceDetails: Sequelize.STRING,
    Description: Sequelize.STRING,
    InspectedBy: Sequelize.STRING,
    InspectionDate: Sequelize.DATE,
    InspectionNumber: Sequelize.BIGINT,
    LastModified: Sequelize.DATE,
    TagId: Sequelize.BIGINT,
};
