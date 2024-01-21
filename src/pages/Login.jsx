import { useState,useEffect } from "react";
import "../css/Login.css";
import { supabase } from "../helper/superbaseClient.js";
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigate=useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('token')){
            Navigate('/') 
        }
    },[])

  async function signInWithEmail(e) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: username,
      password: password,
    });
    if (data) {
        console.log(data.session);
        localStorage.setItem("token", data.session.access_token);
        alert('Logged in Successfully')
        Navigate('/')
    }else{

        console.log(error);
    }
    

  }
  return (
    <div className="container">
        
       
      <form onSubmit={signInWithEmail} className="login-form">
      
        <div style={{color:'#ffff'}}>Login</div>
          <div className="form_input">
            <input
              type="email"
            
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form_input">
            <input
              type="Password"
              
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        


        <div>
          <button type="submit" className="modal_Download_btn">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
