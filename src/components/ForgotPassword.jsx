import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import logoImg from "./Logo.png";
import {auth } from "../firebaseConfig";
import Alert from 'react-bootstrap/Alert';

function ForgotPW(props){

    const [emailInfo,setEmailInfo]= useState("");
    const [alertVal,setAlertVal]= useState("");
    const [alertStatus, setAlertStatus]= useState(false);
    

    function handleChange(event){
        let emailAdd= event.target.value;
        setEmailInfo(emailAdd);
      }

    function handleForgotPW(){
        auth.sendPasswordResetEmail(emailInfo)
        .then(()=>{
            setAlertStatus(true);
            setAlertVal("Email send. Check your inbox for further instructions");
        }).catch(error=>{
            setAlertStatus(true);
            setAlertVal(error);
        });
    }  

    return (
    <div className="gy-0 forgotPWDiv">
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
                    <h1 className="LoginHeading">Reset Password</h1>
                    <Alert className={alertStatus? "showAlert": 'msg' } key='info' variant='info'>{alertVal}</Alert>
                    <form className="loginForm">
                        <input className="inputInfo" type="email" onChange={handleChange} name="emailAdd" placeholder="Email" value={emailInfo} ></input>
                        <Button className="loginButton" variant="primary" type="submit" onClick={(event)=>{
                            event.preventDefault();
                            if (!emailInfo)
                                alert("Please enter the email address!!")
                            else
                            handleForgotPW();
                        }} > Reset Password </Button>
                    </form>
                    <p className="goToLoginPage" onClick={()=>{
                        setAlertStatus(false);
                        props.onBackToLogin();
                    }}>Sign In</p>
                </div>

            </div>
        </div>
    </div>
    
    )



}


export default ForgotPW;