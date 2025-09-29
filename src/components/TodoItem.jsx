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
                    <Badge pill bg='danger pr-5'  className="float-end" onClick={() => {props.handleDelete(props.todo.id)}}>Delete</Badge>
                </>
            )}

        </ListGroup.Item>
    );
}

export default TodoItem;