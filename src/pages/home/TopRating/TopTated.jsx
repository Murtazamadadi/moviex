import { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTab/SwitchTabs";

import useFetch from "../../../hooks/useFetch";
import { api_key } from "../../../utils/api";

const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/top_rated?${api_key}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "فلم" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">بشترین امتیاز</span>
                <SwitchTabs dataD={["فلم","سریال"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
        </div>
    );
};

export default TopRated;
