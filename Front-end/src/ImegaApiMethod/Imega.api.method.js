import { useState,useEffect } from "react";
import axios from "axios";

import ImeggaApi from "../ContextApi/Handle.image.api";

const ImegaRequestHandle = (props) => {
    const [selectImageData, setSelectImageData] = useState(null);

    const [loader, setLoader] = useState(null);
    const [AlertMessage, setAlertMessage] = useState(null);
    const [responseData, setresponseData] = useState(null);
    const [images, setimages] = useState(null)


    const delay = () => {
        setTimeout(() => {
            setAlertMessage(null);
        }, 2000);
    };

    const imageSize = (size) => {
        size /= 1024;

        return size >= 1024
            ? (size / 1024).toFixed(2) + "mb"
            : size.toFixed(2) + "kb";
    };

    const handleImageChange = (event) => {
        try {
            const file = event.target.files[0];
            setSelectImageData({
                file: file,
                size: imageSize(file.size),
                type: file.type.split("/").pop(),
            });
        } catch (error) {
            setAlertMessage({
                message: "Error",
                status: false,
            });
            delay();
        }
    };

    const handleDrag = (event) => {
        try {
            event.preventDefault();
            const file = event.dataTransfer.files[0];
            setSelectImageData({
                file: file,
                size: imageSize(file.size),
                type: file.type.split("/").pop(),
            });
        } catch (error) {
            setAlertMessage({
                message: "Error",
                status: false,
            });
            delay();
        }
    };



    const getAllImages = async () => {

        try {
            const response = await axios.get('http://localhost:80/images');

            console.table(response.data)
            setimages(response.data);
        } catch (error) {
            console.log(error);
        }

    }


    /**
         * Sends a POST request to upload an image.
         data - The image data to be uploaded.
         */

    const postImage = async (data) => {
        try {
            const headers = {
                "Content-Type": "multipart/form-data",
            };
            const response = await axios.post("http://localhost:80/upload", data, {
                headers,
            });
            setresponseData(response.data);
            getAllImages()



            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    };

    const handleImageUpload = async () => {
        setLoader(true);

        try {
            if (selectImageData) {
                const data = {
                    file: selectImageData.file,

                };
                let data1 = await postImage(data);

                if (data1) {
                    setLoader(null);
                    setAlertMessage({
                        message: "Sucessfully Uploaded",
                        status: true,
                    });
                    delay();
                } else {
                    setAlertMessage({
                        message: "Failed To Upload",
                        status: false,
                    });
                    delay();
                    setLoader(null);
                }
            }
        } catch (error) {
            setAlertMessage({
                message: "To Upload",
                status: false,
            });
            delay();
        }

        // else console.log('NO FILE SELECTED');
    };



    useEffect(() => {
      getAllImages()
   console.log('p');
    }, [])
    




    return (
        <ImeggaApi.Provider
            value={{

                selectImageData,
                handleDrag,
                handlecImageChange,
images,
                handleImageUpload,
                AlertMessage,
                loader, responseData,
            }}
        >
            {props.children}
        </ImeggaApi.Provider>
    );
};

export default ImegaRequestHandle;
