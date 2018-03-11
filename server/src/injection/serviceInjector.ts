import MSSQLConnectionImpl from "../repository/MSSQLConnection";
import TagRepository from "../repository/TagRepository";
import { ITagService, TagServiceImpl } from "../service/TagService";

export function createTagService(): ITagService
{
    return new TagServiceImpl(new TagRepository(new MSSQLConnectionImpl()));
}
