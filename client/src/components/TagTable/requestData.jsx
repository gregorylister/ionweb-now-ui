const requestData = (pageSize, page, sorted, filtered) =>
{
    return new Promise((resolve, reject) =>
    {
        fetch(`/tag/get?pageSize=${pageSize}&page=${page}&sorted=${JSON.stringify(sorted)}&filtered=${JSON.stringify(filtered)}`)
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
