import React from 'react';
// import Table from 'react-bootstrap/Table'
// import '../styles.css'
// import QuickLinks from './QuickLinks';
import * as styles from '../styles.module.css';
import 'rsuite/dist/styles/rsuite-default.css';
const Homepage = () => (
    <div>
        <div style={{ marginRight: '15px' }} className="search-results float-child2">
            <div>
                <h1 className={styles.head} style={{marginTop: '10px', marginBottom: '10px', padding: '5px', }}>Welcome to ECE</h1>
                <hr></hr><br></br>
                <h3 style={{ textDecoration: 'underline #009cff' }}>Vision :</h3>

                <p>
                    To become a unique and top-notch Department in the area of Electronics and Communication Engineering in the country, through pioneering excellence in teaching, research and scholarship.
                </p>
                <h3 style={{ textDecoration: 'underline #009cff' }}>Mission :</h3>
                <p>
                    <ul>
                        <li>To impart, both in depth and content, the basic fundamental knowledge and understanding in the area of Electronics and Communication Engineering.</li>
                        <li>To keep students fully tuned to the pace of growth of the modern trends of technology and their applications along with the challenging issues.</li>
                        <li>To motivate students toward developing innovative approaches to learning and toward applying scientific and engineering skills for providing solutions to real-life challenges relevant to the societal and industry needs of the country.</li>
                        <li>To motivate students and faculty to pursue higher research and to become an integral part of the process of conducting collaborative research.</li>
                        <li>To promote life-long learning, and to preserve academic freedom, honesty and justice.</li>
                    </ul>
                </p>

                <h3 style={{ textDecoration: 'underline #009cff' }}>Objectives :</h3>
                <p>
                    <ul>
                        <li>To consolidate the Undergraduate (UG) Programme through innovative curriculum planning and advanced laboratory development.</li>
                        <li>To expand and diversify the scope of Post-graduate (PG) Programme.</li>
                        <li>To strengthen the Ph.D. Programme in core and interdisciplinary areas.</li>
                        <li>To strengthen the Faculty Development Programme.</li>
                        <li>To institute rigorous Academic Audit by external/internal agencies.</li>
                        <li>To organize national/international conferences/workshops on a regular basis.</li>
                        <li>To encourage faculty to get more involved in executing sponsored/consultancy projects from Government/industry/other funding agencies.</li>
                        <li>To explore more opportunities for bilateral collaboration with reputed organizations in India and abroad.</li>
                        <li>To nurture and build up a strong and coherent teacher-student relationship within the department.</li>
                        <li>To encourage and enhance the skill development activities for students.</li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
)
export default Homepage;