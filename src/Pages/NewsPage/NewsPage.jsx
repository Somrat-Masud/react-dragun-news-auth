import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navber from "../Shared/Naver/Navber";

const NewsPage = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-2xl">news detals</h2>
                    <p>{id}</p>
                </div>
                    <div>
                        <RightSideNav></RightSideNav>
                    </div>
            </div>
        </div>
    );
};

export default NewsPage;