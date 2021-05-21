import React from 'react';
import Table from 'react-bootstrap/Table'
import grantsData from './Data/grantsData'
import * as styles from '../styles.module.css';

const Grants = () => {

    return (

        <div>
            <div>
                <h1 className={styles.head} style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', }}>Research Grants  </h1>
                <hr></hr><br></br>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>PI/Co-PI</th>
                            <th>Funding Amount</th>
                            <th>Funding Agency</th>
                            <th>Duration</th>
                            <th>Title of the Project</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grantsData.map((data) =>

                            <tr>
                                <td>{data.pi}</td>
                                <td>{data.amount}</td>
                                <td>{data.agency}</td>
                                <td>{data.duration}</td>
                                <td>{data.title}</td>
                                <td>{data.status}</td>
                            </tr>
                        )}

                    </tbody>
                </Table>


            </div>
        </div>

    );
}

export default Grants;