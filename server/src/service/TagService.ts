import { ITag } from "../model/ITag";
import TagRepository from "../repository/TagRepository";

export interface ITagService
{
    getTags(offset: number, limit: number): Promise<ITag[]>;
    addTag(tag: ITag): Promise<void>;
}

export class TagServiceImpl implements ITagService
{
    constructor(private readonly tagRepository: TagRepository) {}

    public getTags(offset: number, limit: number): Promise<ITag[]>
    {
        return this.tagRepository.getTags(offset, limit);
    }

    public addTag(tag: ITag): Promise<void>
    {
        return this.tagRepository.addTag(tag);
    }
}
