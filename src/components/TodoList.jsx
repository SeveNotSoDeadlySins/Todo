import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import TodoItem from './TodoItem';


let initialList = [
    { id: 1, text: "Clean the house", done: true},
    { id: 2, text: "Buy Milk", done: false},
    { id: 3, text: "Create todo app using React", done: false}
];

const TodoList = () => {
    const [textInput, setTextInput] = useState('');

    const [list, setList] = useState(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : initialList;
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(list));
    }, [list]);

    const handleTextInput = e => {
        setTextInput(e.target.value);
    }

    const makeAsDone = (id) => {
        const newList = list.map((item) => {
            if(item.id === id) {
                item.done = true;
            }
            return item;
        });

        setList(newList);
    }

    const handleDelete = (id) => {
        const newList = list.filter((item) => item.id !== id);
        setList(newList)
    };

    const addTodoItem = () => {
        let newTodo = {
            id: list[list.length -1 ].id + 1,
            text: textInput,
            done: false
        };

        setList((pervList) => [...pervList, newTodo]);
        setTextInput('');
    }


    let todoItems = list.map((item,index) => {
        return <TodoItem key={index} makeAsDone={makeAsDone} todo={item} handleDelete={handleDelete} />
    });

    return (
        <Card>
            <Card.Header>Todo List</Card.Header>

            <ListGroup variant='flush'>
                {todoItems}
            </ListGroup>

            <Card.Footer>
                <input type='text' onChange={handleTextInput} value={textInput} />
                <Button varient='primary' className='float-end' onClick={addTodoItem}>Add</Button>

            </Card.Footer>
        </Card>
    );
}

export default TodoList;