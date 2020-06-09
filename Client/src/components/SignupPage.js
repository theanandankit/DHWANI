import React from 'react';
import Upload from "./Upload";
import '../stylesheet/upload.css';

const SignupPage = () =>{
    return(
        <div className = 'signupbox'>
                <h1 className = 'formtop'>Create Account</h1>
                <div>
                <h2 className = 'formfield'>New Username</h2>
                <input className = 'forminput' type = 'text' placeholder = 'Username' name = 'username'/>
                </div>
                <div>
                <h2 className = 'formfield'>Add a Bio</h2>
                <input className = 'forminput' type = 'text' placeholder = 'Something about You!' name = 'bio'/>
                </div>
                <h2 className = 'formfield'>Profile Picture</h2>
                <div><Upload /></div>
                <div>
                <h2 className = 'formfield'>Enter Email</h2>
                <input className = 'forminput' type = 'email' placeholder = 'abc@dhwani.co.in' name = 'email'/>
                </div>
                <div>
                <h2 className = 'formfield'>Select Account Type</h2>
                <select className = 'seltype'>
                <option value="0">Enthusiast</option>
                <option value="1">Artist</option>
                </select>
                </div>
                <div>
                <h2 className = 'formfield'>New Password</h2>
                <input className = 'forminput' type = 'password' name = 'pass' placeholder = '********'/>
                </div>
                <div>
                <h2 className = 'formfield'>Retype Password</h2>
                <input className = 'forminput' type = 'password' name = 'repass' placeholder = '********'/>
                </div>
                <button className = 'clickme3 bt1'>Create Account</button>
        </div>
    );
}

export default SignupPage;