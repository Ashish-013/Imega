
function convertTo(type, buffer){
    
    
    switch (type) {
        case 'webp':
            return buffer.slice(0, 4).toString('hex') === '52494646' && buffer.slice(8, 12).toString('hex') === '57454250';

        case 'png':
            return buffer.slice(0, 8).toString('hex') === '89504e470d0a1a0a';

        case 'jpeg':
            return buffer.slice(0, 4).toString('hex') === 'ffd8ffe0' || buffer.slice(0, 4).toString('hex') === 'ffd8ffe1';

        default:
            // throw new Error('Invalid image type');
            return true

    }
}

module.exports = convertTo