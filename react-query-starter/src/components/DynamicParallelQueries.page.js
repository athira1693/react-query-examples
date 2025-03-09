import axios from 'axios'
import React from 'react'
import { useQueries } from 'react-query'


const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}
 

const DynamicParallelQueries = ({heroIds}) => {

  const queryResults = useQueries(
    heroIds.map(id=>{
      return{
        queryFn: ()=> fetchSuperHero(id),
        queryKey:['super-hero',id],
      }
    })
  )
  console.log(queryResults);

  return (
    <div>DynamicParallelQueriesPage</div>
  )
}

export default DynamicParallelQueries