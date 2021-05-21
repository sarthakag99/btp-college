import React from 'react';
import Table from 'react-bootstrap/Table'
import * as styles from '../styles.module.css';
import { cse, ece, hss, mathematics, physics, me } from './Data/overviewData';

const Overview = () => (
    <div>
            <div>
                <h1 className={styles.head} style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', }}>Research Overview</h1>
                <hr></hr><br></br>
                <p>
                    The LNMIIT, Jaipur focuses on latest areas of science and technology for teaching and research in its curriculum. The faculty members have publications in some of the well-reputed journals (high impact factor) and peer-reviewed conferences. Currently, the major research and development areas offered to the students by different streams are as follows:

                </p>
                <h3 style={{ textDecoration: 'underline #009cff' }}>Computer Science and Engineering (CSE)</h3>
                <ul>
                    {cse.map((data) =>
                        <li>
                            {data}
                        </li>
                    )}
                </ul>

                <h3 style={{ textDecoration: 'underline #009cff' }}>Electronics and Communication Engineering (ECE)</h3>
                <ul>
                    {ece.map((data) =>
                        <li>
                            {data}
                        </li>
                    )}
                </ul>

                <h3 style={{ textDecoration: 'underline #009cff' }}>Mechanical Engineering (ME)</h3>
                <ul>
                    {me.map((data) =>
                        <li>
                            {data}
                        </li>
                    )}
                </ul>

                <h3 style={{ textDecoration: 'underline #009cff' }}>Humanities and Social Sciences (HSS)</h3>
                <ul>
                    {hss.map((data) =>
                        <li>
                            {data}
                        </li>
                    )}
                </ul>

                <h3 style={{ textDecoration: 'underline #009cff' }}>Physics</h3>
                <ul>
                    {physics.map((data) =>
                        <li>
                            {data}
                        </li>
                    )}
                </ul>

                <h3 style={{ textDecoration: 'underline #009cff' }}>Mathematics</h3>
                <ul>
                    {mathematics.map((data) =>
                        <li>
                            {data}
                        </li>
                    )}
                </ul>

            </div>
        </div>
    
)
export default Overview;