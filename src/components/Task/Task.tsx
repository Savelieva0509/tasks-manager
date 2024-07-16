import { Button, Card, Form } from 'react-bootstrap';
import { BsFileEarmarkArrowDown } from 'react-icons/bs';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { deleteTask, toggleCompleted, editTask } from '../../redux/tasks-slice';
import { TaskTypes } from '../../types';
import css from './Task.module.scss';

type TaskProps = {
  task: TaskTypes;
};

const Task = ({ task }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedText, setEditedText] = useState(task.text);
  const [editedFile, setEditedFile] = useState(task.file);
  const [validated, setValidated] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;

    if (form && form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    dispatch(
      editTask({
        id: task.id,
        title: editedTitle,
        text: editedText,
        file: editedFile.url,
      })
    );
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(task.title);
    setEditedText(task.text);
    setEditedFile(task.file);
    setIsEditing(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    if (name === 'title') {
      setEditedTitle(value);
    } else if (name === 'text') {
      setEditedText(value);
    } else if (name === 'file' && files && files[0]) {
      setEditedFile({
        name: files[0].name,
        url: URL.createObjectURL(files[0]),
      });
    }
  };

  return (
    <Card
      className={classNames('bg-body-tertiary', css.taskCard, {
        [css.editing]: isEditing,
      })}
    >
      <Card.Body>
        <Form.Check
          type="checkbox"
          id={`checkbox-${task.id}`}
          label="status"
          checked={task.completed}
          onChange={handleToggle}
        />
        {isEditing ? (
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSave}
            ref={formRef}
            className="mb-4"
          >
            <Form.Group controlId="formTaskTitle" className="mb-3">
              <Form.Control
                type="text"
                name="title"
                value={editedTitle}
                onChange={handleChange}
                placeholder="Enter task title"
                required
                minLength={5}
                maxLength={50}
                isInvalid={
                  validated &&
                  (editedTitle.length < 5 || editedTitle.length > 50)
                }
              />
              <Form.Control.Feedback type="invalid">
                Task title must be between 5 and 50 characters.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formTaskText" className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                name="text"
                value={editedText}
                onChange={handleChange}
                placeholder="Enter task text"
                required
                minLength={10}
                maxLength={200}
                isInvalid={
                  validated &&
                  (editedText.length < 10 || editedText.length > 200)
                }
              />
              <Form.Control.Feedback type="invalid">
                Task description must be between 10 and 200 characters.
              </Form.Control.Feedback>
            </Form.Group>
            {editedFile && (
              <div>
                <a
                  className={classNames(
                    'link-offset-2',
                    'link-underline',
                    'link-underline-opacity-0',
                    'fs-5',
                    css.linkFile
                  )}
                  href={editedFile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFileEarmarkArrowDown size={30} className="me-1" />
                  <span>{editedFile.name}</span>
                </a>
                <Form.Group controlId="formTaskFile" className="mt-2 mb-3">
                  <Form.Label>Replace file</Form.Label>
                  <Form.Control
                    type="file"
                    name="file"
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
            )}
            <div className={css.buttonWrapper}>
              <Button variant="success" type="submit">
                Save
              </Button>
              <Button variant="danger" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </Form>
        ) : (
          <>
            <Card.Title>{task.title}</Card.Title>
            <Card.Text>{task.text}</Card.Text>
            {task.file && (
              <a
                className={classNames(
                  'link-offset-2',
                  'link-underline',
                  'link-underline-opacity-0',
                  'fs-5',
                  css.linkFile
                )}
                href={task.file.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFileEarmarkArrowDown size={30} className="me-1" />
                <span>{task.file.name}</span>
              </a>
            )}
            <div className={css.buttonWrapper}>
              <Button variant="danger" onClick={handleDelete}>
                Delete
              </Button>
              <Button variant="warning" onClick={handleEdit}>
                Edit
              </Button>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default Task;
