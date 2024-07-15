import { Button, Card, Form } from 'react-bootstrap';
import { BsFileEarmarkArrowDown } from 'react-icons/bs';
import { useState } from 'react';
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
  const [originalTitle, setOriginalTitle] = useState(task.title);
  const [editedText, setEditedText] = useState(task.text);
  const [originalText, setOriginalText] = useState(task.text);
  const [editedFile, setEditedFile] = useState(task.file);
  const [originalFile, setOriginalFile] = useState(task.file);

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  const handleEdit = () => {
    if (isEditing) {
      if (editedTitle.trim() !== '') {
        dispatch(
          editTask({
            id: task.id,
            title: editedTitle,
            text: editedText,
            file: editedFile.url,
          })
        );
        setIsEditing(false);
      }
    } else {
      setIsEditing(true);
      setOriginalTitle(editedTitle);
      setOriginalText(editedText);
      setOriginalFile(editedFile);
    }
  };

  const handleCancel = () => {
    setEditedTitle(originalTitle);
    setEditedText(originalText);
    setEditedFile(originalFile);
    setIsEditing(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'title') {
      setEditedTitle(event.target.value);
    } else if (event.target.name === 'text') {
      setEditedText(event.target.value);
    } else if (event.target.name === 'file') {
      const file = event.target.files?.[0];
      if (file) {
        setEditedFile({
          name: file.name,
          url: URL.createObjectURL(file),
        });
      }
    }
  };

  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Form.Check
          type="checkbox"
          id={`checkbox-${task.id}`}
          label="status"
          checked={task.completed}
          onChange={handleToggle}
        />
        {isEditing ? (
          <Form>
            <Form.Group controlId="formTaskTitle">
              <Form.Control
                type="text"
                name="title"
                value={editedTitle}
                onChange={handleChange}
                placeholder="Enter task title"
              />
            </Form.Group>
            <Form.Group controlId="formTaskText">
              <Form.Control
                as="textarea"
                rows={3}
                name="text"
                value={editedText}
                onChange={handleChange}
                placeholder="Enter task text"
                className={css.textarea}
              />
            </Form.Group>
            {originalFile && (
              <div>
                <a
                  className={classNames(
                    'link-offset-2',
                    'link-underline',
                    'link-underline-opacity-0',
                    'fs-4',
                    css.linkFile
                  )}
                  href={originalFile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFileEarmarkArrowDown size={30} className="me-1" />
                  <span>{originalFile.name}</span>
                </a>
                <Form.Group controlId="formTaskFile" className="mt-2">
                  <Form.Label>Replace file</Form.Label>
                  <Form.Control
                    type="file"
                    name="file"
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
            )}
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
                  'fs-4',
                  css.linkFile
                )}
                href={task.file.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFileEarmarkArrowDown size={30} className="me-1" />
                <span>{editedFile.name}</span>
              </a>
            )}
          </>
        )}
        {isEditing ? (
          <div className={css.buttonWrapper}>
            <Button variant="success" onClick={handleEdit}>
              Save
            </Button>
            <Button variant="danger" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        ) : (
          <div className={css.buttonWrapper}>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="warning" onClick={handleEdit}>
              Edit
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default Task;
