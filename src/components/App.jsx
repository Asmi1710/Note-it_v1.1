import React, {useEffect, useState} from "react";
import Header1 from "./Header1";
import Footer from "./Footer";
import Note1 from "./Note1";
import Sidebar1 from "./Sidebar1";
import CreateArea from "./CreateArea";
import ProjectTitle from "./ProjectTitle";
import {db} from "../firebaseConfig";
import { collection, addDoc, setDoc, doc, updateDoc, deleteDoc, onSnapshot, serverTimestamp , query, orderBy } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Login from "./Login";
//import firebase from 'firebase';



function App(){
    
    const [notes,setNotes]=useState ([]);
    const [project,setProject]=useState({projectTitle:"untitled", isAdded:false, index:null, id:0, timestamp:null, noteList:[{title:"",content:""}]});
    const [projectList,setProjectList]= useState([]);
    const [projectCounter,setProjectCounter]= useState(0);

    //using snapshot to read data from the database
    useEffect (()=> {
        // db.collection("projectList")
        // .orderBy('timestamp', "desc")
        // .onSnapshot((snapshot)=>{
        //     setProjectList (snapshot.docs.map( doc => {
        //         return doc.data();
        //     }));
        // });
        const collectionRef = collection(db,"projectList");
        const q = query (collectionRef, orderBy ("timestamp", "desc"));
        const returnObj= onSnapshot(q,(snapshot)=>{
            setProjectList (snapshot.docs.map( doc => {
                return doc.data();
            }));
        });
        return returnObj;
    }
    ,[]);


    function handleBackToOldProject(idValue){
        alert("I'm clicked & id= "+idValue);
        console.log(projectList.filter((project)=>{
                return(project.id===idValue)
            }));
        let clickedProject= projectList.filter((project)=>{
            return(project.id===idValue)
        });
        setProject({
            projectTitle:clickedProject[0].projectTitle, 
            isAdded:clickedProject[0].isAdded, 
            index:clickedProject[0].index, 
            id:clickedProject[0].id, 
            timestamp:clickedProject[0].timestamp,
            noteList:clickedProject[0].noteList
        });
        setNotes(clickedProject[0].noteList);
        setProjectCounter(clickedProject[0].index);
    }

    const handleProjectDeletion = async(idValue)=>{
        alert("I'm clicked & ID= "+ idValue);
        const docRef = doc(db,'projectList', idValue);
        await deleteDoc (docRef); 
        if (idValue===project.id){
            setNewProject();
        }
    }

    // function handleProjectDeletion (idValue){
    //     alert("I'm clicked & ID= "+ idValue);
    //     const docRef = doc(db,'projectList',project.id);
    //     setDoc (docRef,project);
    // }
//___________________________________________________________________
    // method to add new project -> it updates the program counter and
    // then resets the value of notes & project using useEffect
    function handleAddProject(){
        alert ("no of projects- "+projectList.length);
        setProjectCounter((projectList.length)+1);
    }

    useEffect (()=>{
        alert ("resetting layout");
        if (projectCounter===((projectList.length)+1))
            setNewProject ();
    },[projectCounter]);

    function setNewProject (){
        setNotes ([]);
        setProject({projectTitle:"untitled", isAdded:false, index:null, id:0, timestamp:null, noteList:[]});
        //alert(projectCounter);
    }

    
//_____________________________________________________________________________
    // method to save the current project -> it updates the program counter using value
    // send by the ProjectTitle component& then updates the value of project. After this, 
    // addition to the database happens as well as setProjectList using snapshot

    function handleSave (newProjectTitle, indexVal){
        //console.log(newProjectTitle);
        setProject((prevProject)=>
        {
            setProjectCounter(indexVal);
            alert ("value="+ indexVal);
            return { 
                projectTitle: newProjectTitle,
                isAdded:prevProject.isAdded,
                index:indexVal,
                id:prevProject.id,
                timestamp: serverTimestamp(),
                noteList:notes
                };
        });
    }

    useEffect(() => {

        // prevents adding to the sidebar's list when new project is created 
        // i.e "new project" button pressed
        if (project.index!==null){
            handleAddToList(project.index);
        }
    }, [project]);


    const handleAddToList = async(id)=>{
        if(!project.isAdded)
        {
            alert ("adding new entry");
            project.isAdded=true;
            const collectionRef = collection (db,'projectList');
            const docRef = await addDoc(collectionRef, project);
            console.log("Document written with ID: ", docRef.id);
            project.id= docRef.id;
            const updateIdRef = doc(db,'projectList',docRef.id);

            // Set the "id" field of the latest project
            await updateDoc(updateIdRef, {
                id: docRef.id
            });
            // db.collection('listOfProjects').add({
            //     projectTitle: project.projectTitle,
            //     isAdded: project.isAdded,
            //     index: project.index,
            //     noteList: project.noteList
            // });

            // setProjectList(prevProjectList=>{
            //     return [...prevProjectList,project]
            // }); 
        }
        else{
            alert("making changes in existing document");
            //console.log("added: counter is: "+ projectCounter+" & id="+ id);
            const docRef = doc(db,'projectList',project.id);
            await setDoc (docRef,project);
            
            // setProjectList(projectList.filter((projects,index)=>{
            //     return(index!==id)
            // }));
            // setProjectList(prevProjectList=>{
            //     return [...prevProjectList,project]
            // });
        }    
    }
//_____________________________________________________________________________
    // method to handle addition& deletion of notes to the noteList

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

    function handleEdit (){
        
    }
    const user = useSelector (selectUser);

    return (
        <div id="container-fluid">

            { !user ? (<Login />):
            (
                <div className="wrapper row gx-0">
                {/* <div className=""> */}
                    <div className="col col-md-1 col-sm-1 sidebar-wrapper">
                    <Sidebar1 projects={projectList} addProject={handleAddProject} linkClicked={handleBackToOldProject} deleteProject={handleProjectDeletion}/>
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11 page-content-wrapper noteSection">
                        <Header1 />
                        <ProjectTitle title={project.projectTitle} onSave={handleSave} key={projectCounter} id={projectList.length+1}  />
                        <div className="scroll">
                            <CreateArea onAdd={handleAdd}/>
                            <div>
                            {notes.map((note,index)=>
                                <Note1 
                                key={index}
                                id={index}
                                delete={handleDelete}
                                title={note.title} 
                                note={note.content} />
                                )}
                            </div>
                            <Footer />
                        </div>        
                {/* <Note title="Heading" note="Type the note" /> */}
                        
                    </div>
                {/* </div> */}
                </div>
                
            )
            }
            
        </div>
    );
}

export default App; 



// to Do:
//
// 1. delete project
// 2. authentication
// 3. deployement

// 4. handle Footer
// 5. handle scrolling of Sidebar
// 6. Highlight the current project name in the sidebar
// 8. work on drag and set position of sticky notes
// 9. make project list to toggle and increase the workspace
// 7. ask friends to test it 