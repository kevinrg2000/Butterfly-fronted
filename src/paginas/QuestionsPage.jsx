import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ModFace from "../components/ModFace";
import Questions from "../components/Questions";
const QuestionsPage = (face) => {
  const [butterfly, setbutterfly] = useState(
    "https://butterflyai.wpenginepowered.com/wp-content/uploads/2019/05/ButterflyIcon.svg"
  );

  return (
    <>
      <div className="bg-gradient-to-l from-blue-450 to-blue-350 flex h-screen ">
        <img className="h-7 absolute m-1" src={butterfly} alt="img" />

        <div className="bg-gradient-to-b from-blue-450 to-blue-350  w-10 h-full "></div>
        <div className=" flex-row">
          <ModFace face={face} />

          <h1 className="text-white font-bold ml-10 text-xl">Do you agree with the following statements:</h1>
          <Questions />
        </div>
      </div>
    </>
  );
};

export default QuestionsPage;
