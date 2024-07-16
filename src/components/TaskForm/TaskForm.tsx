import { forwardRef, useState, useRef, useImperativeHandle } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasks-slice';
import { TaskFormValues } from '../../types';

const TaskForm = forwardRef(
  ({ handleClose }: { handleClose: () => void }, ref) => {
    const [validated, setValidated] = useState(false);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskText, setTaskText] = useState('');
    const [taskFile, setTaskFile] = useState<File | null>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const dispatch = useDispatch();

    useImperativeHandle(ref, () => ({
      handleSubmit,
    }));

    const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }

      const form = formRef.current;
      if (form && form.checkValidity() === false) {
        setValidated(true);
      } else {
        setValidated(true);
        const newTask: TaskFormValues = {
          title: taskTitle,
          text: taskText,
          file: taskFile
            ? {
                name: taskFile.name,
                url: URL.createObjectURL(taskFile),
              }
            : {
                name: '',
                url: '',
              },
        };
        dispatch(addTask(taskTitle, taskText, newTask.file));
        handleClose();
      }
    };

    return (
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        ref={formRef}
        className="mb-4"
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
            as="textarea"
            required
            type="text"
            placeholder="Enter task description..."
            minLength={10}
            maxLength={200}
            value={taskText}
            onChange={e => setTaskText(e.target.value)}
            isInvalid={
              validated && (taskText.length < 10 || taskText.length > 200)
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
      </Form>
    );
  }
);

export default TaskForm;
