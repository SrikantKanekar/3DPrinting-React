import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import "./header.css"

class Header extends Component {
    state = {
        scrolled: false
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleScroll)
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleScroll)
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        const scrolled = window.pageYOffset > 100
        if (this.state.scrolled !== scrolled) {
            this.setState({scrolled})
        }
    }

    render() {
        const {user} = this.props
        const scrolled = this.state.scrolled ? 'scrolled' : ''
        const themeIcon = this.props.theme ? 'fa fa-sun-o' : 'fa fa-moon-o'

        return (
            <header className={`header ${scrolled}`}>
                <div className="header_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="header_content">
                                    <div className="logo">
                                        title
                                    </div>

                                    <nav className="main_nav">
                                        <ul>
                                            <li><NavLink exact={true} to="/">Home</NavLink></li>
                                            <li><NavLink to="/objects/create">Create</NavLink></li>
                                            <li><NavLink to="/objects">My Objects</NavLink></li>

                                            {user && (
                                                <li className="hassubs">
                                                    <NavLink to="/account">Account</NavLink>
                                                    <ul>
                                                        <li>
                                                            <Link to="/account">Account</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/orders">Orders</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/notification">Notifications</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/logout">Logout</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            )}
                                        </ul>
                                    </nav>

                                    <div className="header_extra">
                                        <div className="shopping_cart">
                                            {user && (
                                                <NavLink to="/cart">
                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                         xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                         viewBox="0 0 489 489"
                                                        //style="enable-background: new 00 489 489;"
                                                         xmlSpace="preserve">
                                                        <g>
                                                            <path d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3
                                                            c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1
                                                            C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462
                                                            H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41
                                                            c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"/>
                                                        </g>
                                                    </svg>
                                                    <div>Cart</div>
                                                </NavLink>
                                            )}

                                            {!user && (
                                                <NavLink to="/login">
                                                    <div>Sign In</div>
                                                </NavLink>
                                            )}
                                        </div>

                                        <div className="theme_icon" onClick={this.props.toggleTheme}>
                                            <i className={themeIcon} aria-hidden="true"/>
                                        </div>

                                        <div className="hamburger" onClick={this.props.openMenu}>
                                            <i className="fa fa-bars" aria-hidden="true"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;