function Skeletal() {
    return (
        <div className=" bg-gray-200 animate-pulse h-30 rounded-xl p-5">
            <div className="flex flex-row">
                <div className=" font-semibold text-xl"></div>
                <div className="mr-0 ml-auto bg-green-200 text-green-900 p-1 rounded text-sm"></div>
            </div>
            <div className="flex flex-col mt-1">
                <div></div>
            </div>
            <div className="flex mt-3">
                <a
                    className="text-blue-700 font-normal text-sm mt-3 underline underline-offset-2"
                    href=""
                ></a>
                <div className="ml-auto mr-0 flex justify-center items-center"></div>
            </div>
        </div>
    );
}
// Good Evening Sir, the problem statement mentions that "the ideas provided are just for reference. feel free to refine reimagine or develop entirely new concepts using your own creativity and insights."

// So, does this mean I can choose and work on an entirely different idea instead of the three mentioned problem statements?

// Thank you
// Deepak Jha

function SkeletonContest() {
    return (
        <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[...Array(12)].map((_, i) => (
                <Skeletal key={i} />
            ))}
        </div>
    );
}

export default SkeletonContest;
