import React from 'react';
// import Table from 'react-bootstrap/Table'
// import '../styles.css'
// import QuickLinks from './QuickLinks';
import * as styles from '../styles.module.css';
import 'rsuite/dist/styles/rsuite-default.css';
const Contact = () => (
    <div>
        <h1 className={styles.head} style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', }}>Contact</h1>
            <hr></hr><br></br>
            <h3 style={{ textDecoration: 'underline #009cff' }}>Postal Address :</h3>
            <p>
                Head of Department,<br></br>
                <b>Department of Electronics and Communication Engineering</b><br></br>
                The LNM Institute of Information Technology<br></br>
                Rupa ki Nangal, Post-Sumel,<br></br>
                Via-Jamdoli<br></br>
                Jaipur-302031,<br></br>
                (Rajasthan) INDIA<br></br>
            </p>
        
    </div>
);
export default Contact;