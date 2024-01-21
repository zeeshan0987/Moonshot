/* eslint-disable no-unused-vars */
import { useEffect, useContext, useState } from "react";
import AppContext from "../contex/AppContext";
import Searchbox from "../components/Searchbox";
import Img_card from "../components/Img_card";
import Modals from "../components/Modals";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Category from "../components/Category";
import Loader from "../components/Loader";

const Image = () => {
  const {
    result,
    imgdata,
    setOpen,
    setImgInfo,
    page,
    loader,
    setPage,
    fetchImg,
    totalHits,
  } = useContext(AppContext);
  const Navigate = useNavigate();

  useEffect(() => {
    if (imgdata.length === 0) {
      Navigate('/')
    }
  }, []);

  const handileClick = (e) => {
    setImgInfo(e);
    setOpen(true);
  };
  const fetchData = () => {
    setPage((pre) => pre + 1);
    fetchImg();
  };

  return (
    <div>
      <Searchbox placeholder="Start new Search" />
      <div className="container">
        <span className="home_header">Result :{result} </span>
      </div>
      <Category />
      <div
        style={{
          width: "100vw",
          height: "auto",
          background: "#ffff",
          display: "flex",
          justifyContent: "center",
        }}
      >{loader?<Loader />:
        <InfiniteScroll
          dataLength={imgdata.length}
          next={fetchData}
          hasMore={imgdata.length === totalHits ? false : true}
          loader={<div className="container"><Loader /></div>}
          style={{width:'100%'}}
        >
          <div
          className="img_body"
            // style={{
            //   width: "100%",
            //   display: "flex",
            //   flexWrap: "wrap",
            //   height: "auto",
            //   gap: "3rem",
            //   alignItems: "center",
            //   justifyContent: "center",
            // }}
          >
            {imgdata.map((e, i) => (
              <div key={i} onClick={() => handileClick(e)}>
                <Img_card webformatURL={e.webformatURL} tags={e.tags} />
              </div>
            ))}
          </div>
        </InfiniteScroll>}
      </div>
      <Modals />
    </div>
  );
};

export default Image;
