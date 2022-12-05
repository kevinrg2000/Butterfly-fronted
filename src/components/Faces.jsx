import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
const Faces = (props)=> {
const navigate = useNavigate();
  const [redFace, setRedFace] = useState(
    "https://assets.butterfly.ai/email-images/mood-1.v2.png"
  );
  const [orangeFace, setOrangeFace] = useState(
    "https://assets.butterfly.ai/email-images/mood-2.v2.png"
  );
  const [beigeFace, setBeigeFace] = useState(
    "https://assets.butterfly.ai/email-images/mood-3.v2.png"
  );
  const [greenDarkFace, setGreenDarkFace] = useState(
    "https://assets.butterfly.ai/email-images/mood-4.v2.png"
  );
  const [green, setGreen] = useState(
    "https://assets.butterfly.ai/email-images/mood-5.v2.png"
  );


  return (
    <>
      <div className="flex flex-row justify-center items-center mt-5">
        <img
          className="w-20 h-20 ml-5 "
          src={redFace}
          alt="img1"
          onClick={() => {
            props.Faces(1)
            props.ChangeFace(1)
            navigate("/1");
          }}
          role="button"
        />

        <img
          className="w-20 h-20 ml-5 "
          src={orangeFace}
          alt="img"
          onClick={() => {
            props.Faces(2)
            props.ChangeFace(1)
            navigate("/2");
          }}
          role="button"
        />
        <img
          className="w-20 h-20 ml-5 "
          src={beigeFace}
          alt="img"
          onClick={() => {
            props.Faces(3)
            props.ChangeFace(1)
            navigate("/3");
          }}
          role="button"
        />
        <img
          className="w-20 h-20 ml-5 "
          src={greenDarkFace}
          alt="img"
          onClick={() => {
            props.Faces(4)
            props.ChangeFace(1)
            navigate("/4");
          }}
          role="button"
        />
        <img
          className="w-20 h-20 ml-5 "
          src={green}
          alt="img"
          onClick={() => {
            props.Faces(5)
            props.ChangeFace(1)
            navigate("/5");
          }}
          role="button"
        />
      </div>
    </>
  );
};

export default Faces;
