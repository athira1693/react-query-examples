import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes');
  };
  
export const useSuperHeroesData = (onSuccess,errorFun) => {
    return useQuery(  //refetch is used to fetch on user events. 
        'super-heroes',
        fetchSuperHeroes,
        {
          // cacheTime:5000, // default cache is 5 mins
          staleTime:10000, // to prevent refetching for 30 secs. default is 0. Query is refetched only after the staleTime, even if user comes back to the page.
          refetchOnMount:true, // default is true.
          refetchOnWindowFocus:true, // default is true. Whenever user  returns to the window, data is refetched (after staletime). If 'always' works irrespective of stale
          refetchInterval:false, // default is false. Used for polling, which is to re-fetch data at given interval. It is paused when window focus lost.
          refetchIntervalInBackground: false, //Even if window loses focus, data fetching happens,
          enabled: true, // If false informs not to fire get req on mount 
          onSuccess,
          onError: errorFun,
        //   select: (response)=>{
        //     return response.data.map(superhero=>superhero.name) // select is used for data transformation
        //   }
        }
      );
}
