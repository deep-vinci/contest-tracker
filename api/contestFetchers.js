// Helper function to fetch contests from different platforms
import axios from "axios";

export async function fetchCodeforcesContests() {
    try {
        const response = await axios.get(
            "https://codeforces.com/api/contest.list"
        );
        if (response.data.status !== "OK")
            throw new Error("Failed to fetch Codeforces contests");
        return response.data.result
            .filter((contest) => contest.phase === "BEFORE")
            .map((contest) => ({
                platform: "Codeforces",
                name: contest.name,
                startTimeUnix: contest.startTimeSeconds,
                startTime: new Date(
                    contest.startTimeSeconds * 1000
                ).toISOString(),
                duration: `${Math.floor(
                    contest.durationSeconds / 3600
                )} hours ${(contest.durationSeconds % 3600) / 60} minutes`,
                url: `https://codeforces.com/contests/${contest.id}`,
            }));
    } catch (error) {
        console.error("Error fetching Codeforces contests:", error.message);
        return [];
    }
}

export async function fetchLeetcodeContests() {
    try {
        const graphqlQuery = {
            query: `query { allContests { title startTime duration titleSlug } }`,
        };
        const response = await axios.post(
            "https://leetcode.com/graphql",
            graphqlQuery,
            { headers: { "Content-Type": "application/json" } }
        );
        return response.data.data.allContests
            .filter((contest) => contest.startTime * 1000 > Date.now())
            .map((contest) => ({
                platform: "LeetCode",
                name: contest.title,
                startTimeUnix: contest.startTime,
                startTime: new Date(contest.startTime * 1000).toISOString(),
                duration: `${Math.floor(contest.duration / 3600)} hours ${
                    (contest.duration % 3600) / 60
                } minutes`,
                url: `https://leetcode.com/contest/${contest.titleSlug}`,
            }));
    } catch (error) {
        console.error("Error fetching LeetCode contests:", error.message);
        return [];
    }
}

export function calculateDuration(startDate, endDate) {
    const durationSeconds = Math.floor(
        (new Date(endDate) - new Date(startDate)) / 1000
    );
    return `${Math.floor(durationSeconds / 3600)} hours ${
        (durationSeconds % 3600) / 60
    } minutes`;
}
