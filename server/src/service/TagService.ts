import TagRepository from "../repository/TagRepository";

export interface ITagService
{
    addTag(tag: any): Promise<void>;
    editTag(tagId: number, tag: any): Promise<void>;
    deleteTag(tagId: number): Promise<void>;
    getTags(tagId: number): Promise<any[]>;
}

export class TagServiceImpl implements ITagService
{
    constructor(private readonly tagRepository: TagRepository) {}

    public addTag(tag: any): Promise<void>
    {
        return this.tagRepository.addTag(tag);
    }

    public editTag(tagId: number, tag: any): Promise<void>
    {
        return this.tagRepository.editTag(tagId, tag);
    }

    public deleteTag(tagId: number): Promise<void>
    {
        return this.tagRepository.deleteTag(tagId);
    }

    public getTags(tagId: number): Promise<any[]>
    {
        return this.tagRepository.getTags(tagId);
    }
}
