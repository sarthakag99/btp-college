import React, { useState } from 'react';

import * as styles from '../styles.module.css';
import Journal from './Journal';
import NationalConference from './NationalConference';
import InternationalConference from './InternationalConference'
import NationalSeminar from './NationalSeminar';
import InternationalSeminar from './InternationalSeminar';
import Workshop from './Workshop';
import { Nav } from 'rsuite';
 

const Publication = () => {
    const [active, setState] = useState('journal');
    const handleSelect = (activeKey) => {
        setState(activeKey);
    }
    const CustomNav = ({ active, onSelect, ...props }) => {
        return (
            <Nav {...props} activeKey={active} onSelect={onSelect} style={styles}>
                <Nav.Item onSelect={handleSelect} eventKey="journal">Journal</Nav.Item>
                <Nav.Item onSelect={handleSelect} eventKey="nc">National Conference</Nav.Item>
                <Nav.Item onSelect={handleSelect} eventKey="ic">International Conference</Nav.Item>
                <Nav.Item onSelect={handleSelect} eventKey="ns">National Seminar</Nav.Item>
                <Nav.Item onSelect={handleSelect} eventKey="is">International Seminar</Nav.Item>
                <Nav.Item onSelect={handleSelect} eventKey="workshop">Workshop</Nav.Item>
            </Nav>
        );
    };
    return (
        <div>
            <div>
                <h1 className={styles.head} style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', }}>Research Publication</h1>
                <hr></hr><br></br>
                <CustomNav appearance="tabs" active={active} onSelect={handleSelect} />
                <br></br>
                <div>
                    {active === 'journal' ? <Journal /> : null}
                </div>
                <div>
                    {active === 'nc' ? <NationalConference /> : null}
                </div>
                <div>
                    {active === 'ic' ? <InternationalConference /> : null}
                </div>
                <div>
                    {active === 'ns' ? <NationalSeminar /> : null}
                </div>
                <div>
                    {active === 'is' ? <InternationalSeminar /> : null}
                </div>
                <div>
                    {active === 'workshop' ? <Workshop /> : null}
                </div>
            </div>
        </div>

    )
};
export default Publication;