import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  
    const [next,setNext]=useState({title :"", content :""});

    function handleChange(event){
        let {name,value}= event.target;
        setNext(prevValue=>{
            if(name==="title")
            {
                return ({head:value, content:prevValue.content });
            }
            else
            {
                return ({head:prevValue.head, content:value})
            }
            // return {
            //   ...prevValue,
            //   [name]:value
            // };
        }

        );
      }

    return (
    <div>
      <form className="createAreaForm">
        <input onChange={handleChange} name="title" placeholder="Title" value={next.head} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={next.content}/>
        <button onClick={ (event)=>{
          event.preventDefault();
          props.onAdd(next);
          next.head="";
          next.content="";
        }
        }><AddIcon /></button>
      </form>
    </div>
  );
}

export default CreateArea;
