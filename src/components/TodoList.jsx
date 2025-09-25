import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TodoList = () => {

    const [list, setList] = useState([]);

    let todoExample = {
        id: 1,
        text: "Clean the house",
        done: false
    };

    return (
        <Card>
            <Card.Header>Todo List</Card.Header>

            <Card.Body>
                
            </Card.Body>

            <Card.Footer>
                <Button varient='primary' className='float-end'>Add</Button>
            </Card.Footer>
        </Card>
    );
}

export default TodoList;