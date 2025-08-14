import './Card.css';

function Card({props, onEmit}){
    const handleClick = () => {
        onEmit("Sun");
    }
    return (
        <div className='Container'>
            <p>Name : Suraj</p>
            <p>Age : 22</p>
            <p>Degree : M. Sc. </p>
            <hr/>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Degree : {props.degree}</p>
            <hr/>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Degree : {props.degree}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Card;