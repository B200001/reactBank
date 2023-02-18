import React, { useState} from "react";
import { Link } from "react-router-dom";
// import Button from "./Button";
import'./Navbar.css';

function Navbar(){
    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);
    
    const handle = ()=>{
        setClick(!click);
        
    }
    const closeMobileMenu = ()=>{
        setClick(false);
    }
    // const showButton=()=>{
    //     if(window.innerWidth <= 960){
    //         setButton(false);
    //     }
    //     else{
    //         setButton(true);
    //     }
    // }
    // useEffect(()=>{
    //     showButton()
    // }, []);
    // window.addEventListener('resize', showButton);
    return<>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    SOUTH EAST BANK
                </Link>
                <div className="menu-icon " onClick={handle}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className = 'nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Create' className = 'nav-links' onClick={closeMobileMenu}>
                            Open Account
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Users' className = 'nav-links' onClick={closeMobileMenu}>
                            Users
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Transfer' className = 'nav-links' onClick={closeMobileMenu}>
                            Transfer
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Transaction' className = 'nav-links' onClick={closeMobileMenu}>
                            Transaction History
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to='/sign-up' className = 'nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li> */}
                </ul>
                {/* {button && <Button buttonStyle = 'btn--outline'>SIGN UP</Button>} */}
            </div>
        </nav>
    </>
}
export default Navbar;