import React, { useState } from 'react';
import * as styles from './styles.module.css';
import Overview from './SubPages/Overview';
import Publication from './SubPages/Publication';
import Activity from './SubPages/Activity';
import Grants from './SubPages/Grants';
import Centers from './SubPages/Centers';
import Cngcn from './SubPages/Cngcn';
import { Sidenav, Dropdown, Icon, Nav, Navbar } from 'rsuite';
// import 'rsuite/dist/styles/rsuite-default.css';
// import 'rsuite/lib/styles/themes/dark/index.less';
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
                        <Nav.Item eventKey="1" onSelect={handleSelect}>
                            Overview
                        </Nav.Item>
                        <Nav.Item eventKey="2" onSelect={handleSelect}>
                            Research Publication
                        </Nav.Item>
                        <Nav.Item eventKey="3" onSelect={handleSelect}>
                            Research Activity
                        </Nav.Item>
                        <Nav.Item eventKey="4" onSelect={handleSelect}>
                            Research Grants
                        </Nav.Item>
                        <Nav.Item eventKey="5" onSelect={handleSelect}>
                            Specialized Research Centres
                        </Nav.Item>
                        <Nav.Item eventKey="6" onSelect={handleSelect}>
                            CNGCN
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
                                <Nav.Item href="http://www.cognitive.radio.lnmiit.ac.in/" target="_blank">
                                    Cognitive Radio (CR)
                                </Nav.Item>

                                <Nav.Item href="http://csp.lnmiit.ac.in/" target="_blank">
                                    Communication and Signal Processing (CSP)
                                </Nav.Item>

                                <Nav.Item href="http://csp.lnmiit.ac.in/" target="_blank">
                                    VLSI and Embedded System Design (VESD)
                                </Nav.Item>

                                <Nav.Item href="http://rfm.lnmiit.ac.in/" target="_blank">
                                    RF and Microwave (RFM)
                                </Nav.Item>
                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                </div>
                <div className={styles.mainDiv}>
                    <div>
                        {state === '1' ? <Overview /> : null}
                    </div>
                    <div>
                        {state === '2' ? <Publication /> : null}
                    </div>
                    <div>
                        {state === '3' ? <Activity /> : null}
                    </div>
                    <div>
                        {state === '4' ? <Grants /> : null}
                    </div>
                    <div>
                        {state === '5' ? <Centers /> : null}
                    </div>
                    <div>
                        {state === '6' ? <Cngcn /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavDropdownExample;