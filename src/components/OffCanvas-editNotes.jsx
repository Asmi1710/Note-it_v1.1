import React, {useState} from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import CreateArea1 from "./CreateArea1";
import CreateIcon from '@mui/icons-material/Create';

function OffCanvasButton() {
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
            <Offcanvas.Title>Edit Note</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <CreateArea1  />
            <button > Save </button>
            <button > Delete </button>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  

  export default OffCanvasButton;
