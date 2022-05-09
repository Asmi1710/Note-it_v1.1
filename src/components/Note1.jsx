import React from "react";
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
//import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
//import DeleteIcon from '@mui/icons-material/Delete';

import OffCanvasButton from "./OffCanvas-editNotes";

function Note (props){
    return (<div className="note">
        <h1 >{props.title}</h1>
        <div >
        <p >{props.note}</p>    
        </div>
        <OffCanvasButton className="editButton" />
        {/* <button onClick={()=>{
        props.delete(props.id)}}
        ><CreateIcon /></button> */}
    </div>);
}


export default Note;
