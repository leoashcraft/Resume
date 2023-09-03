import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './Sidebar.jsx'
import Content from './Content.jsx'

function App() {

  return (
    <>
      <Container fluid>
        <Row>
          <Col xxl={1} className="d-lg-none d-xl-none d-xxl-block"/>
          <Col sm={12} lg={8} xl={8} xxl={7}>
            <Content />
          </Col>
          <Col lg={1} xl={1} xxl/>
          <Col sm={12} lg={3} xl={3} xxl={3} id="sidebar" className="px-0">
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
