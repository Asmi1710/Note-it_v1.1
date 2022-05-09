import React from "react";
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
//import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import DeleteIcon from '@mui/icons-material/Delete';

function Note (props){
    return (<div className="note">
        <h1 >{props.title}</h1>
        <p >{props.note}</p>
        <button onClick={()=>{
        props.delete(props.id)}}
        ><DeleteIcon /></button>
    </div>);
}


export default Note;
