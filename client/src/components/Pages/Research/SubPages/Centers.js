import React from 'react';
import Table from 'react-bootstrap/Table'
import centersData from './Data/centersData'

import * as styles from '../styles.module.css';

const Centers = () => {

    return (
        <div>
            <div>
                <h1 className={styles.head} style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', }}>Specialized Research Centres</h1>
                <hr></hr><br></br>
                <p>The Institute has created several specialised centres for multi-disciplinary research, development and entrepreneurship. This has been done as part of its focus on select areas of sustainable innovation-enablement and technology-based opportunity creation. These centres would take initiatives to enable early as well as long-term benefits to the campus, society and the nation. These centres, initially created as virtual centres, would gradually get converted as full-fledged physical centres in about two years' time and are envisioned to become hubs for innovation, research, technology development, skill-development, consulting and outreach, around which not only the LNMIIT but also many other institutions in the vicinity (or even beyond) might get enabled over the years.</p>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name of the Centre</th>
                            <th>Description/ Objectives</th>
                            <th>Centre Lead</th>
                        </tr>
                    </thead>
                    <tbody>
                        {centersData.map((data) =>
                            <tr>
                                <td>{data.name}</td>
                                <td>
                                    {data.description}
                                    <ul>
                                        {data.description1.map(subData => <li>{subData}</li>)}
                                    </ul>
                                </td>
                                <td>{data.lead}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </div>

    );
}

export default Centers;