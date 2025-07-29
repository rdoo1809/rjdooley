import {Col} from "react-bootstrap";
import {ArrowRightCircle} from 'react-bootstrap-icons';

const myStyle = {
  color: 'white'};

export const ProjectCard = ({title, description, imgUrl, href, buttonText = "site", md = 4}) => {
  return (
      <Col size={12} sm={6} md={md}>
      <div className="proj-imgbx">
          <img src={imgUrl} style={{maxHeight: '200px', width: '100%', objectFit: 'cover'}}/>
        <div className="proj-txtx">
          <h4>{title} </h4>
          <span>{description}</span><br></br>
            <a href={href} target="_blank">
                <button style={myStyle} onClick={() => console.log('connect')}>Visit {buttonText} <ArrowRightCircle
                    size={25}/></button>
            </a>
        </div>
      </div>
    </Col>
  )
}
