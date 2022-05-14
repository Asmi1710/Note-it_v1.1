import React,{useState} from "react";
import Button from 'react-bootstrap/Button'
import googleLogo from "./Google-Icon.png";

function LoginPart(props){
    
    const [loginInfo,setLoginInfo]= useState({name :"", picURL:"", email:"", password :""});

    function handleChange(event){
        let {name,value}= event.target;
        setLoginInfo(prevValue=>{
            // if(name==="title")
            // {
            //     return ({head:value, content:prevValue.content });
            // }
            // else
            // {
            //     return ({head:prevValue.head, content:value})
            // }
            return {
              ...prevValue,
              [name]:value
            };
        } );
      }
    
    return (
        <>
        <h1 className="LoginHeading"> Login to note-it</h1>
        <Button className="loginButton" variant="outline-dark" >
        <img
                            alt=""
                            src= {googleLogo}
                            width="25"
                            height="25"
                             // className="d-inline align-top"
                            />
             Continue with Google
        </Button>
        <div className="row orHorizontal">
            <div className="col-lg-5 col-md-5 col-sm-5"><hr/></div>
            <div className="col-lg-2 col-md-2 col-sm-2">or </div>
            <div className="col-lg-5 col-md-5 col-sm-5"><hr/></div>
        </div>
        <form className="loginForm">
            <input className="inputInfo" type="text" onChange={handleChange} name="name" placeholder="Full Name (if not registered)" value={loginInfo.name} ></input>
            <input className="inputInfo" type="text" onChange={handleChange} name="picURL" placeholder="Profile Pic URL (optional)" value={loginInfo.picURL} ></input>    
            <input className="inputInfo" type="email" onChange={handleChange} name="email" placeholder="Email Address" value={loginInfo.email} ></input>
            <input className="inputInfo" type="password" onChange={handleChange} name="password" placeholder="Password" value={loginInfo.password} ></input>
            <Button className="loginButton" variant="primary" type="submit" onClick={(event)=>{
                event.preventDefault();
                props.loginClicked(loginInfo);
            }} > Login</Button>
        </form>
        <div className="loginSignup">Don't have an account? <span onClick={(event)=>{
            event.preventDefault();
            props.loginRegister(loginInfo);
        }}>Register Now</span> </div>
        </>
    )
}

export default LoginPart;