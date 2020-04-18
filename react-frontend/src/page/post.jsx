import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
  const { id } = useParams()
  const [comments, setComments] = useState([])
  const [post, setPost] = useState({})
  const [error, setError] = useState(false)


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        }
      })
      .then(resp => setPost(resp))
      .catch((e) => {
        console.error(e)
        setError(true)
      })
  }, [id])


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        }
      })
      .then(resp => setComments(resp))
      .catch((e) => {
        console.error(e)
        setError(true)
      })
  }, [id])


  const Post = () => {
    const { title, body } = post
    return (
      <>
        <h1>{title}</h1>
        <p>{body}</p>
      </>)
  }

  const Comment = ({ name, email, body }) => (
    <>
      <q>{body}</q>
      <p>From: {name}, {email}</p>
    </>)
  return (
    <div>
      {post && <Post />}
      <section><h2>Comments</h2></section>
      {comments ? comments.map(comment => <Comment key={comment.id} {...comment} />
      ) : null
      }
    </div>
  )
}


export default Post
