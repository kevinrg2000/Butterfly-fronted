import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const Questions = () => {
  const [questions, setQuestions] = useState({});
  const [count, setcount] = useState(0);
  const [framework, setframework] = useState(0);
;
  useEffect(() => {
    const getinfo = async () => {
      try {
        const { data } = await clienteAxios("/questions");

        setQuestions(data);
      } catch (error) {
        console.log("error:", error);
      }
    };
    getinfo();
  }, []);



  const frameworkControl= e =>{
    setframework(e.target.value)
  }

  return (
    <>
      {/* <div className="absolute w-4 h-1 ml-7 mt-20  border-t-8  border-r-white bg-white"></div> */}
      {Object.values(questions).map((question) => {
        
        return (
          <div className="bg-white w-100 h-80 ml-10 mt-10 mb-5 rounded">
            <div className="ml-4 pt-2 text-xs font-extralight">
              {question.questionNumber} of {5}
            </div>

            <div className=" ml-4 mt-2 scroll-m-10 text-sm  font-semibold text-teal-350">
              Roles and Responsibilities
            </div>
            <div className=" ml-4 mt-6  text-2xl  font-semibold text-blue-550 text-left">
              {question.description}
            </div>
            
            <div className="rating gap-1 ml-10 mt-4">
              <input onChange={frameworkControl} checked={framework ==1? true:false} id="1" value="1" type="radio" name="rating-10" className="mask mask-star-2 bg-red-400 ml-6" />
              <input onChange={frameworkControl} checked={framework ==2? true:false} id="2" value="2" type="radio" name="rating-10" className="mask mask-star-2 bg-red-400 ml-6" />
              <input onChange={frameworkControl} checked={framework ==3? true:false} id="3" value="3" type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400 ml-6"/>
              <input onChange={frameworkControl} checked={framework ==3? true:false} id="3" value="3" type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400 ml-6"/>
              <input onChange={frameworkControl} checked={framework ==4? true:false} id="4" value="4" type="radio" name="rating-10" className="mask mask-star-2 bg-yellow-400 ml-6"/>
              <input onChange={frameworkControl} checked={framework ==5? true:false} id="5" value="5" type="radio" name="rating-10" className="mask mask-star-2 bg-yellow-400 ml-6"/>
              <input onChange={frameworkControl} checked={framework ==6? true:false} id="6" value="6" type="radio" name="rating-10" className="mask mask-star-2 bg-lime-400 ml-6"/>
              <input onChange={frameworkControl} checked={framework ==7? true:false} id="7" value="7" type="radio" name="rating-10" className="mask mask-star-2 bg-lime-400 ml-6"/>
              <input onChange={frameworkControl} checked={framework ==8? true:false} id="8" value="8" type="radio" name="rating-10" className="mask mask-star-2 bg-green-400 ml-6"/>
              <input onChange={frameworkControl} checked={framework ==9? true:false} id="9" value="9" type="radio" name="rating-10" className="mask mask-star-2 bg-green-400 ml-6"/>
              <input onChange={frameworkControl} checked={framework ==10? true:false} id="10" value="10" type="radio" name="rating-10" className="mask mask-star-2 bg-green-400 ml-6"/>
            </div>

            

            <div className="flex flex-row justify-between">
              <div className="m-6 font-semibold">Disagree</div>
              <div className="m-6 font-semibold">Agree</div>
            </div>
            {count === 0 ? (
              <div
                className=" flex justify-center  text-blue-150 font-semibold underline-offset-4"
                onClick={() => {
                  return setcount(1);
                }}
              >
                Add comment
              </div>
            ) : (
              <textarea className=" ml-6  resize-none block p-2.5 w-11/12 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Anything to add?"></textarea>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Questions;
