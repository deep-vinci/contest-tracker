import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import { useUser } from "./context/UserContext";
import SkeletonTable from "./components/SkeletonTable";

function Home() {
    const { user, setUser, loading } = useUser();

    console.log(loading);
    // console.log("user", user);
    return (
        <div className="w-full max-w-[1400px] mx-auto">
            <Navigation />
            {loading ? (
                <SkeletonTable />
            ) : user === null ? (
                <Hero />
            ) : (
                <Dashboard />
            )}
            {/* <Dashboard /> */}
        </div>
    );
}

export default Home;
