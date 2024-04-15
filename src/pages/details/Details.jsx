
import { useParams } from "react-router-dom";
import "./Details.scss";
import DetailsBanner from "./detailsBanner/DetailsBanner";

import useFetch from "../../hooks/useFetch"
import { api_key } from "../../utils/api";
import Cast from "./cast/Cast";
import VideosSection from "./videoSection/VideoSection";
import Similar from "./carousel/Similar";
import Recommendation from "./carousel/Recommend";


const Details = () => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos?${api_key}`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits?${api_key}`
    );

    return (
        <>
        <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
        <Cast data={credits?.cast} loading={creditsLoading}/>
        <VideosSection data={data?.results} loading={loading}/>
        <Similar mediaType={mediaType} id={id}/>
        <Recommendation mediaType={mediaType} id={id}/>
        </>
    );
};

export default Details;
