import React, {useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Sidebar from "./Sidebar";
import CreateArea from "./CreateArea";
import ProjectTitle from "./ProjectTitle";
import {db} from "../firebaseConfig";
//import firebase from "firebase";



function App(){
    
    const [notes,setNotes]=useState ([]);
    const [project,setProject]=useState({projectTitle:"untitled", isAdded:false, index:null, noteList:[{title:"",content:""}]});
    const [projectList,setProjectList]= useState([]);
    const [projectCounter,setProjectCounter]= useState(0);

    
    function handleAddProject(){
        //alert ("lets add");
        setProjectCounter(projectCounter+1);
    }

    useEffect (()=>{
        setNewProject ();
    },[projectCounter]);

    function setNewProject (){
        setNotes ([]);
        setProject({projectTitle:"untitled", isAdded:false, index:null, noteList:[]});
        //alert(projectCounter);
    }

    // useEffect(()=>{
    //     //alert("proj's index="+ project.index);
    //     //handleAddToList(project.index);
    // })

    function handleSave (newProjectTitle){
        console.log(newProjectTitle);
        setProject((prevProject)=>
        {
            return { 
                projectTitle: newProjectTitle,
                isAdded:prevProject.isAdded,
                index:projectCounter,
                noteList:notes
                };
        });
    }

    useEffect(() => {
        if (project.index!==null){
            handleAddToList(project.index);
        }
    }, [project]);


    function handleAddToList(id){
        if(!project.isAdded)
        {
            project.isAdded=true;
            setProjectList(prevProjectList=>{
                return [...prevProjectList,project]
            });
            //console.log("not-added: list= "+ projectList);
        }
        else{
            console.log("added: counter is: "+ projectCounter+" & id="+ id);
            setProjectList(projectList.filter((projects,index)=>{
                return(index!==id)
            }));
            setProjectList(prevProjectList=>{
                return [...prevProjectList,project]
            });
        }
        
        db.collection('listOfProjects').add({

        })
    }

    //useEffect

    function handleAdd(next){
        setNotes(prevNotes=>{
            return ([...prevNotes,{title:next.head,content:next.content}])
        });   
    }

    function handleDelete(id){
        setNotes(notes.filter((note,index)=>{
            return (index!==id);
        }));
    }   

    return (
        <div className="container">
            <Sidebar projectTitles={projectList} addProject={handleAddProject}/>
            <div className="noteSection">
                <Header />
                <ProjectTitle onSave={handleSave} onAddList={handleAddToList} key={projectCounter} id={projectCounter}  />
                <CreateArea onAdd={handleAdd}/>
                <div>
                {notes.map((note,index)=>
                    <Note 
                    key={index}
                    id={index}
                    delete={handleDelete}
                    title={note.title} 
                    note={note.content} />
                    )}
                </div>
         {/* <Note title="Heading" note="Type the note" /> */}
                <Footer />
            </div>
        </div>
    );
}

export default App; 



// to Do:
//
// 1. launch it on firebase
// 2. handle click on project list item -> get index and project item and 
// setProject to matching index
// 3. handle background
// 4. handle Footer
// 5. handle scrolling of Sidebar
// 6. handle deleting projects 
// 8. work on drag and set position of sticky notes
// 9. make project list to toggle and increase the workspace
// 7. ask friends to test it 