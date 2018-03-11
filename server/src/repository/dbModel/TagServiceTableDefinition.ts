import * as Sequelize from "sequelize";

export const tagServiceTableName: any = "TagService";

export const TagServiceTableDefinition: any =
{
    ApprovedBy: Sequelize.STRING,
    EndDateTime: Sequelize.DATE,
    ExecutedBy: Sequelize.STRING,
    LastModified: Sequelize.DATE,
    ServiceDate: Sequelize.DATE,
    ServiceNumber: Sequelize.BIGINT,
    StartDateTime: Sequelize.DATE,
    TagId: Sequelize.BIGINT,
};
