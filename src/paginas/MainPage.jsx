import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const mainPage = () => {

  const [banner, setbanner] = useState("https://assets.butterfly.ai/email-images/bf-banner.v2.png");
  const [redFace, setredFace] = useState("https://assets.butterfly.ai/email-images/mood-1.v2.png");
  const [orangeFace, setorangeFace] = useState("https://assets.butterfly.ai/email-images/mood-2.v2.png");
  const [beigeFace, setbeigeFace] = useState("https://assets.butterfly.ai/email-images/mood-3.v2.png");
  const [greenDarkFace, setgreenDarkFace] = useState("https://assets.butterfly.ai/email-images/mood-4.v2.png");
  const [green, setgreen] = useState("https://assets.butterfly.ai/email-images/mood-5.v2.png");
  
  return (
    <>
      <div className="bg-teal-350 flex items-center justify-center h-screen flex-col">
        <img className=" " src={banner} alt="img" />
        <div className=" bg-white w-3/4 h-52 flex flex-row">
        <img className="w-20 h-20 " src={redFace} alt="img" />
        <img className="w-20 h-20 " src={orangeFace} alt="img" />
        <img className="w-20 h-20 " src={beigeFace} alt="img" />
        <img className="w-20 h-20 " src={greenDarkFace} alt="img" />
        <img className="w-20 h-20 " src={green} alt="img" />

        </div>
        <div className=" text-center m 0 0 1rm ">
          Butterfly. Your Team's Happiness Manager.
        </div>
        <div className=" ">
          Appynest, Inc. - 604 East Eleven Street, NY 10009 ©2022 Appynest, Inc.
          All rights reserved.
        </div>
      </div>
    </>
  );
};

export default mainPage;
