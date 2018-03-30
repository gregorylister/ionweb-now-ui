const requestData = (tagType, pageSize, page, sorted, filtered, tagId) =>
{
    return new Promise((resolve, reject) =>
    {

        fetch(`/${tagType}/get?pageSize=${pageSize}&page=${page}&sorted=${JSON.stringify(sorted)}&filtered=${JSON.stringify(filtered)}&tagId=${JSON.stringify(tagId)}`)
        .then(res =>
        {
            if (res.ok)
            {
                resolve(res.json());
            }
            else
            {
                reject("Unsuccessful fetch...");
            }
        });
    });
};

export default requestData;
