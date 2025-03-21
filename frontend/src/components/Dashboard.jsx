import { useEffect, useState } from "react";
import axios from "axios";
import Options from "./Options";
import Contest from "./Contest";
import SkeletonContest from "./SkeletonContest";
import like from "../assets/like.svg";
function timeUntill(time) {
    // let date = new Date().now();
    console.log();
    // const hours = Math.floor( / 3600);
    // const minutes = Math.floor((seconds % 3600) / 60);
    // console.log();
    const hours = Math.floor((time - Math.floor(Date.now() / 1000)) / 3600);
    let timeFormat;
    if (hours > 170) {
        timeFormat = `${Math.floor(hours / 168)} weeks`; // 168 hours in a week
    } else if (hours > 49) {
        timeFormat = `${Math.floor(hours / 24)} days`; // Convert to days
    } else {
        timeFormat = `${hours} hours`; // Default case
    }
    return `In ${timeFormat}`;
}

function Dashboard() {
    const [contest, setContest] = useState(null);
    let contestList;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:4000/contests",
                    {
                        withCredentials: true,
                    }
                );
                console.log("demo", response.data.data);
                setContest(response.data.data);

                // contestList = response.data.data.map((e) => {
                //     <div>{e}</div>;
                // });
            } catch (error) {
                console.error("err", error);
            }
        };

        fetchData();
    }, []);

    // contest.map((e) => {
    //     console.log(e);
    //     return e;
    // });
    // {"platform":"CodeChef","name":"Starters 178 (Rated till 6 star)","code":"START178","startTimeUnix":1742394600,"startTime":"2025-03-19T14:30:00.000Z","endTime":"2025-03-19T16:30:00.000Z","duration":"2 hours 0 minutes","url":"https://www.codechef.com/START178"}

    return (
        // <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">

        <>
            <div className="w-full h-full mt-5">
                {contest == null ? (
                    <SkeletonContest />
                ) : (
                    <div className="w-full">
                        <div className="flex w-full justify-center gap-5">
                            <button className="bg-gray-50 border-slate-300 px-4 py-1 rounded">
                                upcoming
                            </button>
                            <button className="bg-gray-50 border-slate-300 px-4 py-1 rounded">
                                saved
                            </button>
                        </div>
                        <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {contest.map((e, index) => (
                                <Contest
                                    name={e.name}
                                    platform={e.platform}
                                    url={e.url}
                                    starts={timeUntill(e.startTimeUnix)}
                                    duration={e.duration}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Dashboard;

{
    /* <tr className="border-b-1 border-slate-200">
<td className="px-4">
    <img src={like} alt="" />
</td>
<td className="p-1 pr-10">{e.platform}</td>
<td className="p-1 pr-10">{e.name}</td>
<td className="p-1 pr-10">{e.duration}</td>
<td className="p-1 pr-10">
    {timeUntill(e.startTimeUnix)}
</td>
<td className="p-1 pr-10">
    <a className="text-blue-500" href={e.url}>
        Link
    </a>
</td>
</tr> */
}
