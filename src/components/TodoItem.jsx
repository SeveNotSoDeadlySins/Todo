import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

const TodoItem = (props) => {
    return (
        <ListGroup.Item>
            {(props.todo.done) ? (
                <>
                    <span className='done'>{props.todo.text}</span>
                    <span className='float-end'>&#128077;</span>
                </>
            ) : (
                <>
                    {props.todo.text}
                    <Badge pill bg='success' className='float-end' onClick={() => {props.makeAsDone(props.todo.id)}}>&#10003;</Badge>
                    <button pill bg='danger' className="float-end" onClick={() => {props.onDelete(props.todo.id)}}>Delete</button>
                </>
            )}

        </ListGroup.Item>
    );
}

export default TodoItem;