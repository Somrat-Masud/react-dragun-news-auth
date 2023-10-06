
import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navber from "../Shared/Naver/Navber";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import UseCard from "../UseCard/UseCard";

const Home = () => {
    const news = useLoaderData()
    // console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navber></Navber>
           
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                {/*News Contianer */}
                <div className="md:col-span-2">
                   {
                    news.map(aNews => <UseCard key={aNews.id} news={aNews}></UseCard>)
                   }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;