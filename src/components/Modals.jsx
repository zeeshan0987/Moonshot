import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
// import React from 'react'
import { useContext, useState } from "react";
import AppContext from "../contex/AppContext";
import { FaCircleCheck } from "react-icons/fa6";
import "../css/Modal.css";
const arr = [
  {
    name: "Small",
    value: "640x960",
  },
  {
    name: "Medium",
    value: "1920x2660",
  },
  {
    name: "Big",
    value: "2400x3600",
  },
  {
    name: "Original",
    value: "3850x5640",
  },
];

const Modals = () => {
  const { setOpen, open, imgInfo } = useContext(AppContext);
  const [select, setSelect] = useState(null);
  console.log(imgInfo);

  // let tags = imgInfo.tags;
  // let a =tags.split(",")
  let a=[]
  if (imgInfo.tags) {
    let tags =imgInfo.tags
    a=tags.split(",")
  }
  
  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
    >
      <path
        d="M11.8451 20.3409L20.2303 11.9557M20.2303 20.3409L11.8451 11.9557M11.5933 30.9631H20.4822C27.8896 30.9631 30.8525 28.0002 30.8525 20.5928V11.7039C30.8525 4.29646 27.8896 1.3335 20.4822 1.3335H11.5933C4.18586 1.3335 1.2229 4.29646 1.2229 11.7039V20.5928C1.2229 28.0002 4.18586 30.9631 11.5933 30.9631Z"
        stroke="#3B4043"
        strokeWidth="2.22138"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const handleShare = async (title,url) => {
    try {
      await navigator.share({
        title,
        url,
      });
      console.log('Shared successfully');
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        closeIcon={closeIcon}
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
      >
        <div className="modal_header">Preview ID: {imgInfo.id}
        <div className="modal_item">
          <img src={imgInfo.largeImageURL} alt="" />
          <div>
            <div>
              <div className="Modal_text">Downlode</div>
              <div className="modal_size">
                {arr.map((e, i) => (
                  <div
                    key={e}
                    className={select === i ? "modal_select" : "modal_arr"}
                    onClick={() => setSelect(i)}
                  >
                    <div className="modal_arr_name">{e.name}</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        gap: "2rem",
                      }}
                    >
                      <span className="modal_arr_value">{e.value}</span>
                      <div className="modal_cir">
                        {select === i ? (
                          <FaCircleCheck
                            style={{
                              width: "100%",
                              height: "100%",
                              color: "#4BC34B",
                            }}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a className="modal_Download_btn" style={{textDecoration:'none'}}href={imgInfo.previewURL}>Download for free!</a>
              {/* <div ></div> */}
              <div className="modal_Download_btn" onClick={()=>handleShare(imgInfo.type,imgInfo.webformatURL)}>Share for free!</div>
              <div className="Modal_text">Information</div>
              <div className="modal_Information">
                <div className="modal_info_box">
                  <p className="modal_info_name">User</p>
                  <p className="modal_info_value">{imgInfo.user}</p>
                </div>
                <div className="modal_info_box">
                  <p className="modal_info_name">User Id</p>
                  <p className="modal_info_value">{imgInfo.user_id}</p>
                </div>
                <div className="modal_info_box">
                  <p className="modal_info_name">Type</p>
                  <p className="modal_info_value">{imgInfo.type}</p>
                </div>
              </div>
              <div className="modal_Information">
                <div className="modal_info_box">
                  <p className="modal_info_name">Views</p>
                  <p className="modal_info_value">
                    {imgInfo.views && imgInfo.views.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="modal_info_box">
                  <p className="modal_info_name">Downloads</p>
                  <p className="modal_info_value">
                    {imgInfo.downloads &&
                      imgInfo.downloads.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="modal_info_box">
                  <p className="modal_info_name">Likes</p>
                  <p className="modal_info_value">
                    {imgInfo.likes && imgInfo.likes.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
          
          {/* {a.map((e)=>(
            <p key={e}>{e}</p>
          ))} */}
           <div style={{ display: "flex", flexWrap: "wrap" ,gap:'3px', margin:'0.5rem',alignItems:'center'}}>
           <span className="modal_tags">Tags</span>
        {a.map((e) => (
          <div key={e} className="card_tag">
            {e}
          </div>
        ))}
      </div>
        </div>
      </Modal>
    </>
  );
};

export default Modals;
