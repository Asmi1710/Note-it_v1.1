import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import NoteAddIcon from '@mui/icons-material/NoteAdd';

function Sidebar(props) {

    return (<div className="sidebar">
        <div className="sidebarHead">
            <h1 className="sideTitle">📝 Projects</h1>
            <button onClick={props.addProject}><NoteAddIcon /> <span>New</span> </button>
        </div>
    <hr></hr>
    <div className="listOfProjects">
        <ul>
            {props.projects.map((data,index)=>{
                var title=data.projectTitle;
                var id=data.id;
                if (data.projectTitle.length>15){
                    title = data.projectTitle.substring(0,14)+"..."
                    //alert(title);
                }
                return (<li>
                    <button onClick={()=>{
                        props.deleteProject(id);
                    }}><FontAwesomeIcon icon={faTrashCan} /></button>
                    <div key={index}
                        id={index} onClick={()=>{
                            props.linkClicked(id);
                        }}>{title}
                    </div>
                </li>);
            })}
        </ul>
    </div>
    </div>);    
}

export default Sidebar;