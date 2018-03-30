import TagRepository from "../repository/TagRepository";

export interface ITagService
{
    getTags(tagId: number): Promise<any[]>;
    addTag(tag: any): Promise<void>;
}

export class TagServiceImpl implements ITagService
{
    constructor(private readonly tagRepository: TagRepository) {}

    public getTags(tagId: number): Promise<any[]>
    {
        return this.tagRepository.getTags(tagId);
    }

    public addTag(tag: any): Promise<void>
    {
        return this.tagRepository.addTag(tag);
    }
}
