/* eslint-disable no-unused-vars */
/* eslint-disable */

export function uploadPhoto(fileName) {
    return new Promise((_, reject) => {
        reject(new Error(`${fileName} cannot be processed`));
    });
}