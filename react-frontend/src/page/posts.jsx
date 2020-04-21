import React, { useEffect, useState } from 'react'
import Card from '../components/card'

const Posts = props => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(false)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        }
      })
      .then(resp => setPosts(resp))
      .catch((e) => {
        console.error(e)
        setError(true)
      })
  }, [])
  return (
    <ul>
      {/* 1. let's show a list of posts */}
      {/* {posts.length ? posts.map(({ id, title }) => <li key={id}>{title}</li>) : null} */}
      {/* 2. use custom component to render posts nicely */}
      {posts.length ? posts.map((post) => <Card key={post.id} {...post} />) : null}
    </ul>
  )
}

{/*
The <Card> tag is the component from before, but multiple instances are being created in line 25,
but each instance has data from a different post.

Go to the posts page on the website to see how all the posts show on the page.

*/}

export default Posts
