export interface ITag
{
    first_inspection_date: Date;
    general_comments: string;
    inspection_frequency: string;
    item_name: string;
    item_number: string;
    last_modified: Date;
    location: string;
    number_of_inspections: number;
    tag_code: string;
    tag_number: string;
}

export interface IServiceTag
{
    approved_by: string;
    end_date_time: Date;
    executed_by: string;
    last_modified: Date;
    service_date: Date;
    service_number: number;
    start_date_time: Date;
    tag_id: number;
}
