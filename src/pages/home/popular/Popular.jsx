import { useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTab/SwitchTabs";

import useFetch from "../../../hooks/useFetch";
import { api_key } from "../../../utils/api";

const Trending = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/popular?${api_key}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "فلم" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">معروف</span>
                <SwitchTabs dataD={["فلم","سریال"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default Trending;
