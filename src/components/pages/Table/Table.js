import { Col, Row } from 'react-bootstrap';
import TableForm from '../../features/TableForm/TableForm.js'

const Table = () => {

  return (
    <>
      <Row className="mb-2 mt-2 justify-content-md-center">
        <Col xs={3}>
          <h1 className="display-6">Table 1</h1>
        </Col>
      </Row>
      <TableForm />
    </>
  );
};

export default Table;