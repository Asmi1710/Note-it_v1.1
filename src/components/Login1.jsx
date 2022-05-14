import React,{useState} from "react";
//import LoginPart from "./LoginPart";
import loginImage from "./loginImage.jpg";
import logoImg from "./Logo.png";
import {auth, provider } from "../firebaseConfig";
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button'
import googleLogo from "./Google-Icon.png";
import { login } from "../features/userSlice";
import ForgotPassword from "./ForgotPassword";

function Login1 (props){

    // const [loginInfo,setLoginInfo]= useState({name :"", picURL:"", email:"", password :""});
    const [loginInfo,setLoginInfo]= useState({name :"", email:"", password :""});
    const dispatch = useDispatch ();
    const [forgotPW, setForgotPW]= useState (false);

// -----------tracking inputs-------------------------
    
    function handleChange(event){
        let {name,value}= event.target;
        setLoginInfo(prevValue=>{
            return {
              ...prevValue,
              [name]:value
            };
        } );
      }

//-----------register new users-------------------------

    function register(){
        if(!loginInfo.name)
            alert("Please enter a full name!!");
        auth.createUserWithEmailAndPassword(loginInfo.email, loginInfo.password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                name: loginInfo.name,
                // photoURL: loginInfo.picURL
            })
            .then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                    name: loginInfo.name,
                    //picURL: loginInfo.picURL
                }));
            });
        }).catch(error =>{
            alert (error.message);
        });
        props.resetProj();
    }

//-----------sign in old users-------------------------

    function loginToApp(e){
        e.preventDefault();
        auth.signInWithEmailAndPassword (loginInfo.email, loginInfo.password)
        .then (userAuth => {
            dispatch(login({
                email:userAuth.user.email,
                uid: userAuth.user.uid,
                name: userAuth.user.name,
                //picURL: userAuth.user.picURL
            }))
        }).catch(error=> alert(error));
        props.resetProj();
    }

//-----------login users with google-------------------------    

    function loginWithGoogle(){
        auth.signInWithPopup(provider)
        .then(({user}) =>{
            dispatch(login({
                name:user.displayName,
                email:user.email,
                uid:user.uid
            }))
        })
        .catch(error => alert(error.message));
    }
    
// -----------forgot Password( PW)------------------------------

    // function handleForgotPW(emailAdd){
    //     auth.sendPasswordResetEmail(emailAdd)
    //     .then(()=>{
    //         alert()
    //     })
    // }

    function handleBackToLogin(){
        setForgotPW(false);
    }

    return (
    <>
        
          {/* <LoginHeader /> */}
        <div className="Login-page">

    { forgotPW ? (<ForgotPassword onBackToLogin={handleBackToLogin}/>) : (
            
                <div className="gy-0 loginDiv">
                <div className="row gx-0 ">
                    <div className="col loginForm">
                        <div className="login-logo">
                        <img
                            alt=""
                            src= {logoImg}
                            width="55"
                            height="55"
                            className="navbar-brand-login"
                             // className="d-inline align-top"
                            />
                             note-it
                        </div>

                        <div>
                            <h1 className="LoginHeading">Sign into your account</h1>
                            <Button className="loginButton" variant="outline-dark" onClick={loginWithGoogle} >
                            <img
                                                alt=""
                                                src= {googleLogo}
                                                width="25"
                                                height="25"
                                                className="google-image"
                                                />
                                Sign in with Google
                            </Button>
                            <div className="row gx-0 orHorizontal">
                                <div className="col-lg-5 col-md-5 col-sm-5 leftHR"><hr/></div>
                                <div className="col-lg-2 col-md-2 col-sm-2">or </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 rightHR"><hr/></div>
                            </div>
                            <form className="loginForm">
                                <input className="inputInfo" type="text" onChange={handleChange} name="name" placeholder="Full Name (if not registered)" value={loginInfo.name} ></input>
                                {/* <input className="inputInfo" type="text" onChange={handleChange} name="picURL" placeholder="Profile Pic URL (optional)" value={loginInfo.picURL} ></input>      */}
                                <input className="inputInfo" type="email" onChange={handleChange} name="email" placeholder="Email Address" value={loginInfo.email} ></input>
                                <input className="inputInfo" type="password" onChange={handleChange} name="password" placeholder="Password" value={loginInfo.password} ></input>
                                <p className="forgotPW" onClick={()=>{
                                    setForgotPW(true);
                                }}>(Forgot Password?)</p>
                                <Button className="loginButton" variant="primary" type="submit" onClick={(event)=>{
                                    event.preventDefault();
                                    loginToApp(event);
                                }} > Sign In </Button>
                            </form>
                            <div className="loginSignup">Don't have an account? <span onClick={(event)=>{
                                event.preventDefault();
                                register(loginInfo);
                            }}>Register Now</span> </div>
                        </div>
            
                    </div>
                </div>
                </div> 
            )}                
        </div>
    </>)
    

}


export default Login1;