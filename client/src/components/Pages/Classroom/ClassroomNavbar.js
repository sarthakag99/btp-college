import React, { useState } from 'react';
import { Nav, Sidenav, Icon, Dropdown } from 'rsuite';
import { Button, Card, Image } from 'semantic-ui-react'
import { Route, Link, useHistory } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import * as styles from './styles.module.css';
import Classroom1 from './SubPages/Classroom1';
import Classroom2 from './SubPages/Classroom2';
const ClassroomNavbar = () => {
    const history = useHistory();
    const [state, setState] = useState('0');
    const onClick1 = () => {
        history.push("/classroom1");
        setState('1');
    };
    const onClick2 = () => {
        history.push("/classroom2");
        setState('2');
    };
    const CardExampleGroups = () => (
        <Card.Group>
            <Card>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>Classroom-1</Card.Header>
                    <Card.Meta>ECE/CCE 2021</Card.Meta><br></br>
                    <Card.Description>
                        <strong>Mr. Purnendu Karmakar</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>

                        <Button fluid basic color='green' onClick={onClick1}>
                            Enter
                        </Button>

                    </div>
                </Card.Content>
            </Card>

            <Card>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>Classroom-2</Card.Header>
                    <Card.Meta>ECE 2021</Card.Meta><br></br>
                    <Card.Description>
                        <strong>Dr. Sandeep Saini</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>

                        <Button fluid basic color='green' onClick={onClick2}>
                            Enter
                        </Button>

                    </div>
                </Card.Content>
            </Card>
        </Card.Group>
    )


    return (
        <div className={styles.body}>
            {state === '0' ?
                <div>
                    <div className={styles.sidenav} style={{ width: 350 }}>
                        <Sidenav appearance={'inverse'} activeKey="1">
                            <Sidenav.Body>
                                <Nav>
                                    <Dropdown eventKey="1" title="Classroom" icon={< Icon icon="group" />}>
                                        <Dropdown.Menu eventKey="1-1" icon={< Icon icon="thumb-tack" />} title="1st Semester">
                                            <Dropdown.Item eventKey="1-1-1" icon={< Icon icon="bookmark" />}> &nbsp;&nbsp; &nbsp;&nbsp; Basic Electronics</Dropdown.Item>
                                        </Dropdown.Menu>
                                        <Dropdown.Menu eventKey="1-2" icon={< Icon icon="thumb-tack" />} title="2nd Semester">
                                            <Dropdown.Item eventKey="1-2-1" icon={< Icon icon="bookmark" />}>&nbsp;&nbsp; &nbsp;&nbsp; Analog Electronics</Dropdown.Item>
                                            <Dropdown.Item eventKey="1-2-2" icon={< Icon icon="bookmark" />}>&nbsp;&nbsp; &nbsp;&nbsp; Network Analysis and Synthesis</Dropdown.Item>
                                        </Dropdown.Menu>
                                        <Dropdown.Menu eventKey="1-3" icon={< Icon icon="thumb-tack" />} title="3rd Semester">
                                            <Dropdown.Item eventKey="1-3-1" icon={< Icon icon="bookmark" />}>&nbsp;&nbsp; &nbsp;&nbsp; Semiconductor Devices and Circuits</Dropdown.Item>
                                            <Dropdown.Item eventKey="1-3-2" icon={< Icon icon="bookmark" />}>&nbsp;&nbsp; &nbsp;&nbsp; Signals and Systems</Dropdown.Item>
                                            <Dropdown.Item eventKey="1-3-3" icon={< Icon icon="bookmark" />}>&nbsp;&nbsp; &nbsp;&nbsp; Engineering Electromagnetics</Dropdown.Item>
                                            <Dropdown.Item eventKey="1-3-4" icon={< Icon icon="bookmark" />}>&nbsp;&nbsp; &nbsp;&nbsp; Digital Circuits and Systems</Dropdown.Item>
                                        </Dropdown.Menu>
                                        <Dropdown.Menu eventKey="1-4" icon={< Icon icon="thumb-tack" />} title="4th Semester">
                                            <Dropdown.Item eventKey="1-4-1" icon={< Icon icon="bookmark" />}>&nbsp;&nbsp; &nbsp;&nbsp; Principles of Communication</Dropdown.Item>
                                            <Dropdown.Item eventKey="1-4-2" icon={< Icon icon="bookmark" />}>&nbsp;&nbsp; &nbsp;&nbsp; Control System Engineering</Dropdown.Item>
                                            <Dropdown.Item eventKey="1-4-3" icon={< Icon icon="bookmark" />}>&nbsp;&nbsp; &nbsp;&nbsp; Microwave Engineering</Dropdown.Item>
                                            <Dropdown.Item eventKey="1-4-4" icon={< Icon icon="bookmark" />}>&nbsp;&nbsp; &nbsp;&nbsp; Introduction to VLSI</Dropdown.Item>
                                        </Dropdown.Menu>
                                        <Dropdown.Menu eventKey="1-5" icon={< Icon icon="thumb-tack" />} title="5th Semester">
                                            <Dropdown.Item eventKey="1-5-1" icon={< Icon icon="bookmark" />}>&nbsp;&nbsp; &nbsp;&nbsp; Digital Communication</Dropdown.Item>
                                            <Dropdown.Item eventKey="1-5-2" icon={< Icon icon="bookmark" />}>&nbsp;&nbsp; &nbsp;&nbsp; Microprocessor & Interface</Dropdown.Item>
                                            <Dropdown.Item eventKey="1-5-3" icon={< Icon icon="bookmark" />}>&nbsp;&nbsp; &nbsp;&nbsp; Digital Signal Processing</Dropdown.Item>
                                        </Dropdown.Menu>
                                        <Dropdown.Menu eventKey="1-6" icon={< Icon icon="thumb-tack" />} title="Electives">
                                            <Dropdown.Item eventKey="1-6-1" icon={< Icon icon="bookmark" />}>&nbsp;&nbsp; &nbsp;&nbsp; Elective-1</Dropdown.Item>
                                            <Dropdown.Item eventKey="1-6-2" icon={< Icon icon="bookmark" />}>&nbsp;&nbsp; &nbsp;&nbsp; Elective-2</Dropdown.Item>
                                            <Dropdown.Item eventKey="1-6-3" icon={< Icon icon="bookmark" />}>&nbsp;&nbsp; &nbsp;&nbsp; Elective-3</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Nav>
                            </Sidenav.Body>
                        </Sidenav>
                    </div>
                    <div className={styles.mainDiv}>
                        <CardExampleGroups />
                    </div>
                </div>
                : null}

            {state === '1' ? <div>
                <Classroom1 />
            </div> : null}
            {state === '2' ? <div>
                <Classroom2 />
            </div> : null}


        </div>
    );
};
export default ClassroomNavbar