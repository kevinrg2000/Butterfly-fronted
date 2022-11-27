const AnythingToAd = ({}) => {
  return (
    <>
      <div className="bg-blue-650 w-100 h-60 ml-10 mt-10 mb-10 rounded flex flex-col">
        <div className="w-full">
          <h1 className="text-white font-bold ml-10 m-6 text-2xl flex">
            Anything to add? (Optional)
          </h1>
        </div>
        <div className="rounded-full bg-blue-750 w-24 h-24 text-base self-end absolute mt-5 mr-6 text-indigo-50">
        <div className="indent-1 text-center mt-4 text-sm font-bold">Extra feedback helps</div>
        </div>
        <div>
          <textarea
            className=" ml-14 my-16 resize-none block p-2.5 w-4/5 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Express yourself freely and safely. This will always remain anonymus"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default AnythingToAd;
