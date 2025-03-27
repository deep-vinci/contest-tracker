import axios from "axios";
import like from "../assets/like.svg";
function Contest({ platform, name, duration, url, starts }) {
    async function saveData(key) {
        //save
    }

    return (
        <div
            key={url}
            className="text-gray-900 bg-white border border-gray-200 rounded-xl p-5"
        >
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
                <div
                    onClick={() => saveData(url)}
                    className="ml-auto mr-0 flex justify-center items-center"
                >
                    <svg
                        className="size-5 fill-black"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_iconCarrier">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z"
                            ></path>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Contest;
