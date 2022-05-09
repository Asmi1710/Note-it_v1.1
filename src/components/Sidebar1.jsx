// import React from "react";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import NoteAddIcon from '@mui/icons-material/NoteAdd';

// function Sidebar(props) {

//     return (<div className="sidebar">
//         <div className="sidebarHead">
//             <h1 className="sideTitle">📝 Projects</h1>
//             <button onClick={props.addProject}><NoteAddIcon /> <span>New</span> </button>
//         </div>
//     <hr></hr>
//     <div className="listOfProjects">
//         <ul>
//             {props.projects.map((data,index)=>{
//                 var title=data.projectTitle;
//                 var id=data.id;
//                 if (data.projectTitle.length>15){
//                     title = data.projectTitle.substring(0,14)+"..."
//                     //alert(title);
//                 }
//                 return (<li>
//                     <button onClick={()=>{
//                         props.deleteProject(id);
//                     }}><FontAwesomeIcon icon={faTrashCan} /></button>
//                     <div key={index}
//                         id={index} onClick={()=>{
//                             props.linkClicked(id);
//                         }}>{title}
//                     </div>
//                 </li>);
//             })}
//         </ul>
//     </div>
//     </div>);    
// }

// export default Sidebar;


import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import logoImg from "./Logo.png";

const Sidebar = (props) => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar minWidth="110px" maxWidth="210px" textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            {/* <img
            alt=""
            src= {logoImg}
            width="35"
            height="35"
            className="d-inline-block align-top"
            /> */}
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Projects
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          {
            props.projects.map((data,index)=>{
                 var title=data.projectTitle;
                 var id=data.id;
                 if (data.projectTitle.length>15){
                     title = data.projectTitle.substring(0,14)+"..."
                     //alert(title);
                 }
                 return(
                  <CDBSidebarMenuItem icon="table">
                  <div key={index}
                         id={index} onClick={()=>{
                             props.linkClicked(id);
                         }}>{title}
                  </div>
                  </CDBSidebarMenuItem>
                 );

            })
          }
           
            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;