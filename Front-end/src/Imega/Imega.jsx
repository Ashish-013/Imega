import React, { useContext } from "react";
import ImageaApi from "../ContextApi/Handle.image.api";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Alertmsg from "./Alertmsg";
import Loader from "./Loader";
import Response from "./Response";

const Imega = () => {
  const {
    handleImageChange,
    handleDrag,
    selectImageData,
    handleImageUpload,
    AlertMessage,
    loader,
    responseData,
    images,
  } = useContext(ImageaApi);



  return (
    // Start from Here //
    <>
      {/* Logo OF nAME OF Project */}

      <div className="Cp-name w-full p-2">
        <h1 className="text-3xl shadow-black drop-shadow-2xl  text-black font-bold font-serif">
          Imega
        </h1>
      </div>

      {/* Logo and Name of Projec : End Here */}

      {/* ------------------------------------------------------------------ */}

      {/* Image Choose Form */}

      <div
        onDrop={handleDrag}
        onDragOver={(e) => e.preventDefault()}
        className=" bg-gray-50 rounded-xl shadow m-auto w-10/12 h-44 flex flex-col  mt-4  justify-center items-center"
      >
        <div className=" shadow-none pasteUrl w-fit h-fit ">
          <button
            className="text-lg font-semibold font-serif p-3 bg-blue-600 hover:bg-blue-800 transition-all duration-100 ease-in-out pl-8 pr-8 rounded-2xl text-white  "
            onClick={() => document.getElementById("imageInput").click()}
          >
            Select Image
          </button>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>

        <div className="or_opt p-1 shadow-none  w-fit  bg-gray-50 rounded-xl ">
          <span className="p-1">Or</span>
          <span className="text-lg font-bold font-serif">Drag Image</span>
        </div>
      </div>

      {/* Image Choose Form : End Here*/}

      {/* image after selectted and sucessfuly uploade  */}
      {/* current image replace by uloaded image once sucessfully uploaded */}

      {responseData ? (
        <Response data={responseData} />
      ) : (
        <>
          {selectImageData && (
            <div className=" shadow rounded-lg p-2 w-10/12 m-auto h-fit flex justify-between items-center flex-col gap-2 sm:flex-row ">
              <>
                <div className="m-auto  w-full sm:w-10/12 p-2 rouded-sm h-full">
                  <div className="w-56 h-56 m-auto  object-fill ">
                    <img
                      className="block m-auto h-full w-full
            object-contain object-center rounded"
                      src={URL.createObjectURL(selectImageData.file)}
                      alt="selected"
                    />
                  </div>

                  <div className="info w-full p-1 mt-3 ">
                    <ul className="font-semibold font-mono w-fit border pl-2 pr-2 bg-yellow-500 rounded text-black shadow-md">
                      <li>Size: {selectImageData.size} </li>
                      <li>Type: {selectImageData.type} </li>
                    </ul>
                  </div>
                </div>
                <div className="sm:w-1/5 w-full h-full flex justify-center items-center">
                  <button
                    className="text-lg block m-auto  font-semibold font-serif p-3 bg-blue-600 hover:bg-blue-800 transition-all duration-100 ease-in-out pl-8 pr-8 rounded-2xl text-white  "
                    onClick={handleImageUpload}
                  >
                    Upload
                  </button>
                </div>
              </>
            </div>
          )}
        </>
      )}

      {/* image after selectted and sucessfuly uploade  : End Here */}

      {/* All the uploaded image :Image Gallery  */}

        <>
          <div className="w-10/12 m-auto pb-3">
            <h1
              className="text-3xl font-bold font-mono  drop-shadow-2xl w-fit p-1 mt-3  
            shadow-red-500 text-red-500"
            >
              Gallery
            </h1>
          </div>
          <div className="w-10/12 p-1 gap-2  m-auto flex flex-wrap">
            {
                images && <Gallery   data = {images}/> 
            }
          </div>
        </>
    

      {/* All the uploaded image  : End Here  */}

      {/* Alert Component  */}
      {AlertMessage && <Alertmsg data={AlertMessage} />}

      {/* Alert Component : End Here */}

      {/* Footer */}

      <Footer />

      {/* Loader Component */}
      {loader && <Loader />}
    </>
  );
};

export default Imega;
