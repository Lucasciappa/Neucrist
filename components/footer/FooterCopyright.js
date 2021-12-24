
const Copyright = () => {
    return (
        <>
        <hr className="my-6 border-gray-200" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-200 font-semibold py-1">
              Copyright © {new Date().getFullYear()}{" "}LyC{" "}Creative
            </div>
          </div>
        </div>
        </>
    );
};


export default Copyright;