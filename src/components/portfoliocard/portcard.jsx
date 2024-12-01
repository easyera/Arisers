/* eslint-disable react/prop-types */
import "./portcard.css";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export default function Portcard(props) {

  return (
    <div className="website-card">
      <div className="website-image">
        <img src={props.image} alt="image" />
      </div>
      <div className="website-content">
        <div className="content">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
        <a href={props.link} target="_blank">
        <IoArrowBackCircleSharp className="icon-port" />
        </a>
      </div>
    </div>
  );
}
