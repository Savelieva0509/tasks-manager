import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import TaskForm from '../TaskForm/TaskForm';
import css from './Modal.module.scss';

function AddTaskModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        + ADD NEW TASK
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className={css.modal}
      >
        <TaskForm />
      </Modal>
    </>
  );
}

export default AddTaskModal;
