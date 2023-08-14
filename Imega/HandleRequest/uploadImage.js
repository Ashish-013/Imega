require('dotenv').config()
const imegaModel =  require('../Modal/imega.modal')

const uploadImage = async (req, res) => {
  try {
    // Check if the file is already in WebP format
    let webpBuffer = req.file.buffer;
  


   
      const type = req.file.mimetype.split('/').pop()



    // Calculate Size of image
    let size = webpBuffer.length;
    size /=1024;
    size = size >= 1024 ? (size/1024).toFixed(2)+'mb' : size.toFixed(2)+'kb'

    // Create a new file object


    const newFile =new imegaModel ({
      data: webpBuffer,
      contentType: `image/${type}`,
      filename: req.file.originalname.replace(/\.[^/.]+$/, 'a') + `.${type}`,
      size,
      type
    });

    // Generate the file URL
    newFile.url = `${process.env.HOSTNAME}/${process.env.GETBYNAME}/${newFile.filename}`;

    // Save the file to the database
    await newFile.save();

    // Send the URL as a response
    res.status(200).json({ URL: newFile.url, message: 'Uploaded Sucessfully', status: true,size,type });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed To Upload', status: false });
  }
}



module.exports = uploadImage