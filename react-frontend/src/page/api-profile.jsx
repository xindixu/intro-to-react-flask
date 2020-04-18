import React, { useState, useEffect } from 'react'
import apiFetch from '../lib/api-fetch'

const ApiProfile = () => {
  const [age, setAge] = useState()
  const [name, setName] = useState("")
  const [interest, setInterests] = useState("")
  const [userId, setUserId] = useState("")

  // 1. pull data from the backend. Look into apiFetch implementation for detail
  useEffect(() => {
    apiFetch('/profile', {})
      .then(({ age, interests, name, userId }) => {
        setAge(age)
        setName(name)
        setInterests(interests)
        setUserId(userId)
      })
  }, [])

  const save = () => {
    const newProfile = {
      name,
      age,
      interest,
      userId
    }
    console.log('Payload:' ,newProfile)
    apiFetch('/profile', { method: 'POST', body: newProfile })
      .then((resp) => { console.log('Updated Profile from the server:', resp) })
  }

  return (
    <>
      <h1>Profile</h1>
      <p>User Id: {userId}</p>
      <p>My age: {age}</p>
      <button role="button" onClick={() => setAge(age + 1)}>Add Age</button>
      <button role="button" onClick={() => setAge(age - 1)}>Minus Age</button>
      <br />
      <br />
      <p>My Name: {name}</p>
      <label htmlFor="name">New Name: </label>
      <br />
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button role="button" onClick={save}>Save</button>

    </>
  )
}

export default ApiProfile