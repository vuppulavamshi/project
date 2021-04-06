import React, { useState } from 'react';
import Pagination from '../../components/pagination';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { API } from '../../api-services/transfer-eval-service';

function TransferEvaluationList(props) {

    const [currentPage, setCurrentPage] = useState(1);
    const [transferEvalsPerPage] = useState(6);

    // Get current transfer evals
    const indexOfLastTransferEval = currentPage * transferEvalsPerPage;
    const indexOfFirstTransferEval = indexOfLastTransferEval - transferEvalsPerPage;
    const currentTransferEvals = props.transferEvals.slice(indexOfFirstTransferEval, indexOfLastTransferEval);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const transferEvalClicked = transferEval => evt => {
        props.transferEvalClicked(transferEval);
    }

    const editClicked = transferEval => {
        props.editClicked(transferEval);
        console.log(transferEval);
      }
    
    const deleteClicked = transferEval => {
        if (window.confirm("Are you sure?")) {
            API.deleteTransferEvaluation(transferEval.transfer_eval_id)
            .then( () => props.deleteClicked(transferEval))
            .catch( error => console.log(error))
        } else {
            console.log("You clicked cancel");
        }
      }

    const newTransferEval = () => {
        props.newTransferEval();
    }

    return (
        <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>MAJOR NAME</th>
                    <th>INSTITUTION/SCHOOL NAME</th>
                    <th>COURSE #</th>
                    <th>COURSE TITLE</th>
                    <th>UNHM EQUIVALENT</th>
                    <th>APPROVED STATUS</th>
                    <th>APPROVER NAME</th>
                    <th>SEM/YEAR TAKEN</th>
                    <th>EXPIRATION DATE</th>
                    <th/>
                    <th>
                        <FontAwesomeIcon icon={faPlus} alignmentBaseline='before-edge' onClick={newTransferEval}/>
                    </th>
                </tr>
            </thead>
            <tbody>
                    { currentTransferEvals && currentTransferEvals.map( transferEval => {
                    return (
                        <tr>
                            <td onClick={transferEvalClicked(transferEval)}>
                                {transferEval.major}
                            </td>
                            <td onClick={transferEvalClicked(transferEval)}>
                                {transferEval.school}
                            </td>
                            <td onClick={transferEvalClicked(transferEval)}>
                                {transferEval.course_number}
                            </td>
                            <td onClick={transferEvalClicked(transferEval)}>
                                {transferEval.course_title}
                            </td>
                            <td onClick={transferEvalClicked(transferEval)}>
                                {transferEval.unhm_eq}
                            </td>
                            <td onClick={transferEvalClicked(transferEval)}>
                                {transferEval.approved_status}
                            </td>
                            <td onClick={transferEvalClicked(transferEval)}>
                                {transferEval.approver}
                            </td>
                            <td onClick={transferEvalClicked(transferEval)}>
                                {transferEval.sem_year_taken}
                            </td>
                            <td onClick={transferEvalClicked(transferEval)}>
                                {transferEval.expiration_date}
                            </td>
                            <td>
                                <Button variant="outline-primary" onClick={() => editClicked(transferEval)}>Edit</Button>
                            </td>
                            <td>
                                <Button variant="outline-danger" onClick={() => deleteClicked(transferEval)}>Delete</Button>
                            </td>
                        </tr>
                    )})}
            </tbody>
        </Table>
        <Pagination elementsPerPage={transferEvalsPerPage} totalElements={props.transferEvals.length} paginate={paginate}/>
    </>
    )
}

export default TransferEvaluationList;