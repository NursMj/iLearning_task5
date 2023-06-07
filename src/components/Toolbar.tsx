import { Row, Col } from "react-bootstrap"
import SeedForm from './SeedForm'
import ErrorNumberForm from "./ErrorNumberForm"

function Toolbar() {

  return (
    <Row className='mt-4 mb-4'>
      <Col>
        <ErrorNumberForm />
      </Col>
      <Col md={{ span: 3, offset: 3 }}>
        <SeedForm />
      </Col>
    </Row>
  )
}

export default Toolbar