import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const ModFace = (face) => {
  //States

  const [faces, setFaces] = useState(face.face.face);
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
        console.log("data:");
        setPageData(data);
      } catch (error) {
        console.log("error:", error);
      }
    };
    getinfo();
  }, []);

  return (
    <>
    
      <div className="flex flex-row  h-60">
        {faces === 1 && (
          <>
            <img
              className="w-40 h-40 m-10"
              src={redFace}
              alt="img1"
              onClick={() => {
                navigate("/1");
              }}
              role="button"
            />
            <div className="items-center justify-center self-center">
              <div className=" text-white font-bold text-xl "> {pageData[1]?.description}</div>
              <div className="flex flex-row">
              <h2 className="text-slate-200 ">Your answers will </h2>
              
              <h2 className="text-blue-150 ml-1"> always remain anonymous</h2>
              </div>
            </div>
           
          </>
        )}
        {faces === 2 && (
          <>
            <img
              className="w-40 h-40 m-10"
              src={orangeFace}
              alt="img1"
              onClick={() => {
                navigate("/1");
              }}
              role="button"
            />
            <div className="items-center justify-center self-center">
              <div className=" text-white  font-bold text-xl"> {pageData[4]?.description}</div>
              <div className="flex flex-row">
              <h2 className="text-slate-200 ">Your answers will </h2>
              
              <h2 className="text-blue-150 ml-1"> always remain anonymous</h2>
              </div>
            </div>
           
          </>
        )}
        {faces === 3 && (
          <>
            <img
              className="w-40 h-40 m-10"
              src={beigeFace}
              alt="img1"
              onClick={() => {
                navigate("/1");
              }}
              role="button"
            />
            <div className="items-center justify-center font-bold self-center">
              <div className=" text-white text-xl"> {pageData[5]?.description}</div>
              <div className="flex flex-row">
              <h2 className="text-slate-200 ">Your answers will </h2>
              
              <h2 className="text-blue-150 ml-1"> always remain anonymous</h2>
              </div>
            </div>
           
          </>
        )}
        {faces === 4 && (
          <>
            <img
              className="w-40 h-40 m-10"
              src={greenDarkFace}
              alt="img1"
              onClick={() => {
                navigate("/1");
              }}
              role="button"
            />
            <div className="items-center justify-center  font-bold self-center">
              <div className=" text-white text-xl"> {pageData[2]?.description}</div>
              <div className="flex flex-row">
              <h2 className="text-slate-200 ">Your answers will </h2>
              
              <h2 className="text-blue-150 ml-1"> always remain anonymous</h2>
              </div>
            </div>
           
          </>
        )}
        {faces === 5 && (
          <>
            <img
              className="w-40 h-40 m-10"
              src={green}
              alt="img1"
              onClick={() => {
                navigate("/1");
              }}
              role="button"
            />
            <div className="items-center justify-center font-bold self-center">
              <div className=" text-white text-xl"> {pageData[3]?.description}</div>
              <div className="flex flex-row">
              <h2 className="text-slate-200 ">Your answers will </h2>
              
              <h2 className="text-blue-150 ml-1"> always remain anonymous</h2>
              </div>
            </div>
            
          </>
        )}
        <div className=" text-white  items-end justify-end font-bold self-start  m-3"> {pageData[0]?.description}</div>
      </div>
    </>
  );
};

export default ModFace;
