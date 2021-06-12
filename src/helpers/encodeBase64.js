

export function encodeBase64 (image) {
    const encodedStringBtoA = btoa(image);
    // console.log(encodedStringBtoA);
    return encodedStringBtoA;
}

export function decodeBase64 (string) {
    const decodedStringAtoB = atob(string);
    // console.log(decodedStringAtoB);
    return decodedStringAtoB;
}
