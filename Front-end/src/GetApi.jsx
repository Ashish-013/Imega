import React, { useContext, useState, useEffect } from "react";
import ImageaApi from "./ContextApi/Handle.image.api";
import Alertmsg from "./Imega/Alertmsg";
import Footer from "./Imega/Footer";
import Gallery from "./Imega/Gallery";
import Loader from "./Imega/Loader";

const GetApi = () => {
  const { postImage, availableConversion, imageSize } = useContext(ImageaApi);
  let [selectedFile, setSelectedFile] = useState(null);
  const [format, setformat] = useState(null);
  const [claimId, setclaimId] = useState(null);
  const [prop, setprop] = useState({
    size: null,
    type: null,
  });
  const [qAlert, setqAlert] = useState(null);
  const [Alertdata, setAlertdata] = useState(null);
  // get image file data on change

  const handleImageChange = (event) => {
    try {
      const imageFile = event.target.files[0];
      setSelectedFile(imageFile);
      setprop({
        size: imageSize(imageFile.size),
        type: imageFile.type.split("/").pop(),
      });
      
      setqAlert(1);
    } catch (error) {
      setqAlert(0);
      setAlertdata({ message: "Some error", status: false });
    }
    }
  };





  const manageFormat = (id) => {
    const data = availableConversion.find((e) => {
      return id === e.id;
    });
    setclaimId(id);

    setformat(data.format);
  };
//   const handleDrop = (event) => {
//     event.preventDefault();
//     const image = event.dataTransfer.files[0];
//     setSelectedFile(image);
//   };

  // Handle image upload
//   const handleImageUpload = async () => {
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append("file", selectedFile);
//       formData.append("imgFormat", format);

//       const response = await postImage(formData);
//       console.log(response);

//       setclaimId(null);
//       setformat(null);
//     } else {
//       window.alert("No File Selected");
//     }
//   }

  return (
    <>
    
      
     

  
    



      {/* <Loader/> */}
   
     */}
    </>
  )
}
  

export default GetApi;
