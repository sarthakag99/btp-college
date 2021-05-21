import React from 'react';
import Table from 'react-bootstrap/Table'
import journalData from './Data/journalData';
const Journal = () => {
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>S. No.</th>
                        <th>Year</th>
                        <th>Month</th>
                        <th>Department</th>
                        <th>Faculty</th>
                        <th>Vol</th>
                        <th>Issue</th>
                        <th>Name</th>
                        <th>Article Name</th>
                        <th>Author Type</th>
                    </tr>
                </thead>
                <tbody>
                    {journalData.map((data) =>

                        <tr>
                            <td>{data.key}</td>
                            <td>{data.year}</td>
                            <td>{data.month}</td>
                            <td>{data.department}</td>
                            <td>{data.faculty}</td>
                            <td>{data.vol}</td>
                            <td>{data.issue}</td>
                            <td>{data.name}</td>
                            <td>{data.articleName}</td>
                            <td>{data.type}</td>
                        </tr>
                    )}

                </tbody>
            </Table>
        </div>
    );

};
export default Journal;