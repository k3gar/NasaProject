import { useQuery } from '@tanstack/react-query';
import { Oval } from 'react-loader-spinner';
import { apiRequest } from '../services/apiRequest';
export const NasaCard = ({ lat, long, year, name }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [lat, long, year],
    queryFn: () => apiRequest(lat, long, year),
  });
  //usando react query, puedo saber si la data ya está lista o no y en base a eso colocar o quitar el spinner
  if (isLoading)
    return (
      <Oval
        visible={true}
        height="80"
        width="80"
        color="white"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  if (error) return <div>Critical Failure</div>;
  //cambié todos los let innecesarios por const
  const errorImage =
    'https://www.mdzol.com/u/fotografias/m/2020/8/6/f850x638-944869_1022358_5050.png';
  return (
    /*componente que ayuda a detectar cual es la carta con el año mas reciente, ya que solo hasta el 2021 admite la API. En caso de no encontrar
     una imagen por cualquier razón, pues colocara una de respaldo de un perrito */
    <div className={'search-result_data ' + (year === 2021 ? 'actual' : null)}>
      {year === 2021 ? <h4>actual view</h4> : ''}
      <h4>{name}</h4>
      <p>{data.date ? data.date : 'Image from  ' + year + ' not available'}</p>
      <img src={data.url ? data.url : errorImage} alt="Imagen de Mapa" />
    </div>
  );
};
