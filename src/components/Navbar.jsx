// import React from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'
import { supabase } from '../helper/superbaseClient.js'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const Navigate=useNavigate();
  async function signOut() {
    const { error } = await supabase.auth.signOut()

    localStorage.removeItem('token')
    alert('Logout  Successfully')
    console.log(error)
    Navigate('/')
  }
  return (
    <div style={{width:"100%",display:'flex',alignItems:'center',justifyContent:'center', height:'150px'}}>

    
    <div className='Navbar'>
      <Link to='/' style={{textDecoration:'none'}}>
      <div className='navbar_text' style={{paddingLeft:'2rem'}}>Homepage</div>
      </Link>
      <div style={{display:"flex",gap:'1rem',alignItems:'center'}}>
        {!localStorage.getItem('token')?<>
        <Link to='Login' style={{textDecoration:'none'}}>
        <div className='navbar_text'>Login</div>
        </Link>
        <Link to='Signup'style={{textDecoration:'none'}}>
        <div className='navbar_text' style={{marginRight:'2rem',borderRadius:'0.55663rem',border:'2.672px solid #FFF',textAlign:"center"}}>
        Create Account
        </div>
        </Link>
        </>:
        <div onClick={signOut} className='navbar_text' style={{marginRight:'2rem',borderRadius:'0.55663rem',border:'2.672px solid #FFF',textAlign:"center"}}>
        Log out
        </div>
        }
      </div>
    </div>
    </div>
  )
}

export default Navbar
