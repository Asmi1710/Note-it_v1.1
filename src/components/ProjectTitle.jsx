import React, {useState, useEffect} from "react";
//import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import Dropdown from 'react-bootstrap/Dropdown'

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
          {/* <button className="save" onClick={(event)=>{
              event.preventDefault();
              props.onSave(projectTitle, props.id);
          }}
          ><SaveIcon /></button> */}
          <Dropdown className="save">
          <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
          </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="" onClick={(event)=>{
                            event.preventDefault();
                            props.onSave(projectTitle, props.id);
                        }} >Save Project</Dropdown.Item>
                    <Dropdown.Item href="" onClick={(event)=>{
                            event.preventDefault();
                            if (props.projID!==null)
                                props.deleteProject(props.projID);
                        }} >Delete Project</Dropdown.Item> 
                    {/* <Dropdown.Item href="" onClick={logoutOfApp} >Logout</Dropdown.Item> */}
                </Dropdown.Menu>
          </Dropdown>
          <button className="addNote" onClick={props.onBlankAdd}><AddIcon /></button>
          <p> Add Note</p>
          {/* <button className="list" onClick={(event)=>{
              event.preventDefault();
              props.onAddList(props.id);
          }}
          >Add-To-List</button> */}
      </div>);
}


export default ProjectTitle;