/* eslint-disable react/prop-types */
// import React from 'react'
import '../css/Searchbox.css'
import seacrhIcon from '../assets/searchIcon.svg'
import { useContext } from 'react'
import AppContext from '../contex/AppContext'

const Searchbox = ({placeholder}) => {
    const {seacrh,setSearch,fetchImg,setImagedata}=useContext(AppContext)
    const handileClick=()=>{
      setImagedata([]);
      fetchImg();
    }
  return (
    <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div className="searchbox">
        <div style={{padding:'1rem'}}><img src={seacrhIcon} alt="Img" /></div>
        <div style={{width:'0.11131rem',height:'2.28225rem',background:'#ffff'}}></div>
        <div className='input_box' >
            <input type="text" value={seacrh} onChange={(e)=>setSearch(e.target.value)} placeholder={placeholder} style={{color:'#ffff',background:'none',outline:'none',width:'100%',height:'1.5rem',border:"none"}} />
        </div>
        <div onClick={handileClick} id='search_btn'>GO!</div>

      </div>
    </div>
  )
}

export default Searchbox
