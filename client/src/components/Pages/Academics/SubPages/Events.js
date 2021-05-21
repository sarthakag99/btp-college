import React from 'react';
import Table from 'react-bootstrap/Table'
import * as styles from '../styles.module.css';
// import '../styles.css'
// import QuickLinks from './QuickLinks';
const Events = () => (
    <div>
        
        <h1 className={styles.head} style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', }}>Conferences Workshops organized / planned</h1>
            <hr></hr><br></br>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title of the event</th>
                        <th>Duration</th>
                        <th>Conference/ Workshop	</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Emerging Technologies for Next-Generation 5G</td>
                        <td>April 2018</td>
                        <td>Workshop</td>
                        <td>National</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Advances in Embedded and VLSI Design</td>
                        <td>29th March to 2nd April 2018</td>
                        <td>Workshop</td>
                        <td>National</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Summer Internship cum Training Programme on VLSI and Embedded Systems Design</td>
                        <td>June 19 to July 14, 2017</td>
                        <td>Workshop</td>
                        <td>National</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>5th International Conference on ‘Advances in Computing, Communications and Informatics’.</td>
                        <td>September 21-24, 2016</td>
                        <td>Conference</td>
                        <td>International</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>ASIC Design Flow Using Mentor Graphics Tools</td>
                        <td>August 30-31, 2016</td>
                        <td>Workshop</td>
                        <td>National</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Summer Internship cum Training Programme on VLSI and Embedded Systems Design</td>
                        <td>June 13 to July 10, 2016	</td>
                        <td>Workshop</td>
                        <td>National</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>IEEE All India Student Young Professionals WIE Congress 2016 (AISYWC)	</td>
                        <td>October 07-09, 2016</td>
                        <td>Conference</td>
                        <td>National</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>VESD 2015</td>
                        <td>April 201826-28 December 2015</td>
                        <td>Workshop</td>
                        <td>National</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Workshop on Modeling, Simulation, and Computational Techniques (WMSC),</td>
                        <td>January 15 – January 17, 2015</td>
                        <td>Conference</td>
                        <td>National</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Workshop on Antennas and RF Systems</td>
                        <td>March 24-25, 2012</td>
                        <td>Workshop</td>
                        <td>National</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Wireless and Personal Media Communication Conference (WPM)</td>
                        <td>December 03-06, 2007</td>
                        <td>Conference</td>
                        <td>National</td>
                    </tr>
                </tbody>
            </Table>
    </div>
);
export default Events