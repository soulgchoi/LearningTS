import React from 'react'
import { Link } from 'react-router-dom'
// import UserPage from './UserPage'

class Header extends React.Component {
    render() {
        return (
            <div>
                {/* <h2>Application Header</h2> */}
                <div className="navbar">  
                    <a href="#">Ummmm</a>
                    <button>
                        <span>nav</span>
                    </button>

                    <div>
                        <ul>
                            <li>
                                <Link to="/users"> UserPage </Link>
                            </li>
                            <li>
                                <Link to="/about"> About </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;