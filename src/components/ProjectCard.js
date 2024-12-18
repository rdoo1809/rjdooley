import { Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

const myStyle = {
  color: 'white'};

export const ProjectCard = ({ title, description, imgUrl, href }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
     <img src={imgUrl} /> 
        <div className="proj-txtx">
          <h4>{title} </h4>
          <span>{description}</span><br></br>
      <a  href={href} target="_blank" ><button style={myStyle} onClick={() => console.log('connect')}>Visit Site <ArrowRightCircle size={25} /></button></a>
        </div>
      </div>
    </Col>
  )
}
