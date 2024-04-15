import { useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTab/SwitchTabs";

import useFetch from "../../../hooks/useFetch";
import { api_key } from "../../../utils/api";

const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useFetch(`/trending/movie/${endpoint}?${api_key}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "روز" ? "day" : "week");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">پرطرفدار</span>
                <SwitchTabs dataD={["روز","هفته"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default Trending;
