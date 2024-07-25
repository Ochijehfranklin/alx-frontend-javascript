import { uploadPhoto, createUser } from './utils'

function handleProfileSignup() {
    const photoPromise = uploadPhoto();
    const createUserPromise = createUser();

    Promise.all([photoPromise, createUserPromise])
        .then((results) => {
            const [ uploadPhotoResult, createUserResult ] = results;

            console.log(`${uploadPhotoResult.body} ${createUserResult.firstName} ${createUserResult.lastName}`);
        })
        .catch((error) => {
                console.error('Signup system offline', error);
        });  
}

export default handleProfileSignup;
