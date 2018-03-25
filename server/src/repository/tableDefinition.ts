import * as Sequelize from "sequelize";

export const tagTableName: any = "Tag";
export const tagServiceTableName: any = "TagService";
export const tagInspectionTableName: any = "TagInspection";

export const tagTableDefinition: any =
{
    firstInspectionDate: Sequelize.DATE,
    generalComments: Sequelize.STRING,
    inspectionFrequency: Sequelize.STRING,
    itemName: Sequelize.STRING,
    itemNumber: Sequelize.STRING,
    lastModified: Sequelize.DATE,
    location: Sequelize.STRING,
    numberOfInspections: Sequelize.BIGINT,
    tagCode: Sequelize.STRING,
    tagNumber: Sequelize.STRING,
};

export const tagServiceTableDefinition: any =
{
    approvedBy: Sequelize.STRING,
    endDateTime: Sequelize.DATE,
    executedBy: Sequelize.STRING,
    lastModified: Sequelize.DATE,
    serviceDate: Sequelize.DATE,
    serviceNumber: Sequelize.BIGINT,
    startDateTime: Sequelize.DATE,
    tagId: Sequelize.BIGINT,
};

export const tagInspectionTableDefinition: any =
{
    additionalService: Sequelize.BLOB,
    additionalServiceDetails: Sequelize.STRING,
    description: Sequelize.STRING,
    inspectedBy: Sequelize.STRING,
    inspectionDate: Sequelize.DATE,
    inspectionNumber: Sequelize.BIGINT,
    lastModified: Sequelize.DATE,
    tagId: Sequelize.BIGINT,
};
