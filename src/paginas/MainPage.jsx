import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const mainPage = () => {
  const navigate = useNavigate();

  //States
  const [banner, setBanner] = useState(
    "https://assets.butterfly.ai/email-images/bf-banner.v2.png"
  );
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
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    const getinfo = async () => {
      try {
        const { data } = await clienteAxios("/infoPage");
        
        setPageData(data);
      } catch (error) {
        console.log("error:", error);
      }
    };
    getinfo();
  }, []);

  return (
    <>
      <div className="bg-teal-350 flex items-center justify-center h-screen flex-col">
        <div className="w">
        <img className="h-28 " src={banner} alt="img" />
        </div>
        <div className=" bg-slate-100 w-100 h-60">
          <div className="flex mt-5 justify-center">
            <div className="flex mt-1 text-sm font-semibold">{pageData[0]?.description}</div>
            <div className="flex font">{" would like to know:"}</div>
          </div>
            <div className="text-center font-bold text-2xl text-stone-500 m-6" >{" How is your week going?"}</div>
          <div className="flex flex-row justify-center items-center">
            <img
              className="w-20 h-20 "
              src={redFace}
              alt="img1"
              onClick={() => {
                navigate("/1");
              }}
              role="button"
            />

            <img
              className="w-20 h-20 "
              src={orangeFace}
              alt="img"
              onClick={() => {
                navigate("/2");
              }}
              role="button"
            />
            <img
              className="w-20 h-20 "
              src={beigeFace}
              alt="img"
              onClick={() => {
                navigate("/3");
              }}
              role="button"
            />
            <img
              className="w-20 h-20 "
              src={greenDarkFace}
              alt="img"
              onClick={() => {
                navigate("/4");
              }}
              role="button"
            />
            <img
              className="w-20 h-20 "
              src={green}
              alt="img"
              onClick={() => {
                navigate("/5");
              }}
              role="button"
            />
          </div>
          <div className="flex mt-2 text-sm flex-row justify-center items-center bg-blue-150 mx-44 text-white">
          {"Your answer will always remain anonymous"}
          </div>
        </div>
        <div className=" text-center mt-8 0 1rm text-sm text-blue-900">
          Butterfly. Your Team's Happiness Manager.
        </div>
        <div className=" text-center  text-white text-sm ">
          Appynest, Inc. - 604 East Eleven Street, NY 10009 
        </div>
        <div className=" text-center  text-white text-sm ">
        ??2022 Appynest, Inc. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default mainPage;
