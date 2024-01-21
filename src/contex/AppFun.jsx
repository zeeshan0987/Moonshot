/* eslint-disable react/prop-types */
// import React from 'react'
import AppContext from "./AppContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AppFun = ({ children }) => {
  const API = import.meta.env.VITE_PIXABAY_URL;
  const KEY = import.meta.env.VITE_PIXABAY_KEY;
  const [seacrh, setSearch] = useState("");
  const [imgdata, setImagedata] = useState([]);
  const [result, setResult] = useState("");
  const [open, setOpen] = useState(false);
  const [imgInfo, setImgInfo] = useState({});
  const [page, setPage] = useState(1);
  const[loader,setLoader]=useState(false);
  const[totalHits,setTotalHits] =useState(0)
  const Navigate = useNavigate();

  const fetchImg = async () => {
    try {
      setLoader(true)
      const res = await fetch(
        `${API}/?key=${KEY}&q=${seacrh}&image_type=photo&pretty=true&page=${page}`
      );
      const d = await res.json();
      setTotalHits(d.setTotalHits)
      setImagedata((prevImages) => [...prevImages, ...d.hits]);
      Navigate("/image");
      setResult(seacrh);
      setLoader(false)
    //   setSearch("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AppContext.Provider
      value={{
        totalHits,
        page,
        imgInfo,
        open,
        result,
        seacrh,
        imgdata,
        loader,
        setPage,
        setSearch,
        fetchImg,
        setOpen,
        setImgInfo,
        setTotalHits,
        setImagedata
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppFun;
