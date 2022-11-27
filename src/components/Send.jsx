import { useEffect } from "react";

const Send = (props) => {

  

  return (
    <>
      <button type="button" disabled={props.send} className="flex bg-blue-150 hover:bg-green-600 text-white font-bold py-2 w-48 h-14 rounded-md ml-10 disabled:bg-slate-600" 
      onClick={()=>{
        console.log('click:')
      }}
      > 
      <div className="ml-20 m-2"> Send</div>
      </button>
          
    </>
  );
};

export default Send;
