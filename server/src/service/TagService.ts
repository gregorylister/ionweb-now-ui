import TagRepository from "../repository/TagRepository";

export interface ITagService
{
    getTags(offset: number, limit: number): Promise<any[]>;
    addTag(tag: any): Promise<void>;
}

export class TagServiceImpl implements ITagService
{
    constructor(private readonly tagRepository: TagRepository) {}

    public getTags(offset: number, limit: number): Promise<any[]>
    {
        return this.tagRepository.getTags(offset, limit);
    }

    public addTag(tag: any): Promise<void>
    {
        return this.tagRepository.addTag(tag);
    }
}
