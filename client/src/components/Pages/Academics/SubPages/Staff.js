import React from 'react';
import Table from 'react-bootstrap/Table'
import * as styles from '../styles.module.css';
const Staff = () => (
    <div>
        
        <h1 className={styles.head} style={{ marginTop: '10px', marginBottom: '10px',  padding: '5px', }}>Staff</h1>
                <hr></hr>
                <br></br>
                <div >
                    
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mr. Dharm Pal Yadav</td>
                                <td>Junior Technical Superintendent</td>
                                <td>dharmpal@lnmiit.ac.in <br></br>9460392292</td>
                            </tr>
                            <tr>
                                <td>Mr. Kamta Sharma</td>
                                <td>Technical Superintendent</td>
                                <td>ksharmalnm@gmail.com<br></br>9571715078, 9936480226</td>
                            </tr>
                            <tr>
                                <td>Mr. Pavan Kumar Sharma</td>
                                <td>Junior Technical Superintendent</td>
                                <td>pksharma@lnmiit.ac.in<br></br>9462740169</td>
                            </tr>
                            <tr>
                                <td>Mr. Vinod Kumar</td>
                                <td>Technical Superintendent</td>
                                <td>vinodece@lnmiit.ac.in<br></br>9887071508</td>
                            </tr>
                            <tr>
                                <td>Mr. Kushmakar Sharma</td>
                                <td>Junior Technical Superintendent</td>
                                <td>kushmakar@lnmiit.ac.in  <br></br>9928788778</td>
                            </tr>
                            <tr>
                                <td>Mr. RAJKUMAR</td>
                                <td>Junior Technical Superintendent</td>
                                <td>raj.kumar@lnmiit.ac.in<br></br>9424579825</td>
                            </tr>
                            
                        </tbody>
                    </Table>
                </div>

    </div>
)

export default Staff;