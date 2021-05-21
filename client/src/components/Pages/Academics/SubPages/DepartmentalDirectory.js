import React from 'react';
import Table from 'react-bootstrap/Table'
import * as styles from '../styles.module.css';
// import '../styles.css'
// import QuickLinks from './QuickLinks';
const DepartmentalDirectory = () => (
    <div>
        
        <h1 className={styles.head} style={{ marginTop: '10px', marginBottom: '10px', padding: '5px', }}>Departmental Directory</h1>
            <hr></hr><br></br>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>NAME</th>
                        <th>DESIGNATION</th>
                        <th>CABIN/ BLOCK</th>
                        <th>INTER No.</th>
                        <th>QTR. No.</th>
                        <th>Residence Ext.</th>
                        <th>Domain Email-ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Prof. Raghuvir Tomar</td>
                        <td>Professor</td>
                        <td>1107</td>
                        <td>1201</td>
                        <td></td>
                        <td></td>
                        <td>rtomar@lnmiit.ac.in</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Prof. R. Gangopadhyay</td>
                        <td>Distinguished Professor</td>
                        <td>1112</td>
                        <td>1202</td>
                        <td>C-03</td>
                        <td>5202</td>
                        <td>ranjan@lnmiit.ac.in</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Dr. Soumitra Debnath</td>
                        <td>Associate Professor</td>
                        <td>1114</td>
                        <td>1203</td>
                        <td>C-04</td>
                        <td>5203</td>
                        <td>soumitra@lnmiit.ac.in</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Mr. Sandeep Saini</td>
                        <td>Assistant Professor</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>sandeep.saini@lnmiit.ac.in</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Mr. Purnendu Karmakar	</td>
                        <td>Assistant Professor</td>
                        <td>1043</td>
                        <td>1206</td>
                        <td>St-403</td>
                        <td>5206</td>
                        <td>purnendu.karmakar@lnmiit.ac.in</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Mr. Kapil Jainwal</td>
                        <td>Assistant Professor</td>
                        <td>1105</td>
                        <td>1207</td>
                        <td>St-303</td>
                        <td>5207</td>
                        <td>kapil.jainwal@lnmiit.ac.in</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Dr. Kusum Lata</td>
                        <td>Assistant Professor</td>
                        <td>1046</td>
                        <td>1208</td>
                        <td>St-204</td>
                        <td>5208</td>
                        <td>kusum@lnmiit.ac.in</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Dr. Divyang Rawal</td>
                        <td>Assistant Professor</td>
                        <td>1101</td>
                        <td>1210</td>
                        <td></td>
                        <td></td>
                        <td>divyang.rawal@lnmiit.ac.in</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Dr. Abhishek Sharma</td>
                        <td>Assistant Professor</td>
                        <td>1115</td>
                        <td>1211</td>
                        <td>St-202</td>
                        <td>5211</td>
                        <td>abhisheksharma@lnmiit.ac.in</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Dr. Navneet Upadhyay</td>
                        <td>Assistant Professor</td>
                        <td>1103</td>
                        <td>1216</td>
                        <td></td>
                        <td></td>
                        <td>nupadhyay@lnmiit.ac.in</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Dr Deepak Nair</td>
                        <td>Assistant Professor</td>
                        <td>1045</td>
                        <td>1212</td>
                        <td></td>
                        <td></td>
                        <td>deepak.nair@lnmiit.ac.in</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Dr. Santosh Shah</td>
                        <td>Assistant Professor</td>
                        <td>1102</td>
                        <td>1213</td>
                        <td></td>
                        <td></td>
                        <td>santosh.shah@lnmiit.ac.in</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>Dr.Nikhil Sharma</td>
                        <td>Assistant Professor</td>
                        <td>1113</td>
                        <td>1214</td>
                        <td></td>
                        <td></td>
                        <td>nikhil.sharma@lnmiit.ac.in</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>Dr.Joyeeta Singha</td>
                        <td>Assistant Professor</td>
                        <td>1106</td>
                        <td>1215</td>
                        <td>St-301</td>
                        <td>5215</td>
                        <td>joyeeta.singha@lnmiit.ac.in</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>Dr. Kanjalochan Jena</td>
                        <td>Assistant Professor</td>
                        <td>1106</td>
                        <td>1209</td>
                        <td></td>
                        <td></td>
                        <td>kanjalochan.jena@lnmiit.ac.in</td>
                    </tr>
                    <tr>
                        <td>16</td>
                        <td>Dr. Gaurav Chatterjee</td>
                        <td>Assistant Professor</td>
                        <td>1042</td>
                        <td>1205</td>
                        <td></td>
                        <td></td>
                        <td>gaurav.chatterjee@lnmiit.ac.in</td>
                    </tr>
                </tbody>
            </Table>
    </div>
);
export default DepartmentalDirectory