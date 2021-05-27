import React, { useState } from 'react'
import { Icon, Nav, Navbar } from 'rsuite';
import * as styles from './styles.module.css' 


import 'rsuite/dist/styles/rsuite-default.css';
import Login from '../Pages/Login/Login';
// import 'rsuite/dist/styles/rsuite-dark.css';

import { Link } from 'react-router-dom';
const Header = () => {

    const navbarStyles = {
        backgroundColor: 'black',

    };
    const imageStyles = {
        width: '200px',
        height: '70px',

    };
    const headStyles = {
        margin: '100px',
        color: 'red',
        display: 'inline',
        // padding: '100px'
    };


    const CustomNav = ({ active, onSelect, ...props }) => {
        return (
            <Navbar style={navbarStyles}>
                <div>
                    <img alt="img1" style={imageStyles} src="uploadedFiles/logo.png"></img>
                    <h1 style={headStyles}>The LNM Institute of Information Technology</h1>
                    
                </div>
                <Nav {...props} activeKey={active} onSelect={onSelect}>
                    <Nav.Item componentClass={Link} to="/" eventKey="home" icon={<Icon icon="home" size="lg"/>}>
                        LNMIIT
                    </Nav.Item>
                    <Nav.Item componentClass={Link} to="/academics" eventKey="academics" >Academics</Nav.Item>
                    <Nav.Item componentClass={Link} to="/lab" eventKey="lab" >Lab</Nav.Item>
                    <Nav.Item componentClass={Link} to="/achievements" eventKey="achievements" >Achievements</Nav.Item>
                    <Nav.Item componentClass={Link} to="/research" eventKey="research" >Research</Nav.Item>
                    <Nav.Item componentClass={Link} to="/classroom" eventKey="classroom" ><Icon icon='wechat' size="lg" /> Classroom </Nav.Item>
                </Nav>
                <Nav pullRight {...props} activeKey={active} onSelect={onSelect} style={styles.Nav}>
                    <Nav.Item componentClass={Link} to="/login" eventKey="login" >Login</Nav.Item>
                </Nav>
            </Navbar>
        );
    };

    const [activeState, setState] = useState('home');

    const handleSelect = (activeKey, event) => {
        setState(activeKey);
    };

    return (
        <div>
            <CustomNav appearance="subtle" active={activeState} onSelect={handleSelect} />
        </div>
    )
};


export default Header;