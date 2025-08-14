import {Outlet} from 'react-router-dom';
import "./layout.css";
import Navbar from '../components/Navbar';

const Layout = () => {
    return(
        <div className="container">
            {/* Sidebar */}
            <Navbar/>
            {/* Content */}
            <div className="content">
                <div></div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;