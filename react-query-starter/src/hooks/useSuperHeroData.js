import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

// const fetchSuperHero = (heroId) => {
//   return axios.get(`http://localhost:4000/superheroes/${heroId}`)
// }

// export const useSuperHeroData = (heroId) => {
//   return useQuery(['super-hero',heroId],()=>fetchSuperHero(heroId))
// }

const fetchSuperHero = ({queryKey}) => {
  const heroId = queryKey[1]
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}
const fetchSuperHeroDetails = ({queryKey}) => {
  const heroId = queryKey[1]
  return axios.get(`http://localhost:4000/superheroesdetails/${heroId}`)
}

export const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient()
  return useQuery(['super-hero',heroId],fetchSuperHeroDetails,{ // react query can automatically pass the array containing query name and param to fetcher function
    initialData: () => { // this shows the initial data fetched from the listing api without showing a loading indicator
      const hero = queryClient.getQueryData('super-heroes')?.data.find(hero=>hero.id === parseInt(heroId))
      if(hero){
        return {data:hero}
      } else {
        return null
      }
    }
  }) 
}