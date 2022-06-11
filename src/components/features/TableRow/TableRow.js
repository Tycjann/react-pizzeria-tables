import { Col, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const TableRow = () => {

  const title = 'Table 1';
  const id = 1;
  const status = 'Free';

  return (
    <>
      <Row className="mb-2 justify-content-md-center">
        <Col xs={5} className="border-bottom">
          <h2 className="">{title}
            <small className="fw-normal fs-6 ps-4">
              <span className="fw-bold">Status:</span> {status}
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

export default TableRow;