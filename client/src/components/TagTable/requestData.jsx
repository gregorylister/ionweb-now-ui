const requestData = async (tagType, pageSize, page, sorted, filtered, tagId) =>
{
    const res = await fetch(`/${tagType}/get?pageSize=${pageSize}&page=${page}&sorted=${JSON.stringify(sorted)}&filtered=${JSON.stringify(filtered)}&tagId=${JSON.stringify(tagId)}`);
    const resJson = await res.json();
    return resJson;
};

export default requestData;
