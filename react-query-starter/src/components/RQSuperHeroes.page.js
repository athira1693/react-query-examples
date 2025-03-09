import axios from 'axios';
import { useQuery } from 'react-query';
import { useSuperHeroesData } from '../hooks/useSuperHeroesData';
import { Link } from 'react-router-dom';


const onSuccess = (data) => {
  console.log("after success",data);
}

const errorFun = () => {
  console.log("after error");
}

export const RQSuperHeroesPage = () => {
  const { data, isLoading, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess,errorFun) // refetch is used to trigger api call on an event

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if(isError){
    return <div>{error.message}</div>
  }
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <button onClick={refetch}>Fetch data</button>
      {/* {data.map((hero)=>{
        return <div key={hero}>{hero}</div>
      })} */}
      {data?.data.map((hero)=>{
        return <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      })}
    </>
  );
};
