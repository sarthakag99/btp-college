import React from 'react';
import Table from 'react-bootstrap/Table'
import * as styles from '../styles.module.css';
 

const UnderGraduate = () => (
    <div> 
        <h1 className={styles.head} style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', }}>Under Graduate</h1>
        <hr></hr><br></br>
        <h3 style={{ textDecoration: 'underline #009cff' }}>Department currently offers following Under-graduate Programmes</h3>

        <p>
            B.Tech. (4 years) <br></br>
                    B.Tech. - M.Tech. Dual degree (5 years)<br></br>
                    The curriculum of each Programme consists of a mixture of well thought out courses in the following broad categories: Language, Mathematics, Science, Engineering Science, Humanities/Social Sciences/Management, Professional Courses, Elective Courses, Laboratory Courses, Project Courses. A semester-wise structure of the curriculum for each Programme, currently being followed, is given in below. However, the semester-wise structure is not followed rigidly. In fact, the students are encouraged to change the structure of their curriculum,to the extent feasible and desirable, to accommodate their own aspirations. The curriculum of every academic Programme is reviewed,periodically, with a view to incorporate the latest advances pertaining to the Programme.
                </p>
        <h3 style={{ textDecoration: 'underline #009cff' }}>Credit Structure</h3>
        <div >

            <Table striped bordered hover size="sm">
                <thead>
                    <tr> 
                        <th></th>
                        <th>B.Tech.ECE (credits)</th>
                        <th>B.Tech.CCE (credits)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Compulsory Core Courses (excluding Englishcourse)</td>
                        <td>47</td>
                        <td>48</td>
                    </tr>
                    <tr>
                        <td>HSS (mostly electives, including English course)</td>
                        <td>12</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Compulsory Technical Coursesn</td>
                        <td>70</td>
                        <td>77</td>
                    </tr>
                    <tr>
                        <td>Programme Electives</td>
                        <td>18</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>Other Electives</td>
                        <td>12</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>BTP</td>
                        <td>6</td>
                        <td>6</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th>Total Credits</th>
                        <th>165</th>
                        <th>161</th>
                    </tr>
                </thead>
            </Table>
        </div>

        <h3 style={{ textDecoration: 'underline #009cff' }}>Semester Wise Curriculum</h3>
        <ul>
            <a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">B.Tech. ECE</a>
            <br></br>
            <a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardCCE.pdf">B.Tech. CCE</a>
        </ul>

        <h3 style={{ textDecoration: 'underline #009cff' }}>Semester Wise CIFs</h3>
        <ul>
            <h5>1st Semester</h5>
            <ul>
                <a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Basic Electronics</a>
            </ul>
            <br></br>
            <h5>2st Semester</h5>
            <ul>
                <a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Analog Electronics</a>
                <br></br>
                <a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Network Analysis and Synthesis</a>
            </ul>
            <br></br>
            <h5>3st Semester</h5>
            <ul>
                <a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Semiconductor Devices and Circuits</a>
                <br></br>
                <a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Signals and Systems</a>
                <br></br>
                <a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Engineering Electromagnetics</a>
                <br></br>
                <a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Digital Circuits and Systems</a>
            </ul>
            <br></br>
            <h5>4th Semester</h5>
            <ul>
                <a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Principles of Communication</a>
                <br></br>
                <a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Control System Engineering</a>
                <br></br>
                <a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Microwave Engineering</a>
                <br></br>
                <a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Introduction to VLSI</a>
                <br></br>
            </ul>
            <br></br>
            <h5>5th Semester</h5>
            <ul>
                <a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Digital Communication</a>
                <br></br>
                <a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Microprocessor & Interface</a>
                <br></br>
                <a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Digital Signal Processing</a>

            </ul>
            <br></br>
            <h5>Program Electives</h5>
            <ol>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;<a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Advanced DSP  </a></li>
                <br></br>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;<a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Analog VLSI Circuits</a></li>
                <br></br>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;<a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Antenna Engineering</a></li>
                <br></br>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;<a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Broadband Communication</a></li>
                <br></br>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;<a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Co-operative Communication based Advanced Wireless Systems</a></li>
                <br></br>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;<a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Design for Testability</a></li>
                <br></br>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;<a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Digital Image Processing</a></li>
                <br></br>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;<a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Digital Systems Design with FPGAs</a></li>
                <br></br>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;<a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Embedded Systems</a></li>
                <br></br>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;<a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Embedded Systems and Design</a></li>
                <br></br>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;<a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Information Theory and Coding</a></li>
                <br></br>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;<a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Microwave Circuits and Systems</a></li>
                <br></br>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;<a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Modeling and Simulation</a></li>
                <br></br>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;<a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Modern Digital Communication</a></li>
                <br></br>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;<a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Telecommunications Switching Systems and Networks</a></li>
                <br></br>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;<a style={{ textAlign: 'left' }} target="_blank" href="uploadedFiles\Academics\CurriculumY17OnwardECE.pdf">Wireless Communication</a></li>
                <br></br><br></br>
            </ol>
        </ul>

    </div>
)

export default UnderGraduate;