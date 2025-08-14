import './Css.css';

function Sent(){
    return(
        <div className='Main'>
            <div className='Heading'>
                <h1>Sent Mail</h1>
            </div>
            <div className='Table'>
                <table>
                    <thead>
                        <tr>
                            <th>To</th>
                            <th>Subject</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Eesha</td>
                            <td>Project Status Report</td>
                            <td>Jul 18</td>
                        </tr>
                        <tr>
                            <td>Client ABC</td>
                            <td>Proposal Submission</td>
                            <td>Jul 17</td>
                        </tr>
                        <tr>
                            <td>Team Leads</td>
                            <td>Meeting Rescheduled</td>
                            <td>Jul 17</td>
                        </tr>
                        <tr>
                            <td>Support</td>
                            <td>Request for Access</td>
                            <td>Jul 16</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Sent;