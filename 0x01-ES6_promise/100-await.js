/* eslint-disable no-unused-vars */
/* eslint-disable */

import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
    const response = {
        photo: null,
        user: null,
    };

    try {
        const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
        response.photo = photo;
        response.user = user;
    } catch (error) { 
        // failed promise returns null
    }

    return response;
}
