import React, { Component } from 'react'
import "./index.css"
class Header extends Component {
    render() {
        return (
            <header className="header" >
                <div className="header-inner">
                    <div className="logo">
                        <a href="/">
                            <img src="http://eledevo.edu.vn/wp-content/uploads/sites/2/2019/12/cropped-logo-eledevo-academy-5.png" />
                        </a>
                    </div>
                    <ul className="menu">
                        <li className="menu-item">
                            <a href="/" className="menu-link">Home</a>
                        </li>
                        <li className="menu-item">
                            <a href="/slides" className="menu-link">Slide</a>
                        </li>
                        <li className="menu-item">
                            <a href="/benefits" className="menu-link">Benefit</a>
                        </li>
                        <li className="menu-item">
                            <a href="/activities" className="menu-link">Activity</a>
                        </li>
                        <li className="menu-item">
                            <a href="/differences" className="menu-link">Differences</a>
                        </li>
                        <li className="menu-item">
                            <a href="/feedbacks" className="menu-link">Feedbacks</a>
                        </li>
                        <li className="menu-item">
                            <a href="/populars" className="menu-link">Populars</a>
                        </li>
                        <li className="menu-item">
                            <a href="/register" className="menu-link">Register</a>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}
export default Header;