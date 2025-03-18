import { useEffect, useState } from "react";
import axios from "axios";
import Options from "./Options";

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
    const [contest, setContest] = useState([
        {
            platform: "CodeChef",
            name: "Starters 178 (Rated till 6 star)",
            code: "START178",
            startTimeUnix: 1742394600,
            startTime: "2025-03-19T14:30:00.000Z",
            endTime: "2025-03-19T16:30:00.000Z",
            duration: "2 hours 0 minutes",
            url: "https://www.codechef.com/START178",
        },
        {
            platform: "Codeforces",
            name: "Codeforces Round (Div. 2)",
            startTimeUnix: 1742654100,
            startTime: "2025-03-22T14:35:00.000Z",
            durationSeconds: 7200,
            duration: "2 hours 0 minutes",
            url: "https://codeforces.com/contests/2085",
        },
        {
            platform: "LeetCode",
            name: "Weekly Contest 442",
            startTimeUnix: 1742697000,
            startTime: "2025-03-23T02:30:00.000Z",
            durationSeconds: 5400,
            duration: "1 hours 30 minutes",
            url: "https://leetcode.com/contest/weekly-contest-442",
        },
        {
            platform: "Codeforces",
            name: "Codeforces Round (Div. 1)",
            startTimeUnix: 1742708100,
            startTime: "2025-03-23T05:35:00.000Z",
            durationSeconds: 9000,
            duration: "2 hours 30 minutes",
            url: "https://codeforces.com/contests/2089",
        },
        {
            platform: "Codeforces",
            name: "Codeforces Round (Div. 2)",
            startTimeUnix: 1742708100,
            startTime: "2025-03-23T05:35:00.000Z",
            durationSeconds: 9000,
            duration: "2 hours 30 minutes",
            url: "https://codeforces.com/contests/2090",
        },
        {
            platform: "Codeforces",
            name: "Codeforces Round (Div. 3)",
            startTimeUnix: 1742913300,
            startTime: "2025-03-25T14:35:00.000Z",
            durationSeconds: 8100,
            duration: "2 hours 15 minutes",
            url: "https://codeforces.com/contests/2091",
        },
        {
            platform: "CodeChef",
            name: "Starters 179",
            code: "START179",
            startTimeUnix: 1742999400,
            startTime: "2025-03-26T14:30:00.000Z",
            endTime: "2025-03-26T16:30:00.000Z",
            duration: "2 hours 0 minutes",
            url: "https://www.codechef.com/START179",
        },
        {
            platform: "LeetCode",
            name: "Biweekly Contest 153",
            startTimeUnix: 1743258600,
            startTime: "2025-03-29T14:30:00.000Z",
            durationSeconds: 5400,
            duration: "1 hours 30 minutes",
            url: "https://leetcode.com/contest/biweekly-contest-153",
        },
        {
            platform: "Codeforces",
            name: "Kotlin Heroes: Practice 12",
            startTimeUnix: 1743428100,
            startTime: "2025-03-31T13:35:00.000Z",
            durationSeconds: 604800,
            duration: "168 hours 0 minutes",
            url: "https://codeforces.com/contests/2088",
        },
        {
            platform: "Codeforces",
            name: "Educational Codeforces Round 177 (Rated for Div. 2)",
            startTimeUnix: 1743690900,
            startTime: "2025-04-03T14:35:00.000Z",
            durationSeconds: 7200,
            duration: "2 hours 0 minutes",
            url: "https://codeforces.com/contests/2086",
        },
        {
            platform: "Codeforces",
            name: "Codeforces Round (Div. 1 + Div. 2)",
            startTimeUnix: 1743863700,
            startTime: "2025-04-05T14:35:00.000Z",
            durationSeconds: 10800,
            duration: "3 hours 0 minutes",
            url: "https://codeforces.com/contests/2084",
        },
        {
            platform: "Codeforces",
            name: "Kotlin Heroes: Episode 12",
            startTimeUnix: 1744036500,
            startTime: "2025-04-07T14:35:00.000Z",
            durationSeconds: 9000,
            duration: "2 hours 30 minutes",
            url: "https://codeforces.com/contests/2087",
        },
    ]);
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

        // fetchData();
    }, []);

    // contest.map((e) => {
    //     console.log(e);
    //     return e;
    // });
    // {"platform":"CodeChef","name":"Starters 178 (Rated till 6 star)","code":"START178","startTimeUnix":1742394600,"startTime":"2025-03-19T14:30:00.000Z","endTime":"2025-03-19T16:30:00.000Z","duration":"2 hours 0 minutes","url":"https://www.codechef.com/START178"}

    return (
        <div className="w-full flex justify-center">
            <table className="table ">
                <th className="text-left p-1">Save</th>
                <th className="text-left p-1">Platform</th>
                <th className="text-left p-1">Name</th>
                <th className="text-left p-1">Duration</th>
                <th className="text-left p-1">Starts</th>
                <th className="text-left p-1">URL</th>
                <tbody>
                    {contest == null
                        ? "loading..."
                        : contest.map((e, index) => (
                              //   <div key={index}>{e.platform}</div>
                              <tr className="border-b-1 border-slate-200">
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
                              </tr>
                          ))}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;
