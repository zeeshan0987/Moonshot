// import React from 'react'
import { useContext } from 'react'
import AppContext from '../contex/AppContext'
import '../css/Category.css'
let arr =['Digital',"Computer",'Codierung','Tech',"Netz","Code","finanzieren","Marketing"]

const Category = () => {
    const {setSearch,setImagedata,fetchImg}=useContext(AppContext)
    const handileClick= async()=>{
        // setSearch(e);
        setImagedata([]);
        fetchImg()
    }
  return (
    <div className='category_body'>
        {arr.map((e,i)=>(
            <div key={i} className='category_item'onMouseEnter={()=>setSearch(e)} onClick={handileClick}>
                <span>{e}</span>
            </div>
        ))}
      
    </div>
  )
}

export default Category
