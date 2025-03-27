import { useEffect, useState } from "react";
import axios from "axios";
import Options from "./Options";
import Contest from "./Contest";
import SkeletonContest from "./SkeletonContest";
import like from "../assets/like.svg";

import Upcoming from "./Upcoming";
import Saved from "./Saved";

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
    const [contestType, setContestType] = useState("upcoming");

    return (
        <>
            <div className="w-full h-full mt-5">
                <div class="inline-flex rounded-md shadow-xs" role="group">
                    <button
                        onClick={() => setContestType("upcoming")}
                        type="button"
                        class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                    >
                        Upcoming
                    </button>
                    <button
                        onClick={() => setContestType("saved")}
                        type="button"
                        class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                    >
                        Saved{" "}
                    </button>
                </div>
            </div>
            <div>{contestType == "upcoming" ? <Upcoming /> : <Saved />}</div>
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

{
    /* <div className="w-full h-full mt-5">
<div class="inline-flex rounded-md shadow-xs" role="group">
    <button
        type="button"
        class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
    >
        Upcoming
    </button>
    <button
        type="button"
        class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
    >
        Saved
    </button>
</div> */
}
// {contest == null ? (
//     <SkeletonContest />
// ) : (
//     <div className="w-full">
//         {/* <div className="flex w-full justify-center gap-5">
//             <button className="bg-gray-50 border-slate-300 px-4 py-1 rounded">
//                 upcoming
//             </button>
//             <button className="bg-gray-50 border-slate-300 px-4 py-1 rounded">
//                 saved
//             </button>
//         </div> */}

//         <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
//             {contest.map((e, index) => (
//                 <Contest
//                     name={e.name}
//                     platform={e.platform}
//                     url={e.url}
//                     starts={timeUntill(e.startTimeUnix)}
//                     duration={e.duration}
//                 />
//             ))}
//         </div>
//     </div>
// )}
// </div>
