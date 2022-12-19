import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { httpGETContactRequest } from '../../../services/request';

const ManageContactRequest = () => {
  const [contactRequests, setContactRequests] = useState('');

  useEffect(() => {
    const getContactRequest = async () => {
      try {
        const requests = await httpGETContactRequest();
        setContactRequests(requests)
      } catch(err) {
        const errMsg = err.response.data.msg;
        console.log(errMsg);
      }
    }
    getContactRequest();
  }, [])

  console.log(contactRequests);
  return (
		<div>
			<table className='table table-hover text-center'>
				<thead>
					<tr>
						<th scope='col'>Serial</th>
						<th scope='col'>Name</th>
						<th scope='col'>Email</th>
						<th scope='col'>Contact Number</th>
						<th scope='col'>Total Cost</th>
						<th scope='col'>Details</th>
					</tr>
				</thead>
				<tbody>
					{contactRequests &&
						contactRequests?.map((request, index) => (
							<>
								<tr>
									<th scope='row'>{index + 1}</th>
									<td>{request.userName}</td>
									<td>{request.userEmail}</td>
									<td>{request.userMobileNumber}</td>
									<td>{request.totalCost}</td>
									<td>
										<Link
											className='text-decoration-underline'
											to={`/adminPanel/manage-contact-request/${index + 1}`}
                      state={request}
										>
											Details
										</Link>
									</td>
								</tr>
							</>
						))}
				</tbody>
			</table>
		</div>
	);
}

export default ManageContactRequest