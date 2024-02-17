import useFetchImage from "../hooks/useFetchImage";
import Spinner from "./Spinner";

const MapImage = ({ config }) => {
  const { imageData, isLoading } = useFetchImage(config.date);

  if (isLoading) return <Spinner/>;

  return (
    <div id={`${config.isActualView ? 'myAnswer' : null}`} className="search-result_data">
      {config.isActualView ? (<h4>Actual View</h4>) : null}
      <p>{imageData?.date || ''}</p>
      <img src={imageData?.url || ''} alt="Imagen de Mapa" />
    </div>
  );
};

export default MapImage;
