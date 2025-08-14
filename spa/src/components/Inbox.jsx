import './Css.css';

function Inbox(){
    return(
        <div className='Main'>
            <div className='Heading'>
                <h1>Inbox</h1>
            </div>
            <div className='Table'>
                <table>
                    <thead>
                        <tr>
                            <th>Sender</th>
                            <th>Subject</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Google</td>
                            <td>Security Alert : New Sign-in on Chrome</td>
                            <td>Jul 16</td>
                        </tr>
                        <tr>
                            <td>LinkedIn</td>
                            <td>Sharikh, You have 3 new Job alerts</td>
                            <td>Jul 17</td>
                        </tr>
                        <tr>
                            <td>GitHub</td>
                            <td>New Pull Request on your Repo</td>
                            <td>Jul 17</td>
                        </tr>
                        <tr>
                            <td>Netflix</td>
                            <td> 🎥 Top Picks for you this Weekend</td>
                            <td>Jul 18</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Inbox;