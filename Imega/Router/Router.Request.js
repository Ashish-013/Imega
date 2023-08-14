const router = require('express').Router()

const multer = require('multer');
const getAll_Image = require('../HandleRequest/GetAll_Image');
const getImageByUrl = require('../HandleRequest/GetImageByUrl');
const uploadImage = require('../HandleRequest/uploadImage');

// Set up Multer for handling file uploads and storage
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });


router.post(`/${process.env.UPLOAD}`,upload.single('file'),uploadImage);
router.get(`/${process.env.GETBYNAME}/:filename`,getImageByUrl );
router.get('/images',getAll_Image)

module.exports = router