import React, {useState} from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import CreateArea1 from "./CreateArea1";
import CreateIcon from '@mui/icons-material/Create';

function OffCanvasButton(props) {
  
    function handleSave (editedNote){
      //alert("offcanvas area= "+ editedNote.title);
      props.onSave(editedNote);
    }

    function handleDelete(){
      props.onDelete();
    }
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        <CreateIcon />
        </Button>
  
        <Offcanvas show={show} onHide={handleClose} placement="end" name="end">
          <Offcanvas.Header closeButton>
            <h5 className="offCanvasTitle">Edit Note</h5>
            {/* <Offcanvas.Title className="offCanvasTitle">Edit Note</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvasBody">
            <CreateArea1 onSave={handleSave} onDelete={handleDelete} heading={props.heading} content={props.content} close={handleClose}/>
            {/* <button > Save </button>
            <button > Delete </button> */}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  

  export default OffCanvasButton;
