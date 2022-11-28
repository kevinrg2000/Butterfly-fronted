import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
const EndPage = () => {
  const navigate = useNavigate();
  const [butterfly, setbutterfly] = useState(
    "https://butterflyai.wpenginepowered.com/wp-content/uploads/2019/05/ButterflyIcon.svg"
  );
  const [sendForm, setSendForm] = useState(true);
  const [submit, setSubmit] = useState(false);
  return (
    <>
      <div className="bg-gradient-to-l from-blue-450 to-blue-350 flex max-h-full ">
        <img
          className="h-7 absolute m-1"
          src={butterfly}
          alt="img1"
          onClick={() => {
            navigate("/");
          }}
          role="button"
        />

        <div className="bg-gradient-to-b from-blue-450 to-blue-350  w-10 max-h-full "></div>
        <div className=" h-158">
          <div className=" flex-row">
            <div className="bg-white w-98 h-52 ml-10 mt-10 mb-5 rounded">
              <div className="flex flex-col">
                <img
                  className="w-10 h-10 m-10 ml-10"
                  src={"checked.png"}
                  alt="img2"
                  onClick={() => {
                    navigate("/");
                  }}
                  role="button"
                />
                <div className="flex ml-10  text-blue-150 font-bold">
                  THANK YOU!
                </div>
                <div className="flex ml-10 font-normal text-sm ">
                  your feedback has been sent
                </div>
                <div className="flex ml-10 font-normal text-sm ">
                  have a lovely day
                </div>
              </div>
            </div>
            <div>
              <div className="ml-10 text-sm mt-10 text-white">Butterfly.</div>
              <div className="ml-10 text-sm mt-1 text-blue-150">
                Support Terms of Service Privacy Policy
              </div>
              <div className="ml-10 text-sm mt-1 mb-12 text-white">
                ©2022 Appynest, Inc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EndPage;
