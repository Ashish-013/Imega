const File  = require('../Modal/imega.modal');



const getAll_Image = async (req, res) => {
  try {
    const images = await File.find();
    console.table(images)
    res.status(200).json(images);
  } catch (error) {
    console.log(error);
  }
}


module.exports = getAll_Image