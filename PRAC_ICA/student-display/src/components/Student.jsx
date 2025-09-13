import './Student.css';

function Card({props}){
    return (
        <div className='Container'>
            <p>Name : Suraj</p>
            <p>Age : 22</p>
            <p>Grade : B </p>
            <hr/>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Grade : {props.grade}</p>
        </div>
    );
}

export default Card;