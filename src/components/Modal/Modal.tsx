import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import TaskForm from '../TaskForm/TaskForm';

function AddTaskModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ marginBottom: '24px' }}
      >
        + ADD NEW TASK
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="bg-body-tertiary">
          <Modal.Title>TASK INFO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TaskForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddTaskModal;
