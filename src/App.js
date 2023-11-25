import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import './App.css';
import {AiOutlineDelete} from 'react-icons/ai';
import {BsCheckLg} from 'react-icons/bs';
function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center py-4">
        <h1>My Todo List</h1>
      </div>
      <Container className='todo-wrapper rounded-4'>
        <Row className='todos justify-content-between align-items-end pt-4'>
          <Col className='todo-input-item' md={5}>
          <Form.Label className='fs-5'>Title:</Form.Label>
          <input type="text" className="form-control" id="title-el" placeholder='Enter the title of your todo list'/>
          </Col>
          <Col className='todo-input-item' md={5}>
          <Form.Label className='fs-5'>Discription:</Form.Label>
          <input type="text" className="form-control" id="title-el" placeholder='Enter the discription of your todo list'/>
          </Col>
          <Col md={1}>
          <Button size='md' className='px-4'>Add</Button>
          </Col >
        </Row>
        <hr />
        <Row>
          <Col>
          <Button className={`todo-combo-btn me-4`} size='md'>Todo</Button>
          <Button className={`todo-combo-btn`} size='md'>Completed</Button>
          </Col>
        </Row>
        <Row className='todo-list-container py-4'>
          <Col className='todo-list-item px-4 py-2'>
          <h3>Task 1</h3>
          <div className='d-flex'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sequi maxime temporibus ratione laborum corporis hic, totam quas omnis iste fugit ipsa excepturi nobis. Repellat quas libero nisi ipsa laboriosam?</p>
          <AiOutlineDelete className='icon delete-icon fs-1 me-2' />
          <BsCheckLg className='icon check-icon fs-1' />
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
