import { Button, Card, Form } from 'react-bootstrap';
import { BsFileEarmarkArrowDown } from 'react-icons/bs';
import classNames from 'classnames';
import { TaskTypes } from '../../types';
import css from './Task.module.scss';

type TaskProps = {
  task: TaskTypes;
};

const Task = ({ task }: TaskProps) => {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Form.Check
          type="checkbox"
          id={`checkbox-${task.id}`}
          label="status"
          checked={task.completed}
        />
        <Card.Title>{task.title}</Card.Title>
        <Card.Text>{task.text}</Card.Text>
        <div className={css.installWrapper}>
          {task.file && (
            <a
              className={classNames(
                'link-offset-2',
                'link-underline',
                'link-underline-opacity-0',
                'fs-4',
                css.linkFile
              )}
              href={task.file}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFileEarmarkArrowDown size={30} className="me-1" />
              <span>File</span>
            </a>
          )}
          <Button variant="danger">Delete</Button>
          <Button variant="warning">Edit</Button>
        </div>
      </Card.Body>
    </Card>

    // <div className={css.wrapper}>
    //   <input
    //     type="checkbox"
    //     className={css.checkbox}
    //     checked={task.completed}
    //   />
    //   <p className={css.text}>{task.text}</p>
    //   <button className={css.btn}>
    //     <MdClose size={24} />
    //   </button>
    // </div>
  );
};

export default Task;
