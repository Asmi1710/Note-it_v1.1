import React from "react";
import LoginPart from "./LoginPart";
import loginImage from "./loginImage.jpg";
import logoImg from "./Logo.png";
import {auth } from "../firebaseConfig";
import { useDispatch } from "react-redux";

function Login (){

    const dispatch = useDispatch();
    function register(loginInfo){
        if(!loginInfo.name)
            alert("Please enter a full name!!");
        auth.createUserWithEmailAndPassword(loginInfo.email, loginInfo.password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName: loginInfo.name,
                photoURL: loginInfo.picURL
            })
            .then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: loginInfo.name,
                    photoURL: loginInfo.picURL
                }));
            });
        }).catch(error =>{
            alert (error.message);
        });
    };

    function login(loginInfo){
        alert("login " +loginInfo.name);
    }
    //return <Header />;
    return (
        <>
        {/* <LoginHeader /> */}
        <div className="Login-page">
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
                            <LoginPart loginClicked={login} loginRegister={register}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>);

}


export default Login;