/* eslint-disable no-unused-vars */
/* eslint-disable */

export default function createInt8TypedArray(length, position, value){
    const buffer = new ArrayBuffer(length);
    const int8View = new Int8Array(buffer);

    if (position < 0 || position >= length) {
        throw new Error('Position outside range');
    }
    const view = new DataView(buffer);
    view.setInt8(position, value)
    return buffer;
};
