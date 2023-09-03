import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faFileWord } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function App() {

  return (
    <>
        <Container fluid id="download-resume-con">
          <Row className="w-100 text-center">
            <Col sm={4}><a href="https://drive.google.com/uc?export=download&id=1J_cgwbPoNI3HbThDxWC8qK9WkldoRECA" aria-label="Download PDF version of resume" target="_blank"><FontAwesomeIcon icon={faFilePdf} /></a></Col>
            <Col sm={4}><a href="https://drive.google.com/uc?export=download&id=1ZHqkZcin7YkdUCpE62FeXdRJ6cTw1Z6B" aria-label="Download ATS Friendly version of resume" target="_blank"><FontAwesomeIcon icon={faFileWord} /></a></Col>
            <Col sm={4}><a href="https://github.com/leoashcraft/Resume-September-2023" aria-label="Review GitHub Repository of resume" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></Col>
          </Row>
        </Container>
    </>
  )
}

export default App
