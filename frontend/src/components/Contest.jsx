import like from "../assets/like.svg";
function Contest({ platform, name, duration, url, starts }) {
    return (
        <div className=" bg-gray-50 border-1 border-slate-300 rounded-xl p-5">
            <div className="flex flex-row">
                <div className=" font-semibold text-xl">{platform}</div>
                <div className="mr-0 ml-auto bg-green-200 text-green-900 p-1 rounded text-sm">
                    {duration}
                </div>
            </div>
            <div className="flex flex-col mt-1">
                <div>{name}</div>
            </div>
            <div className="flex mt-3">
                <a
                    className="text-blue-700 font-normal text-sm mt-3 underline underline-offset-2"
                    href={url}
                >
                    {url}
                </a>
                <div className="ml-auto mr-0 flex justify-center items-center">
                    <img src={like} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Contest;
