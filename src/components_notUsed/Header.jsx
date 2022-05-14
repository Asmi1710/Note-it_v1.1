import React, {useState} from "react";

function Header (){

    const [time,updateTime]= useState(new Date().toLocaleTimeString());

    function updating(){
        let newTime = new Date().toLocaleTimeString();
        let date = new Date().toLocaleDateString();
        updateTime(newTime);   
    }
    setInterval (updating,1000);

    return (
    <header >
        <h1 className="title">Note-<span>🖋</span>t</h1>
        <h1 className="time">{time}</h1>
    </header>);
}

export default Header;