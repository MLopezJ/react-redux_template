
export const apiGet = (url) => () =>
    fetch(url, {
        method:"GET",
        headers: new Headers({"Content-type":"application/json"})
    })
    .then(data=>data.json())
    .catch(e => Promise.reject(e));

