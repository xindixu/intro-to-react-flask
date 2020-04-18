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

PostCard.propTypes = {
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default PostCard
