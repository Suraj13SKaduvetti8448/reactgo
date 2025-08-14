import './Css.css';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';


function Navbar(){
    return (
        <div className='Navbar'>
            <div className='Title'>
                <img src={logo} width='50' alt='logo'/>
                <h1>React Mail</h1><br/>
            </div>
            <div className='Options'>
                <ul className='' >
                    <br/>
                    <li>
                        {/* <a href="#">Inbox</a> */}
                        <Link className='link' to="/">Inbox</Link>
                    </li>
                    <br/>
                    <li>
                        {/* <a href="#">Sent</a> */}
                        <Link className='link' to="/sent">Sent</Link>
                    </li>
                    <br/>
                    <li>
                        {/* <a href="#">Draft</a> */}
                        <Link className='link' to="/draft">Draft</Link>
                    </li>
                    <br/>
                    <li>
                        {/* <a href="#">Spam</a> */}
                        <Link className='link' to="/spam">Spam</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;