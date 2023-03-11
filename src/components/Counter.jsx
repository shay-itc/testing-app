import "./Counter.css"

function Counter({ index, onIncrement, onDecrement, onDelete, counter }) {

    return (
        <div>
            <span>{counter.value}</span>
            <button data-testid="increment-button" className="increment" onClick={() => { onIncrement(index) }}>+</button>
            <button className="decrement" onClick={() => { onDecrement(index) }}>-</button>
            <button className="delete" onClick={() => { onDelete(index) }}>Delete</button>
        </div>
    );
}

export default Counter;
