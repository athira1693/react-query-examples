import React from 'react'
import { useSuperHeroData } from '../hooks/useSuperHeroData'
import { useParams } from 'react-router-dom'

const RQSuperHeroPage = () => {
    const {heroId} = useParams()
    const {data,isLoading,isError,error} = useSuperHeroData(heroId)
 
    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <div>{error.message}</div>
    }

    return(
        <div>
            {data?.data.name} - {data?.data.country}
        </div>
    )

}

export default RQSuperHeroPage