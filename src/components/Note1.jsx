import { refType } from "@mui/utils";
import React, { forwardRef} from "react";
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
//import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
//import DeleteIcon from '@mui/icons-material/Delete';

import OffCanvasButton from "./OffCanvas-editNotes";

const Note1 = forwardRef((props, ref)=> {

    function handleSave(editedNote){
        //alert("note area= "+ editedNote.head+"  props-> "+props.title);
        props.onSave(editedNote, props.id);
    }

    function handleDelete(){
        props.delete (props.id);
    }

    return (<div ref= {ref} className="note">
        <h1 >{props.short}</h1>
        <div >
        <p >{props.note}</p>    
        </div>
        <OffCanvasButton className="editButton" onSave={handleSave} id={props.id} onDelete={handleDelete} heading={props.title} content={props.note}/>
        {/* <button onClick={()=>{
        props.delete(props.id)}}
        ><CreateIcon /></button> */}
    </div>);
})


export default Note1;
