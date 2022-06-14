import { Col, Row } from 'react-bootstrap';
import TableForm from '../../features/TableForm/TableForm.js';
import { useNavigate, Navigate } from "react-router-dom";
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleTableById, editTablesRequest } from '../../../redux/tablesRedux';

const EditTableForm = () => {

  const dispatch = useDispatch();
  
  let navigate = useNavigate();

  const { id } = useParams();
  
  const table = useSelector(state => getSingleTableById(state, id));

  const handleSubmit = editTables => {
    dispatch(editTablesRequest({ ...editTables, id }));
    // navigate(-1)
    navigate('/')
  };

  if (!table) return <Navigate to="/" />
  else 
  return (
    <>
      <Row className="mb-2 mt-2 justify-content-md-center">
        <Col xs={3}>
          <h1 className="display-6">Table {id}</h1>
        </Col>
      </Row>
      <TableForm
        action={handleSubmit}
        status={table.status}
        peopleAmount={table.peopleAmount}
        peopleAmountMax={table.peopleAmountMax}
        bill={table.bill}
      />
    </>
  );
};

export default EditTableForm;