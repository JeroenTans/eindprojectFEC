

export function encodeBase64 (image) {
    const encodedStringBtoA = btoa(image);
    // console.log(encodedStringBtoA);
    return encodedStringBtoA;
}

export function decodeBase64 (string) {
    const decodedStringAtoB = atob(string);
    console.log(decodedStringAtoB);
    return decodedStringAtoB;
}
//
// export function b64DecodeUnicode(str) {
//     // Going backwards: from bytestream, to percent-encoding, to original string.
//     return decodeURIComponent(atob(str).split('').map(function(c) {
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     }).join(''));
// }

