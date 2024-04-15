import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";
import { api_key } from "../../../utils/api";
// eslint-disable-next-line react/prop-types
const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar?${api_key}`);

    const title = mediaType === "tv" ? "سریال مشابه" : "فلم مشابه";

    return (
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Similar;
