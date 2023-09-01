import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <>
          <Container>
            <Row>
              <Col sm={12}><FontAwesomeIcon icon={faMapPin} className="sb-contact-icon" /> Dallas-Forth Worth</Col>
            </Row>
            <Row>
              <Col sm={12}><FontAwesomeIcon icon={faPhone} className="sb-contact-icon" /><a href="tel:+19036384782" target="_blank">(903) 638-4782</a></Col>
            </Row>
            <Row>
              <Col sm={12}><FontAwesomeIcon icon={faEnvelope} className="sb-contact-icon" /><a href="mailto:leo@ashcraft.tech" target="_blank">leo@ashcraft.tech</a></Col>
            </Row>
            <Row>
              <Col sm={12}><FontAwesomeIcon icon={faGlobe} className="sb-contact-icon" /><a href="https://ashcraft.tech" target="_blank">www.ashcraft.tech</a></Col>
            </Row>
            <Row>
              <Col sm={12}><FontAwesomeIcon icon={faLinkedin} className="sb-contact-icon" /><a href="https://www.linkedin.com/in/leo3" target="_blank">linkedin.com/in/leo3</a></Col>
            </Row>
            <Row>
              <Col sm={12}><FontAwesomeIcon icon={faGithub} className="sb-contact-icon" /><a href="https://github.com/leoashcraft" target="_blank">github.com/leoashcraft</a></Col>
            </Row>
          </Container>
    </>
  );
};



export default Contact;