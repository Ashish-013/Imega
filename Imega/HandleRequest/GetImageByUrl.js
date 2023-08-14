
const File = require('../Modal/imega.modal')


const getImageByUrl = async(req,res) =>{
    try {
      
        const filename = req.params.filename;
        const file = await File.findOne({ filename });

        if (!file) {
            return res.status(404).send('File not found');
        }

        res.setHeader('Content-Type', file.contentType);
        res.send(file.data);
    } catch (error) {
        res.status(500).send('Error retrieving file');
    }
}



module.exports = getImageByUrl
