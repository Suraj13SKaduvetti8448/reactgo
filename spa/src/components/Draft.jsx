import './Css.css';

function Draft(){
    return(
        <div className='Main'>
            <div className='Heading'>
                <h1>Drafts</h1> 
            </div>
            <div className='Table'>
                <table>
                    <thead>
                        <tr>
                            <th>To</th>
                            <th>Subject</th>
                            <th>Last Edited</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Team</td>
                            <td>Project Update Meeting Agenda</td>
                            <td>Aug 1</td>
                        </tr>
                        <tr>
                            <td>HR</td>
                            <td>Request for Leave Approval</td>
                            <td>Jul 30</td>
                        </tr>
                        <tr>
                            <td>Client</td>
                            <td>Proposal Draft for Review</td>
                            <td>Jul 28</td>
                        </tr>
                        <tr>
                            <td>Support</td>
                            <td>Issue Follow-up Email</td>
                            <td>Jul 25</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Draft;
