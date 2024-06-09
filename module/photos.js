import { getAlbum } from "./album.js";

export const getAllPhotos = async () => {
    let res = await fetch("http://172.16.101.146:5803/photos");
    let data = await res.json();
    return data;
};

const validateGetPhotos = async (photosId) => {
    if (typeof photosId !== "string" || photosId === undefined) return { status: 406, message: `The data for photosId is either not arriving or does not comply with the required format.` }
}
export const getPhotos = async (arg) => {
    let val = await validateGetPhotos(arg);
    if (val) return val;
    let res = await fetch(`http://172.16.101.146:5803/photos/${arg}`);
    if (res.status === 404) return { status: 204, message: `The photo does not exist.` }
    let data = await res.json();
    return data;
};

const validateAddPhotos = async ({ albumId, title, url, thumbnailUrl }) => {
    if (typeof albumId != "string" || albumId === undefined) return { status: 406, message: `The data for albumId is either not arriving or does not comply with the required format.` }
    if (typeof title !== "string" || title === undefined) return { status: 406, message: `The data for 'title' is either not arriving or does not comply with the required format.` }
    if (typeof url !== "string" || url === undefined) return { status: 406, message: `The data for 'url' is either not arriving or does not comply with the required format.` }
    if (typeof thumbnailUrl !== "string" || thumbnailUrl === undefined) return { status: 406, message: `The data for 'thumbnailUrl' is either not arriving or does not comply with the required format` }
    let user = await getAlbum({ albumId })
    if (user.status == 204) return { status: 200, message: `The album does not exist.` }
}

export const addPhotos = async (arg) => {
    let val = await validateAddPhotos(arg);
    if (val) return val;
    let config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg)
    };
    let res = await fetch("http://172.16.101.146:5803/photos", config);
    let data = await res.json();
    return data;
};

export const updatePhotos = async (id, arg) => {
    let val = await validateAddPhotos(arg);
    if (val) return val;
    let config = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg)
    };
    let res = await fetch(`http://172.16.101.146:5803/photos/${id}`, config);
    let data = await res.json();
    return data;
}

export const patchPhotos = async (id, arg) => {
    let config = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg)
    };
    let res = await fetch(`http://172.16.101.146:5803/photos/${id}`, config);
    let data = await res.json();
    return data;
}

export const deletePhotos = async (photosId) => {
    let config = {
        method: "DELETE"
    };
    let res = await fetch(`http://172.16.101.146:5803/photos/${photosId}`, config);
    if (res.status === 404) return { status: 204, message: "The Photo ID does not exist or has an unaccepted format" }
    let data = await res.json();
    data.status = 202;
    data.message = `The Photo ${photosId} was deleted from the database`
    return data;
}