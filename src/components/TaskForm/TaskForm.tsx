import { useState, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

const TaskForm = () => {
  const [validated, setValidated] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const form = formRef.current;
    if (form && form.checkValidity() === false) {
      setValidated(true);
    } else {
      setValidated(true);
    }
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <Form.Group controlId="formTaskTitle" className="mb-3">
        <Form.Control
          required
          type="text"
          placeholder="Enter task title..."
          minLength={5}
          maxLength={50}
          value={taskTitle}
          onChange={e => setTaskTitle(e.target.value)}
          isInvalid={
            validated && (taskTitle.length < 5 || taskTitle.length > 50)
          }
        />
        <Form.Control.Feedback type="invalid">
          Task title must be between 5 and 50 characters.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formTaskDescription" className="mb-3">
        <Form.Control
          required
          type="text"
          placeholder="Enter task description..."
          minLength={10}
          maxLength={200}
          value={taskDescription}
          onChange={e => setTaskDescription(e.target.value)}
          isInvalid={
            validated &&
            (taskDescription.length < 10 || taskDescription.length > 200)
          }
        />
        <Form.Control.Feedback type="invalid">
          Task description must be between 10 and 200 characters.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Control
          required
          type="file"
          isInvalid={
            validated &&
            !(
              formRef.current?.elements.namedItem(
                'formFile'
              ) as HTMLInputElement
            )?.value
          }
        />
        <Form.Control.Feedback type="invalid">
          Please upload a file.
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Add task
      </Button>
    </Form>
  );
};

export default TaskForm;
