/* eslint-disable no-unused-vars */
/* eslint-disable */

import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
    const signUpPromise = signUpUser(firstName, lastName);
    const uploadPhotoPromise = uploadPhoto(fileName);

    const results = await Promise.allSettled([signUpPromise, uploadPhotoPromise]);

    return results.map(result => {
        return {
            status: result.status,
            value: result.status === 'fulfilled' ? result.value : result.reason,
        };
    });
}

export default handleProfileSignup;
