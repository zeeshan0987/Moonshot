import { useState,useEffect } from "react";
import { supabase } from "../helper/superbaseClient.js";
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const Navigate=useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('token')){
            Navigate('/') 
        }
    },[])
  
    // Function to handle form submission
    async function signUpNewUser(e) {
        e.preventDefault();
        const { data, error } = await supabase.auth.signUp({
          email: username,
          password: password,
          options: {
            emailRedirectTo: "https://example.com/welcome",
          },
        });
        if (data) {
            console.log(data.session);
            localStorage.setItem("token", data.session.access_token);
            alert('signUp & Logged in Successfully')
            Navigate('/')
        }else{
            console.log(error)
        }
    }
  return (
    <div className="container">
      <form onSubmit={signUpNewUser} className="login-form">
      <div style={{color:'#ffff'}}>Sign Up</div>
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
          <button type="submit" className="modal_Download_btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
