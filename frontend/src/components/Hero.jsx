import codeforcesPng from "../assets/image1.png";
import leetcodePng from "../assets/image2.png";

function Hero() {
    return (
        <div className="w-full h-150 flex flex-col gap-10 sm:flex-row items-center font-bricolage">
            <div className="px-12">
                <button className="border-1 flex rounded-full items-center px-5 mb-3 shadow-xl shadow-slate-200 hover:bg-black hover:text-white transition">
                    connect with me
                    <svg
                        fill="none"
                        height="16"
                        viewBox="0 0 24 24"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.75 8.75L14.25 12L10.75 15.25"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                        />
                    </svg>
                </button>
                <h1 className="text-6xl pb-8 font-extrabold">
                    Never Miss a Contest <br></br> Again!
                </h1>
                <p className="text-xl">
                    Find and track coding contests from all over the web all in
                    one place.
                </p>
            </div>
            <div className="w-full sm:w-[50%] flex justify-center items-center transform-3d">
                <img
                    className="w-[80%] rounded-2xl shadow-2xl shadow-slate-600 hover:-translate-y-4 transition"
                    src={leetcodePng}
                    alt=""
                />
            </div>
        </div>
    );
}

export default Hero;
