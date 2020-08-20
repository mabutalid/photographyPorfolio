import {storage} from './index';

const getImage = (images, cb, location) => {
    storage.child(`${location}/${images}`)
    .getDownloadURL()
    .then((url) => {
        cb(url);
    })
    .catch(err => {
        console.log(err);
    })
}

export default getImage;