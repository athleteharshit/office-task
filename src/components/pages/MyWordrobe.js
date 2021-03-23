import { useState, useEffect } from "react";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./MyWordrobe.css";
import Slidebar from "./Slidebar";
import Header from "./Header";

const defaultImg =
  "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fGNsb3RoZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80";

const MyWordrobe = () => {
  const [image, setImage] = useState(defaultImg);
  const [cropper, setCropper] = useState();
  const [getCropImg, setGetCropImg] = useState(null);
  const [cropImgList, setCropImgList] = useState([]);

  const getCrop = () => {
    if (typeof cropper !== "undefined") {
      setGetCropImg(cropper.getCroppedCanvas().toDataURL());
    }
  };

  useEffect(() => {
    setCropImgList([
      ...cropImgList,
      {
        id: Math.random(),
        img: getCropImg,
      },
    ]);
  }, [getCropImg]);
  // console.log(cropImgList[0]);

  const removeCropImg = (cropItem) => {
    console.log(cropItem);
    let newCropImgList = cropImgList.filter((item) => item.id !== cropItem.id);
    setCropImgList(newCropImgList);
  };

  return (
    <div id="myWordrobe">
      <div className="slidebar">
        <Slidebar />
      </div>
      <div className="myWordrobeContent">
        <Header />
        <div className="cropper">
          <div className="cropperImg">
            <Cropper
              style={{ height: 400, width: "100%" }}
              initialAspectRatio={16 / 9}
              preview=".img-preview"
              src={image}
              viewMode={1}
              guides={true}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={0}
              checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
              onInitialized={(instance) => {
                setCropper(instance);
              }}
            />
          </div>
          <div className="cropImg">
            {cropImgList
              ? cropImgList.map((item) => (
                  <div className="imgDiv" key={item.id}>
                    <img src={item.img} alt="cropped" />
                    <button
                      className="closeBtn"
                      onClick={() => {
                        removeCropImg(item);
                      }}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                ))
              : null}
          </div>
        </div>
        <div className="btnDiv">
          <button className="crop" onClick={getCrop}>
            Save Crop
          </button>
          <button className="cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default MyWordrobe;
