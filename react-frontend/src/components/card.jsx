import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const PostCard = ({userId, id, title, body}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <q>{userId}</q>
      <Link to={`/post/${id}`}>Detail</Link>
    </div>
  )
}

{/*
const PostCard is the contructor function of the 
Card component. It shows that 4 props are inputted:
userID, id, title, and body.

Go To posts.jsx next

*/}

PostCard.propTypes = {
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default PostCard
