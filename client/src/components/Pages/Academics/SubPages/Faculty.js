import React from 'react';
import Table from 'react-bootstrap/Table'
// import '../styles.css'
// import QuickLinks from './QuickLinks';
import * as styles from '../styles.module.css';
const Faculty = () => (
    <div>
        
        <h1 className={styles.head} style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', }}>Faculty List</h1>
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
                                <td>Dr. M. V. Deepak Nair</td>
                                <td>Assistant Professor</td>
                                <td>deepak.nair@lnmiit.ac.in <br></br>8107970269</td>
                            </tr>
                            <tr>
                                <td>Dr. Anirudh Agarwal</td>
                                <td>Assistant Professor</td>
                                <td>anirudh.agarwal@lnmiit.ac.in</td>
                            </tr>
                            <tr>
                                <td>Dr. Vinay Bankey</td>
                                <td>Assistant Professor</td>
                                <td>vinay.bankey@lnmiit.ac.in</td>
                            </tr>
                            <tr>
                                <td>Mr. Abhishek Kumar Singh</td>
                                <td>Assistant Professor</td>
                                <td>abhishek.singh@lnmiit.ac.in<br></br>911413526326</td>
                            </tr>
                            <tr>
                                <td>Dr. Suvadeep Choudhury</td>
                                <td>Assistant Professor</td>
                                <td>suvadeep.choudhury@lnmiit.ac.in</td>
                            </tr>
                            <tr>
                                <td>Dr. Mahendra Shukla</td>
                                <td>Assistant Professor</td>
                                <td>mahendra.shukla@lnmiit.ac.in</td>
                            </tr>
                            <tr>
                                <td>Dr. Nikhil Raj</td>
                                <td>Assistant Professor</td>
                                <td>nikhil.raj@lnmiit.ac.in<br></br>9676273543</td>
                            </tr>
                            <tr>
                                <td>Dr. Bharat Verma</td>
                                <td>Assistant Professor</td>
                                <td>bharat.verma@lnmiit.ac.in</td>
                            </tr>
                            <tr>
                                <td>Dr. Amit Agarwal</td>
                                <td>Assistant Professor</td>
                                <td>amit.nitk07@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Prof. Ranjan Gangopadhyay</td>
                                <td>Distinguished Professor</td>
                                <td>ranjan@lnmiit.ac.in</td>
                            </tr>
                            <tr>
                                <td>Prof. Raghuvir Tomar</td>
                                <td>Professor</td>
                                <td>rtomar@lnmiit.ac.in<br></br>1415191771, 919001708555</td>
                            </tr>
                            <tr>
                                <td>Dr. Kusum Lata</td>
                                <td>	Associate Professor</td>
                                <td>kusum@lnmiit.ac.in</td>
                            </tr>
                            <tr>
                                <td>Dr. Soumitra Debnath</td>
                                <td>	Associate Professor</td>
                                <td>soumitra@lnmiit.ac.in<br></br>01412688022</td>
                            </tr>
                            <tr>
                                <td>Dr. Divyang Rawal</td>
                                <td>	Associate Professor</td>
                                <td>divyang.rawal@lnmiit.ac.in<br></br>09413172673</td>
                            </tr>
                            <tr>
                                <td>Dr. Abhishek Sharma</td>
                                <td>	Assistant  Professor</td>
                                <td>abhisheksharma@lnmiit.ac.in</td>
                            </tr>
                            <tr>
                                <td>Dr. Gaurav Chatterjee</td>
                                <td>	Assistant  Professor</td>
                                <td>gaurav.chatterjee@lnmiit.ac.in</td>
                            </tr>
                            <tr>
                                <td>Dr. Joyeeta Singha</td>
                                <td>	Assistant Professor</td>
                                <td>joyeeta.singha@lnmiit.ac.in</td>
                            </tr>
                            <tr>
                                <td>Dr. Kanjalochan Jena</td>
                                <td>	Assistant  Professor</td>
                                <td>kanjalochan.jena@lnmiit.ac.in<br></br>8280131231</td>
                            </tr>
                            <tr>
                                <td>Dr. Navneet Upadhyay</td>
                                <td>	Assistant  Professor</td>
                                <td>nupadhyay@lnmiit.ac.in</td>
                            </tr>
                            <tr>
                                <td>Dr. Shankar Bhattacharjee</td>
                                <td>	Assistant  Professor</td>
                                <td>shankar.bhattacharjee@lnmiit.ac.in</td>
                            </tr>
                            <tr>
                                <td>Dr. Nikhil Sharma</td>
                                <td>	Assistant  Professor</td>
                                <td>	nikhil.sharma@lnmiit.ac.in<br></br>9871979387</td>
                            </tr>
                            <tr>
                                <td>Dr. Santosh Shah</td>
                                <td>	Assistant  Professor</td>
                                <td>santosh.shah@lnmiit.ac.in<br></br>9461781463</td>
                            </tr>
                            <tr>
                                <td>Dr. Harshvardhan Kumar</td>
                                <td>	Assistant  Professor</td>
                                <td>harshvardhan.kumar@lnmiit.ac.in<br></br>7276373776</td>
                            </tr>
                            <tr>
                                <td>Dr. AKASH GUPTA</td>
                                <td>	Assistant  Professor</td>
                                <td>akash.gupta@lnmiit.ac.in<br></br>8882050922</td>
                            </tr>
                            <tr>
                                <td>Mr. Purnendu Karmakar</td>
                                <td>	Assistant  Professor</td>
                                <td>purnendu.karmakar@lnmiit.ac.in</td>
                            </tr>
                            <tr>
                                <td>Dr. Sandeep Saini</td>
                                <td>	Assistant  Professor</td>
                                <td>sandeep.saini@lnmiit.ac.in<br></br>9983180460</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

    </div>
)

export default Faculty;