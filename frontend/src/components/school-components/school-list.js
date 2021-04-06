import React from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { API } from '../../api-services/school-services';

function SchoolList(props) {

    const schoolClicked = school => evt => {
        props.schoolClicked(school);
    }

    const editClicked = school => {
        console.log("Edit is clicked", school.school_id);
        props.editClicked(school);
    }

    const deleteClicked = school => {
        if (window.confirm("Are you sure?")) {
            API.deleteSchool(school.school_id)
            .then( () => props.deleteClicked(school))
            .catch( error => console.log(error))
        } else {
            console.log("You clicked cancel");
        }
      }
    
    const newSchool = () => {
        props.newSchool();
    }
    
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th onClick={() => window.location.reload(false)}>SCHOOL NAME</th>
                    <th />
                    <th>
                        <FontAwesomeIcon icon={faPlus} alignmentBaseline='before-edge' onClick={newSchool}/>
                    </th>
                </tr>
            </thead>
            <tbody>
                { props.schools && props.schools.map( school => {
                return (
                    <tr value={school.school_id}>
                        <td onClick={schoolClicked(school)}>
                        {school.school_name}
                        </td>
                        <td>
                            <Button variant="outline-primary" onClick={() => editClicked(school)}>Edit</Button>
                        </td>
                        <td>
                            <Button variant="outline-danger" onClick={() => deleteClicked(school)}>Delete</Button>
                        </td>
                    </tr>
                )})}
            </tbody>
        </Table>
    )
}

export default SchoolList;