import { useState } from 'react';
import {useEffect} from 'react'
import { useLoaderData } from 'react-router-dom';

function Github () {
    const data = useLoaderData()
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    return (
        <div className="bg-gray-700 text-center text-white text-3xl p-4">Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={100} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}