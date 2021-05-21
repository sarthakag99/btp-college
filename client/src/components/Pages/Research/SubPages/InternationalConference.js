import React from 'react';
import Table from 'react-bootstrap/Table'
import icData from './Data/icData';
const InternationalConference = () => {
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
                        <th>Date From</th>
                        <th>Date To</th>
                        <th>Name</th>
                        <th>Article Name</th>
                        <th>Author Type</th>
                    </tr>
                </thead>
                <tbody>
                    {icData.map((data) =>

                        <tr>
                            <td>{data.key}</td>
                            <td>{data.year}</td>
                            <td>{data.month}</td>
                            <td>{data.department}</td>
                            <td>{data.faculty}</td>
                            <td>{data.df}</td>
                            <td>{data.dt}</td>
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
export default InternationalConference;