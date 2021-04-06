import React, { useState } from 'react';
import Pagination from '../../components/pagination';
import { Container, Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MRAPI } from '../../api-services/major-req-service';

function MajorRequirementList(props) {

    const [currentPage, setCurrentPage] = useState(1);
    const [majorReqsPerPage] = useState(5);

    // Get current transfer evals
    const indexOfLastMajorReq = currentPage * majorReqsPerPage;
    const indexOfFirstMajorReq = indexOfLastMajorReq - majorReqsPerPage;
    const currentMajorReqs = props.majorReqs.slice(indexOfFirstMajorReq, indexOfLastMajorReq);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const majorReqClicked = majorReq => evt => {
        props.majorReqClicked(majorReq);
    }

    const editClicked = majorReq => {
        props.editClicked(majorReq);
      }
    
    const deleteClicked = majorReq => {
        if (window.confirm("Are you sure?")) {
            MRAPI.deleteMajorReq(majorReq.major_req_id)
            .then( () => props.deleteClicked(majorReq))
            .catch( error => console.log(error))
        } else {
            console.log("You clicked cancel");
        }
      }

    const newMajorReq = () => {
        props.newMajorReq();
    }
    

    return (
        <Container>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th onClick={() => window.location.reload(false)}>MAJOR REQUIREMENT</th>
                    <th>MAJOR NAME</th>
                    <th/>
                    <th>
                        <FontAwesomeIcon icon={faPlus} alignmentBaseline='before-edge' onClick={newMajorReq}/>
                    </th>
                </tr>
            </thead>
            <tbody>
                    { currentMajorReqs && currentMajorReqs.map( majorReq => {
                    return (
                        <tr>
                            <td onClick={majorReqClicked(majorReq)}>
                                {majorReq.description}
                            </td>
                            <td>
                                {majorReq.major}
                            </td>
                            <td>
                                <Button variant="outline-primary" onClick={() => editClicked(majorReq)}>Edit</Button>
                            </td>
                            <td>
                                <Button variant="outline-danger" onClick={() => deleteClicked(majorReq)}>Delete</Button>
                            </td>
                        </tr>
                    )})}
            </tbody>
        </Table>
        <Pagination elementsPerPage={majorReqsPerPage} totalElements={props.majorReqs.length} paginate={paginate}/>
        </Container>
    )
}

export default MajorRequirementList;