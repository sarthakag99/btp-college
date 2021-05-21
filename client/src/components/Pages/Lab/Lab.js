import React, { useState } from 'react';
import { Sidenav, Nav, Icon, Dropdown, Avatar } from 'rsuite';
import AnalogDigital from './AnalogDigital';
import Ecad from './Ecad';
import Microwave from './Microwave';
import Microprocessor from './Microprocessor';
import Dsp from './Dsp';
import Electronics from './Electronics';
import * as styles from './styles.module.css';
import 'rsuite/dist/styles/rsuite-default.css';
const Lab = () => {
    const [state, setState] = useState('1');
    const handleSelect =(eventKey,event)=>{
        setState(eventKey);
    };

    return (
        <div className={styles.main}>
            <div className={styles.head}>
                <h1>Lab</h1>
            </div>
            <div className={styles.body}>
                <div className={styles.sidenav} style={{ width: 250 }}>
                    <Sidenav appearance={'inverse'} activeKey="1">
                        <Sidenav.Body>
                            <Nav>
                                <Nav.Item eventKey="1" onSelect={handleSelect}>
                                    Analog and Digital Communication
                                </Nav.Item>
                                <Nav.Item eventKey="2" onSelect={handleSelect}>
                                    Electronics
                                </Nav.Item>
                                <Nav.Item eventKey="3" onSelect={handleSelect}>
                                    Digital Signal Processing
                                </Nav.Item>
                                <Nav.Item eventKey="4" onSelect={handleSelect}>
                                    Microprocessor
                                </Nav.Item>
                                <Nav.Item eventKey="5" onSelect={handleSelect}>
                                    Microwave and RF
                                </Nav.Item>
                                <Nav.Item eventKey="6" onSelect={handleSelect}>
                                    E-CAD
                                </Nav.Item>
                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                </div>
                <div className={styles.mainDiv}>
                    <div>
                        {state==='1' ? <AnalogDigital /> :null}
                    </div>
                    <div>
                        {state==='2' ? <Electronics /> :null}
                    </div>
                    <div>
                        {state==='3' ? <Dsp /> :null}
                    </div>
                    <div>
                        {state==='4' ? <Microprocessor /> :null}
                    </div>
                    <div>
                        {state==='5' ? <Microwave /> :null}
                    </div>
                    <div>
                        {state==='6' ? <Ecad /> :null}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Lab;
