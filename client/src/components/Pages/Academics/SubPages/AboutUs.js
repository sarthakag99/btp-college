import React from 'react';
// import Table from 'react-bootstrap/Table'
// import '../styles.css'
// import QuickLinks from './QuickLinks';
import * as styles from '../styles.module.css';
import 'rsuite/dist/styles/rsuite-default.css';
const AboutUs = () => (
    <div>
        <h1 className={styles.head} style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', }}>About Us</h1>
                <hr></hr><br></br>
                <h3 style={{ textDecoration: 'underline #009cff' }}>The ECE discipline was established with the following objectives:</h3>
                <ul>
                <li>To train engineers at UG and PG levels, capable of dealing with real-life challenges in the electronics Industry and in the field of electronic communication.</li>
                <li>To conduct collaborative research focusing on modern communication systems (e.g., digital communication systems, optical communication systems, wireless communication systems, RF and Microwave systems, and satellite communication systems)</li>
                </ul>
                <p>
                The ECE team is a fine blend of renowned as well as young and dynamic faculty members, having education and experience from renowned institutions in India and abroad. Advanced courses and electives in later years enable students to specialise in communications, signal processing, robotics, VLSI, embedded systems, and other streams. The ECE department also offers specialized M.Tech. and Dual Degree Programmes in Communication Systems, Microelectronics, Microwave engineering and VLSI.
                </p>
        
    </div>
)

export default AboutUs;