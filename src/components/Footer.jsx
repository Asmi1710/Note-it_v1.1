import React from "react";

function Footer (){
    let year = new Date().getFullYear();
    return (
        <footer id="footer">
            <p > Copyright © {year}</p>
        </footer>
    );
}

export default Footer;