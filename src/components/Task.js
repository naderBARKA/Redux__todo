import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../Redux/Reducers";
import { Button, FormControl, Form, Col, Modal } from "react-bootstrap";

const mapStateToProps = (state) => {
  return {
    task: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (obj) => dispatch(addTask(obj)),
  };
};

const Task = (props) => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [task, setTask] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [done, setDone] = useState(false);

 
  const add = () => {
    if (task === "") {
      alert("Add new task!");
    } else {
      props.addTask({
        id: Math.random(),
        item: task,
        description: taskDescription,
        completed: done,
      });
      setTask("");
    }
  };
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };
  const handleDoneChange = () => {
    setDone(true);
  };
  const handleNotDoneChange = () => {
    setDone(false);
  };

  return (
    <div className="Task">
      <div className="AddTask">
        <Button variant="outline-info" onClick={handleShow}>
          Add A New Task
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add A New Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="NewTask">
              <div className="TaskNameAndDescription">
                <FormControl
                  type="text"
                  onChange={(e) => handleTaskChange(e)}
                  className="taskInput"
                  placeholder="Add a new task"
                  size="lg"
                  value={task}
                />
                <FormControl
                  type="text"
                  onChange={(e) => handleDescriptionChange(e)}
                  className="taskDescription"
                  placeholder="Add task description"
                  size="lg"
                  value={taskDescription}
                />
              </div>
              <div className="isTaskDone">
                <fieldset>
                  <Col>
                    <Form.Check
                      type="radio"
                      label="Uncomplete"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                      onChange={handleNotDoneChange}
                    />
                    <Form.Check
                      type="radio"
                      label="Done"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                      onChange={handleDoneChange}
                    />
                  </Col>
                </fieldset>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="lg" onClick={handleClose}>
              Close
            </Button>
            <Button className="btn addbtn" size="lg" onClick={() => add()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);