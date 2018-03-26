import * as Sequelize from "sequelize";

export const tagTableDefinition: any =
{
    first_inspection_date: Sequelize.DATE,
    general_comments: Sequelize.STRING,
    inspection_frequency: Sequelize.STRING,
    item_name: Sequelize.STRING,
    item_number: Sequelize.STRING,
    last_modified: Sequelize.DATE,
    location: Sequelize.STRING,
    number_of_inspections: Sequelize.BIGINT,
    tag_code: Sequelize.STRING,
    tag_number: Sequelize.STRING,
};

export const tagServiceTableDefinition: any =
{
    approved_by: Sequelize.STRING,
    end_date_time: Sequelize.DATE,
    executed_by: Sequelize.STRING,
    last_modified: Sequelize.DATE,
    service_date: Sequelize.DATE,
    service_number: Sequelize.BIGINT,
    start_date_time: Sequelize.DATE,
    tag_id: Sequelize.BIGINT,
};

export const tagInspectionTableDefinition: any =
{
    additional_service: Sequelize.BLOB,
    additional_service_details: Sequelize.STRING,
    description: Sequelize.STRING,
    inspected_by: Sequelize.STRING,
    inspection_date: Sequelize.DATE,
    inspection_number: Sequelize.BIGINT,
    last_modified: Sequelize.DATE,
    tag_id: Sequelize.BIGINT,
};
