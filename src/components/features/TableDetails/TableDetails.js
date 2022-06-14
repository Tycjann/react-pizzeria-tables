import { Col, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Config } from '../../../settings/settings'

const TableDetails = ({id, statusId}) => {

  const status = Config['status'].find(element => (element.id === statusId));

  return (
    <>
      <Row className="mb-2 justify-content-md-center">
        <Col xs={5} className="border-bottom">
          <h2>Table {id}
            <small className="fw-normal fs-6 ps-4">
              <span className="fw-bold">Status:</span> {status.name}
            </small>
          </h2>
        </Col>
        <Col xs={5} className='border-bottom text-end'>
          <Button as={NavLink} to={"/table/" + id}>Show more</Button>
        </Col>
      </Row>
    </>
  );
};

export default TableDetails;