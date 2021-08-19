import React, { useState } from 'react'
import './Home.css'
export const Home = () => {
    const [post, setPost] = useState([])
    const [loading,  setLoading] = useState(true)
    React.useEffect(() => {
        const handleGet = async () => {
            const resp = await fetch('https://jsonplaceholder.typicode.com/photos')
            const data = await resp.json()
            setPost(data)
            setLoading(false)
        }
        handleGet()
    }, [])
    return (

        <div className="wrap">
            <span>{loading && 'Loading....'}</span>
            {post.map(posts => (
            <div className='block'>
                <h5 className=''>{posts.title}</h5>
                <img src={posts.thumbnailUrl} alt="img" />
                </div>
            ))}
        </div>
    )
}
