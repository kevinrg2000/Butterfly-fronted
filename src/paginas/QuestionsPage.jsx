import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AnythingToAd from "../components/AnythingToAd";
import Send from "../components/Send";
import ModFace from "../components/ModFace";
import Questions from "../components/Questions";
const QuestionsPage = (face) => {
  const [butterfly, setbutterfly] = useState(
    "https://butterflyai.wpenginepowered.com/wp-content/uploads/2019/05/ButterflyIcon.svg"
  );
  const [sendForm, setSendForm] = useState(true);
  const [submit, setSubmit] = useState(false);
  return (
    <>
      <div className="bg-gradient-to-l from-blue-450 to-blue-350 flex max-h-full ">
        <img className="h-7 absolute m-1" src={butterfly} alt="img" />

        <div className="bg-gradient-to-b from-blue-450 to-blue-350  w-10 max-h-full "></div>
        <div className=" flex-row">
            
              <ModFace face={face} />
              <h1 className="text-white font-bold ml-10 text-xl">
                Do you agree with the following statements:
              </h1>
              <Questions
                sendForm={setSendForm}
                submit={submit}
                setSubmit={setSubmit}
              />
              <AnythingToAd />
              <Send send={sendForm} submit={submit} setSubmit={setSubmit} />
            
          <div className="ml-10 text-sm mt-10 text-white">Butterfly.</div>
          <div className="ml-10 text-sm mt-1 text-blue-150">
            Support Terms of Service Privacy Policy
          </div>
          <div className="ml-10 text-sm mt-1 mb-12 text-white">
            ©2022 Appynest, Inc.
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionsPage;
