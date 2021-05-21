import React, { useState } from 'react';

// import './styles.css';

import Homepage from './SubPages/HomePage';
import UnderGraduate from './SubPages/UnderGraduate';
import PostGraduate from './SubPages/PostGraduate';
import Phd from './SubPages/Phd';
import Faculty from './SubPages/Faculty';
import Staff from './SubPages/Staff';
import Scholar from './SubPages/Scholar';
import AboutUs from './SubPages/AboutUs';
import TimeTable from './SubPages/TimeTable';
import DepartmentalDirectory from './SubPages/DepartmentalDirectory';
import Events from './SubPages/Events';
import Contact from './SubPages/Contact';
import { Sidenav, Dropdown, Icon, Nav, Navbar } from 'rsuite';
import * as styles from './styles.module.css';

import 'rsuite/dist/styles/rsuite-default.css';
const NavDropdownExample = () => {
    const [state, setState] = useState('1');
    const handleSelect = (eventKey, event) => {
        setState(eventKey);

    };
    const NavBarInstance = ({ onSelect, state, ...props }) => {
        return (
            <Navbar {...props}>
                <Navbar.Body>
                    <Nav onSelect={onSelect} activeKey={state}>
                        <Nav.Item eventKey="1" onSelect={handleSelect} icon={<Icon icon="home" />}>
                            ECE Homepage
                        </Nav.Item>
                        <Dropdown title="Programmes">
                            <Dropdown.Item eventKey="2" onSelect={handleSelect}>UnderGraduate</Dropdown.Item>
                            <Dropdown.Item eventKey="3" onSelect={handleSelect}>PostGraduate</Dropdown.Item>
                            <Dropdown.Item eventKey="4" onSelect={handleSelect}>Ph.D</Dropdown.Item>
                        </Dropdown>
                        <Dropdown title="People">
                            <Dropdown.Item eventKey="5" onSelect={handleSelect}>Faculty</Dropdown.Item>
                            <Dropdown.Item eventKey="6" onSelect={handleSelect}>Staff</Dropdown.Item>
                            {/* <Dropdown.Item eventKey="7" onSelect={handleSelect}>Scholar</Dropdown.Item> */}
                        </Dropdown>
                        <Nav.Item eventKey="8" onSelect={handleSelect}>
                            AboutUs
                        </Nav.Item>
                    </Nav>
                </Navbar.Body>
            </Navbar>
        );
    };



    return (
        <div className={styles.main}>

            <NavBarInstance appearance="inverse" activeKey={state} onSelect={handleSelect} />
            <br></br>
            <div className={styles.body}>
                <div className={styles.sidenav} style={{ width: 250 }}>
                    <Sidenav appearance={'inverse'} activeKey="1">
                        <Sidenav.Body>
                            <Nav>
                                <Nav.Item eventKey="9" onSelect={handleSelect}>
                                    Time Table
                                </Nav.Item>
                                <Nav.Item eventKey="10" onSelect={handleSelect}>
                                    Departmental Directory
                                </Nav.Item>
                                <Nav.Item eventKey="11" onSelect={handleSelect}>
                                    Events
                                </Nav.Item>
                                <Nav.Item eventKey="12" onSelect={handleSelect}>
                                    Contact
                                </Nav.Item>
                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                </div>
                <div className={styles.mainDiv}>
                    <div>
                        {state === '1' ? <Homepage /> : null}
                    </div>
                    <div>
                        {state === '2' ? <UnderGraduate /> : null}
                    </div>
                    <div>
                        {state === '3' ? <PostGraduate /> : null}
                    </div>
                    <div>
                        {state === '4' ? <Phd /> : null}
                    </div>
                    <div>
                        {state === '5' ? <Faculty /> : null}
                    </div>
                    <div>
                        {state === '6' ? <Staff /> : null}
                    </div>
                    <div>
                        {state === '7' ? <Scholar /> : null}
                    </div>
                    <div>
                        {state === '8' ? <AboutUs /> : null}
                    </div>
                    <div>
                        {state === '9' ? <TimeTable /> : null}
                    </div>
                    <div>
                        {state === '10' ? <DepartmentalDirectory /> : null}
                    </div>
                    <div>
                        {state === '11' ? <Events /> : null}
                    </div>
                    <div>
                        {state === '12' ? <Contact /> : null}
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default NavDropdownExample;