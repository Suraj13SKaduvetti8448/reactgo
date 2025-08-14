import './Css.css';

function Spam() {
    return (
        <div className='Main'>
            <div className='Heading'>
                <h1>Spam</h1>
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
                            <td>unknown@cheapmeds.com</td>
                            <td>Get your medications at 90% OFF!</td>
                            <td>Aug 1</td>
                        </tr>
                        <tr>
                            <td>winner@lotteryprize.org</td>
                            <td>Congratulations! You won $1,000,000</td>
                            <td>Jul 30</td>
                        </tr>
                        <tr>
                            <td>noreply@freegifts.net</td>
                            <td>Claim your FREE iPhone now!</td>
                            <td>Jul 29</td>
                        </tr>
                        <tr>
                            <td>scamalert@security-alerts.com</td>
                            <td>Urgent: Your account has been compromised</td>
                            <td>Jul 28</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Spam;
