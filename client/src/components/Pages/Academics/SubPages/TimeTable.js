import React from 'react';
// import Table from 'react-bootstrap/Table'
// import '../styles.css'
// import QuickLinks from './QuickLinks';
import * as styles from '../styles.module.css';
import 'rsuite/dist/styles/rsuite-default.css'
const TimeTable = () => (
    <div>

        <h1 className={styles.head} style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', }}>Time Table</h1>
        <hr></hr><br></br>
        <h5 style={{ textDecoration: 'underline  #009cff' }}>Cobmined Time Table</h5>
        <ul>
            <a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\ECE-CCE-Time-Table-ODD-Sem-2018-19.pdf">ODD</a><br></br>
            <a style={{ textAlign: 'left' }} href="#timeTable">EVEN</a>
        </ul>
        <br></br>
        <h5 style={{ textDecoration: 'underline  #009cff', marginTop: '5px' }}>ECE Time Table</h5>
        <ul>
            <a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\ECE-Time-Table-ODD-Sem-2018-19.pdf">ODD</a><br></br>
            <a style={{ textAlign: 'left' }} href="#timeTable">EVEN</a>
        </ul>
        <br></br>
        <h5 style={{ textDecoration: 'underline  #009cff', marginTop: '5px' }}>CCE Time Table</h5>
        <ul>
            <a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CCE-Time-Table-ODD-Sem-2018-19.pdf">ODD</a><br></br>
            <a style={{ textAlign: 'left' }} href="#timeTable">EVEN</a>
        </ul>
        <br></br>
        <h5 style={{ textDecoration: 'underline  #009cff', marginTop: '5px' }}>Lab Time Table</h5>
        <ul>
            <a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\ECE-Department-LAB-Time-Table-ODD-Sem-2018-19.pdf">ODD</a><br></br>
            <a style={{ textAlign: 'left' }} href="#timeTable">EVEN</a>
        </ul>
    </div>
);
export default TimeTable