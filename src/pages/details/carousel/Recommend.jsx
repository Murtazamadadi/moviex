import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import { api_key } from "../../../utils/api";

// eslint-disable-next-line react/prop-types
const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations?${api_key}`
    );

    return (
        <Carousel
            title="پیشنهاد ما"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;
