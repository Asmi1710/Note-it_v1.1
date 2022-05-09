import React, {useState, useEffect} from "react";
import SaveIcon from '@mui/icons-material/Save';

function ProjectTitle(props){
    //alert ("the title of project= "+ props.title);
    const[projectTitle,setProjectTitle]=useState(props.title);

    // setProjectTitle (props.title);
    function handleChange(event){
        var name = event.target.value;
        setProjectTitle(name);
    }
    
    useEffect (()=>{
        setProjectTitle(props.title);
    },[props.title])

    return (<div className="inputArea">
          <input onChange={handleChange} className="projectTitle" placeholder="untitled" value={projectTitle} />
          <button className="save" onClick={(event)=>{
              event.preventDefault();
              props.onSave(projectTitle, props.id);
          }}
          ><SaveIcon /></button>
          <button>Add Note</button>
          {/* <button className="list" onClick={(event)=>{
              event.preventDefault();
              props.onAddList(props.id);
          }}
          >Add-To-List</button> */}
      </div>);
}


export default ProjectTitle;