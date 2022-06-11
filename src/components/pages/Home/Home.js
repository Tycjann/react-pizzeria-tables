import { Col, Row } from 'react-bootstrap';
import TableRow from '../../features/TableRow/TableRow.js'

const Home = () => {

  return (
    <>
      <Row className="mb-2 mt-2 justify-content-md-center">
        <Col xs={10}>
          <h1 className="display-6">All tables</h1>
        </Col>
      </Row>
      <TableRow/>
      <TableRow/>
      <TableRow/>
    </>
  );
};

export default Home;