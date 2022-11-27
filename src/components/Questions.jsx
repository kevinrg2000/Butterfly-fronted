import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const Questions = (props) => {
  const [questions, setQuestions] = useState({});
  const [count, setcount] = useState(0);
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);
  const [count3, setcount3] = useState(0);
  const [count4, setcount4] = useState(0);
  const [framework, setframework] = useState(0);
  const [framework1, setframework1] = useState(0);
  const [framework2, setframework2] = useState(0);
  const [framework3, setframework3] = useState(0);
  const [framework4, setframework4] = useState(0);
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


  useEffect(() => {
    
    if (framework != 0 & framework1 != 0 & framework2 != 0 & framework3 != 0 & framework4 != 0) {
      props.sendForm(false)
    }
    console.log('framework:',framework);
     console.log('framework1:',framework1);
     console.log('framework2:',framework2);
     console.log('framework3:',framework3);
     console.log('framework4:',framework4);
    
    
  }, [framework, framework1, framework2, framework3, framework4]);




  const fromControl= e =>{
    
  }
  const frameworkControl= e =>{
    setframework(e.target.value)
    fromControl()
    setcount(1)
    
  }
  const frameworkControl1= e =>{
    setframework1(e.target.value)
    fromControl()
    setcount1(1)
  }
  const frameworkControl2= e =>{
    setframework2(e.target.value)
    fromControl()
    setcount2(1)
  }
  const frameworkControl3= e =>{
    setframework3(e.target.value)
    fromControl()
    setcount3(1)
  }
  const frameworkControl4= e =>{
    setframework4(e.target.value)
    fromControl()
    setcount4(1)
  }

  return (
    <>
      {
          <div className="bg-white w-100 h-80 ml-10 mt-10 mb-5 rounded">
            <div className="ml-4 pt-2 text-xs font-extralight">
              {questions[0]?.questionNumber} of {5}
            </div>

            <div className=" ml-4 mt-2 scroll-m-10 text-sm  font-semibold text-teal-350">
              Roles and Responsibilities
            </div>
            <div className=" ml-4 mt-6  text-2xl  font-semibold text-blue-550 text-left">
              {questions[0]?.description}
            </div>
            <div className="rating gap-1 ml-10 mt-4">
              <input onChange={frameworkControl} checked={framework ==0? true:false} id="0" value="0" type="radio" name="rating-10" className="mask mask-star-2 bg-red-400 ml-6" />
              <input onChange={frameworkControl} checked={framework ==1? true:false} id="1" value="1" type="radio" name="rating-10" className="mask mask-star-2 bg-red-400 ml-6" />
              <input onChange={frameworkControl} checked={framework ==2? true:false} id="2" value="2" type="radio" name="rating-10" className="mask mask-star-2 bg-orange-400 ml-6"/>
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
              <div className="m-4 font-semibold">Disagree</div>
              <div className="m-4 font-semibold">Agree</div>
            </div>
            {count === 0 ? (
              <div
                className=" flex justify-center mb-5 text-blue-150 font-semibold underline-offset-4"
                onClick={() => {
                   setcount(1);
                }}
              >
                Add comment
              </div>
            ) : (
              <textarea className=" ml-6 mb-5 resize-none block p-2.5 w-11/12 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Anything to add?"></textarea>
            )}
          </div>

      }
      {
          <div className="bg-white w-100 h-80 ml-10 mt-10 mb-5 rounded">
            <div className="ml-4 pt-2 text-xs font-extralight">
              {questions[1]?.questionNumber} of {5}
            </div>

            <div className=" ml-4 mt-2 scroll-m-10 text-sm  font-semibold text-teal-350">
              Roles and Responsibilities
            </div>
            <div className=" ml-4 mt-6  text-2xl  font-semibold text-blue-550 text-left">
              {questions[1]?.description}
            </div>
            
            <div className="rating gap-1 ml-10 mt-4">
              <input onChange={frameworkControl1} checked={framework1 ==0? true:false} id="0" value="0" type="radio" name="rating-101" className="mask mask-star-2 bg-red-400 ml-6" />
              <input onChange={frameworkControl1} checked={framework1 ==1? true:false} id="1" value="1" type="radio" name="rating-101" className="mask mask-star-2 bg-red-400 ml-6" />
              <input onChange={frameworkControl1} checked={framework1 ==2? true:false} id="2" value="2" type="radio" name="rating-101" className="mask mask-star-2 bg-orange-400 ml-6"/>
              <input onChange={frameworkControl1} checked={framework1 ==3? true:false} id="3" value="3" type="radio" name="rating-101" className="mask mask-star-2 bg-orange-400 ml-6"/>
              <input onChange={frameworkControl1} checked={framework1 ==4? true:false} id="4" value="4" type="radio" name="rating-101" className="mask mask-star-2 bg-yellow-400 ml-6"/>
              <input onChange={frameworkControl1} checked={framework1 ==5? true:false} id="5" value="5" type="radio" name="rating-101" className="mask mask-star-2 bg-yellow-400 ml-6"/>
              <input onChange={frameworkControl1} checked={framework1 ==6? true:false} id="6" value="6" type="radio" name="rating-101" className="mask mask-star-2 bg-lime-400 ml-6"/>
              <input onChange={frameworkControl1} checked={framework1 ==7? true:false} id="7" value="7" type="radio" name="rating-101" className="mask mask-star-2 bg-lime-400 ml-6"/>
              <input onChange={frameworkControl1} checked={framework1 ==8? true:false} id="8" value="8" type="radio" name="rating-101" className="mask mask-star-2 bg-green-400 ml-6"/>
              <input onChange={frameworkControl1} checked={framework1 ==9? true:false} id="9" value="9" type="radio" name="rating-101" className="mask mask-star-2 bg-green-400 ml-6"/>
              <input onChange={frameworkControl1} checked={framework1 ==10? true:false} id="10" value="10" type="radio" name="rating-101" className="mask mask-star-2 bg-green-400 ml-6"/>
            </div>

            <div className="flex flex-row justify-between">
              <div className="m-4 font-semibold">Disagree</div>
              <div className="m-4 font-semibold">Agree</div>
            </div>
            {count1 === 0 ? (
              <div
                className=" flex justify-center mb-5 text-blue-150 font-semibold underline-offset-4"
                onClick={() => {
                   setcount1(1);
                }}
              >
                Add comment
              </div>
            ) : (
              <textarea className=" ml-6 mb-5 resize-none block p-2.5 w-11/12 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Anything to add?"></textarea>
            )}
          </div>

      }
      {
          <div className="bg-white w-100 h-80 ml-10 mt-10 mb-5 rounded">
            <div className="ml-4 pt-2 text-xs font-extralight">
              {questions[2]?.questionNumber} of {5}
            </div>

            <div className=" ml-4 mt-2 scroll-m-10 text-sm  font-semibold text-teal-350">
              Roles and Responsibilities
            </div>
            <div className=" ml-4 mt-6  text-2xl  font-semibold text-blue-550 text-left">
              {questions[2]?.description}
            </div>
            
            <div className="rating gap-1 ml-10 mt-4">
              <input onChange={frameworkControl2} checked={framework2 ==0? true:false} id="0" value="0" type="radio" name="rating-102" className="mask mask-star-2 bg-red-400 ml-6" />
              <input onChange={frameworkControl2} checked={framework2 ==1? true:false} id="1" value="1" type="radio" name="rating-102" className="mask mask-star-2 bg-red-400 ml-6" />
              <input onChange={frameworkControl2} checked={framework2 ==2? true:false} id="2" value="2" type="radio" name="rating-102" className="mask mask-star-2 bg-orange-400 ml-6"/>
              <input onChange={frameworkControl2} checked={framework2 ==3? true:false} id="3" value="3" type="radio" name="rating-102" className="mask mask-star-2 bg-orange-400 ml-6"/>
              <input onChange={frameworkControl2} checked={framework2 ==4? true:false} id="4" value="4" type="radio" name="rating-102" className="mask mask-star-2 bg-yellow-400 ml-6"/>
              <input onChange={frameworkControl2} checked={framework2 ==5? true:false} id="5" value="5" type="radio" name="rating-102" className="mask mask-star-2 bg-yellow-400 ml-6"/>
              <input onChange={frameworkControl2} checked={framework2 ==6? true:false} id="6" value="6" type="radio" name="rating-102" className="mask mask-star-2 bg-lime-400 ml-6"/>
              <input onChange={frameworkControl2} checked={framework2 ==7? true:false} id="7" value="7" type="radio" name="rating-102" className="mask mask-star-2 bg-lime-400 ml-6"/>
              <input onChange={frameworkControl2} checked={framework2 ==8? true:false} id="8" value="8" type="radio" name="rating-102" className="mask mask-star-2 bg-green-400 ml-6"/>
              <input onChange={frameworkControl2} checked={framework2 ==9? true:false} id="9" value="9" type="radio" name="rating-102" className="mask mask-star-2 bg-green-400 ml-6"/>
              <input onChange={frameworkControl2} checked={framework2 ==10? true:false} id="10" value="10" type="radio" name="rating-102" className="mask mask-star-2 bg-green-400 ml-6"/>
            </div>

            <div className="flex flex-row justify-between">
              <div className="m-6 font-semibold">Disagree</div>
              <div className="m-6 font-semibold">Agree</div>
            </div>
            {count2 === 0 ? (
              <div
                className=" flex justify-center mb-5 text-blue-150 font-semibold underline-offset-4"
                onClick={() => {
                   setcount2(1);
                }}
              >
                Add comment
              </div>
            ) : (
              <textarea className=" ml-6 mb-5 resize-none block p-2.5 w-11/12 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Anything to add?"></textarea>
            )}
          </div>

      }
      {
          <div className="bg-white w-100 h-80 ml-10 mt-10 mb-5 rounded">
            <div className="ml-4 pt-2 text-xs font-extralight">
              {questions[3]?.questionNumber} of {5}
            </div>

            <div className=" ml-4 mt-2 scroll-m-10 text-sm  font-semibold text-teal-350">
              Roles and Responsibilities
            </div>
            <div className=" ml-4 mt-6  text-2xl  font-semibold text-blue-550 text-left">
              {questions[3]?.description}
            </div>
            
            <div className="rating gap-1 ml-10 mt-4">
              <input onChange={frameworkControl3} checked={framework3 ==0? true:false} id="0" value="0" type="radio" name="rating-103" className="mask mask-star-2 bg-red-400 ml-6" />
              <input onChange={frameworkControl3} checked={framework3 ==1? true:false} id="1" value="1" type="radio" name="rating-103" className="mask mask-star-2 bg-red-400 ml-6" />
              <input onChange={frameworkControl3} checked={framework3 ==2? true:false} id="2" value="2" type="radio" name="rating-103" className="mask mask-star-2 bg-orange-400 ml-6"/>
              <input onChange={frameworkControl3} checked={framework3 ==3? true:false} id="3" value="3" type="radio" name="rating-103" className="mask mask-star-2 bg-orange-400 ml-6"/>
              <input onChange={frameworkControl3} checked={framework3 ==4? true:false} id="4" value="4" type="radio" name="rating-103" className="mask mask-star-2 bg-yellow-400 ml-6"/>
              <input onChange={frameworkControl3} checked={framework3 ==5? true:false} id="5" value="5" type="radio" name="rating-103" className="mask mask-star-2 bg-yellow-400 ml-6"/>
              <input onChange={frameworkControl3} checked={framework3 ==6? true:false} id="6" value="6" type="radio" name="rating-103" className="mask mask-star-2 bg-lime-400 ml-6"/>
              <input onChange={frameworkControl3} checked={framework3 ==7? true:false} id="7" value="7" type="radio" name="rating-103" className="mask mask-star-2 bg-lime-400 ml-6"/>
              <input onChange={frameworkControl3} checked={framework3 ==8? true:false} id="8" value="8" type="radio" name="rating-103" className="mask mask-star-2 bg-green-400 ml-6"/>
              <input onChange={frameworkControl3} checked={framework3 ==9? true:false} id="9" value="9" type="radio" name="rating-103" className="mask mask-star-2 bg-green-400 ml-6"/>
              <input onChange={frameworkControl3} checked={framework3 ==10? true:false} id="10" value="10" type="radio" name="rating-103" className="mask mask-star-2 bg-green-400 ml-6"/>
            </div>

            <div className="flex flex-row justify-between">
              <div className="m-4 font-semibold">Disagree</div>
              <div className="m-4 font-semibold">Agree</div>
            </div>
            {count3 === 0 ? (
              <div
                className=" flex justify-center mb-5 text-blue-150 font-semibold underline-offset-4"
                onClick={() => {
                   setcount3(1);
                }}
              >
                Add comment
              </div>
            ) : (
              <textarea className=" ml-6 mb-5 resize-none flex p-2.5 w-11/12 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Anything to add?"></textarea>
            )}
          </div>

      }
      {
          <div className="bg-white w-100 h-80 ml-10 mt-10 mb-5 rounded">
            <div className="ml-4 pt-2 text-xs font-extralight">
              {questions[4]?.questionNumber} of {5}
            </div>

            <div className=" ml-4 mt-2 scroll-m-10 text-sm  font-semibold text-teal-350">
              Roles and Responsibilities
            </div>
            <div className=" ml-4 mt-6  text-2xl  font-semibold text-blue-550 text-left">
              {questions[4]?.description}
            </div>
            
            <div className="rating gap-1 ml-10 mt-4">
              <input onChange={frameworkControl4} checked={framework4 ==0? true:false} id="0" value="0" type="radio" name="rating-104" className="mask mask-star-2 bg-red-400 ml-6" />
              <input onChange={frameworkControl4} checked={framework4 ==1? true:false} id="1" value="1" type="radio" name="rating-104" className="mask mask-star-2 bg-red-400 ml-6" />
              <input onChange={frameworkControl4} checked={framework4 ==2? true:false} id="2" value="2" type="radio" name="rating-104" className="mask mask-star-2 bg-orange-400 ml-6"/>
              <input onChange={frameworkControl4} checked={framework4 ==3? true:false} id="3" value="3" type="radio" name="rating-104" className="mask mask-star-2 bg-orange-400 ml-6"/>
              <input onChange={frameworkControl4} checked={framework4 ==4? true:false} id="4" value="4" type="radio" name="rating-104" className="mask mask-star-2 bg-yellow-400 ml-6"/>
              <input onChange={frameworkControl4} checked={framework4 ==5? true:false} id="5" value="5" type="radio" name="rating-104" className="mask mask-star-2 bg-yellow-400 ml-6"/>
              <input onChange={frameworkControl4} checked={framework4 ==6? true:false} id="6" value="6" type="radio" name="rating-104" className="mask mask-star-2 bg-lime-400 ml-6"/>
              <input onChange={frameworkControl4} checked={framework4 ==7? true:false} id="7" value="7" type="radio" name="rating-104" className="mask mask-star-2 bg-lime-400 ml-6"/>
              <input onChange={frameworkControl4} checked={framework4 ==8? true:false} id="8" value="8" type="radio" name="rating-104" className="mask mask-star-2 bg-green-400 ml-6"/>
              <input onChange={frameworkControl4} checked={framework4 ==9? true:false} id="9" value="9" type="radio" name="rating-104" className="mask mask-star-2 bg-green-400 ml-6"/>
              <input onChange={frameworkControl4} checked={framework4 ==10? true:false} id="10" value="10" type="radio" name="rating-104" className="mask mask-star-2 bg-green-400 ml-6"/>
            </div>

            <div className="flex flex-row justify-between">
              <div className="m-6 font-semibold">Disagree</div>
              <div className="m-6 font-semibold">Agree</div>
            </div>
            {count4 === 0 ? (
              <div
                className=" flex justify-center mb-5 text-blue-150 font-semibold underline-offset-4"
                onClick={() => {
                   setcount4(1);
                }}
              >
                Add comment
              </div>
            ) : (
              <textarea className=" ml-6 mb-5 resize-none block p-2.5 w-11/12 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Anything to add?"></textarea>
            )}
          </div>

      }
    </>
  );
};

export default Questions;
