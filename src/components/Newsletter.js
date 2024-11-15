import {Col, Row} from "react-bootstrap";

export const Newsletter = () => {
  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 0,
    padding: 0,
    backgroundColor: 'rgb(21, 21, 21)',
    borderRadius: '25%'
  };

  const colStyle = {
    margin: 0,
    padding: 0,
    color: 'white'
  };

  const black = {
    color: 'white'
  }

  const textContainerStyle = {
    paddingTop: '80px', // Add padding to the top for centering
  };

  return (
      <Col lg={12}>
        <div style={rowStyle} className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={4} md={4} xl={4} style={colStyle}>
              <h3 style={textContainerStyle}>Thanks for stopping by!<br/>Keep scrolling to see some of my skills and
                projects.</h3>
            </Col>
            <Col lg={4} md={4} xl={4} style={colStyle}>
              <h3 style={textContainerStyle}>Looking for a web developer?<br/>Visit my other site <a style={black}
                                                                                                     href="https://rjdooley.ca/business"
                                                                                                     target="_blank"> HERE.</a>
              </h3>

            </Col>
          </Row>
        </div>
      </Col>
  )
}
