import React, {useEffect, useState} from "react";
import Header1 from "./Header1";
import Footer from "./Footer";
import Note1 from "./Note1";
import Sidebar1 from "./Sidebar1";
//import CreateArea from "./CreateArea";
import ProjectTitle from "./ProjectTitle";
import {db} from "../firebaseConfig";
import { collection, addDoc, setDoc, doc, updateDoc, deleteDoc, onSnapshot, serverTimestamp , query, orderBy } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { selectUser,logout,login } from "../features/userSlice";
import Login1 from "./Login1";
import {auth } from "../firebaseConfig";
import { BrowserRouter as Router} from "react-router-dom";
import FlipMove from "react-flip-move";




function App(){

    const user = useSelector (selectUser);
    const dispatch = useDispatch()
    const [notes,setNotes]=useState ([]);
    const [project,setProject]=useState({userId:"", projectTitle:"untitled", isAdded:false, index:null, id:0, timestamp:null, noteList:[{title:"",content:""}]});
    const [projectList,setProjectList]= useState([]);
    const [projectCounter,setProjectCounter]= useState(0);

    //using snapshot to read data from the database
    useEffect (()=> {

        auth.onAuthStateChanged(userAuth =>{
            if (userAuth){
                // user is logged in 
                dispatch (login({
                    email:userAuth.email,
                    uid: userAuth.uid,
                    name: userAuth.name,
                    //picURL: userAuth.picURL
                })
                );
            }else {
                // user is logged out
                dispatch (logout())
            }
        })
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
            userId:clickedProject[0].userId,
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
        setProject({userId:"", projectTitle:"untitled", isAdded:false, index:null, id:0, timestamp:null, noteList:[]});
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
                userId:user.uid,
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
    // methods to handle add Blank, edit & delete note to the noteList

    const [editNote, setEditNote] = useState({title :"", content :""});
    const [edit, setEdit] = useState (false);


    function handleAdd(next){
        setNotes(prevNotes=>{
            return ([{title:next.title,content:next.content}, ...prevNotes])
        });   
    }


    function handleDelete(id){
        setNotes(notes.filter((note,index)=>{
            return (index!==id);
        }));
    }   

    function handleBlankNoteAdd (){
        setNotes(prevNotes=>{
            return ([{title:"Title",content:"content"}, ...prevNotes]);
        });
    }

    function handleEdit(editedNote, id){
        setEditNote ({title:editedNote.head, content:editedNote.content});
        setEdit (true);
        handleDelete (id);
    }

    useEffect (()=>{
        if (edit){
            setEdit (false);
            handleAdd (editNote);
        }
    },[notes]);

    return (
        <Router>
        <div id="container-fluid">

            { !user ? (<Login1 resetProj={setNewProject}/>):
            (
                
                <div className="wrapper row gx-0">
                {/* <div className=""> */}
                    <div className="col col-md-1 col-sm-1 sidebar-wrapper">
                    <Sidebar1 projects={projectList} linkClicked={handleBackToOldProject} />
                    </div>
                    <div className="col-lg-11 col-md-11 col-sm-11 page-content-wrapper noteSection">
                        <Header1 addProject={handleAddProject} logout={logout} />   
                        <ProjectTitle title={project.projectTitle} onSave={handleSave} key={projectCounter} id={projectList.length+1} projID={project.id} onBlankAdd={handleBlankNoteAdd} deleteProject={handleProjectDeletion}/>
                        <div className="scroll">
                            {/* <CreateArea onAdd={handleAdd}/> */}
                            <div>
                            {/* <FlipMove> */}
                                    {notes.map((note,index)=>{
                                        var shortTitle = note.title;
                                        if(note.title!==null)
                                        if (note.title.length>15){
                                            shortTitle = note.title.substring(0,14)+"...";
                                        }
                                        return (
                                            <Note1 
                                        key={index}
                                        id={index}
                                        delete={handleDelete}
                                        title={note.title} 
                                        note={note.content}
                                        short={shortTitle}
                                        onSave={handleEdit} />
                                        )
                                    }
                                    
                                )}
                            {/* </FlipMove> */}
                            
                            </div>
                        </div>    
                        {/* <Footer />     */}
                {/* <Note title="Heading" note="Type the note" /> */}
                        
                    </div>
                {/* </div> */}
                </div>
                
            )
            }
            
        </div>
        </Router>
    );
}

export default App; 



// to Do:
//
// 1. delete project
// 2. authentication
// 3. deployement

// 4. handle Footer
// 6. Highlight the current project name in the sidebar
// 
//
// 7. ask friends to test it 