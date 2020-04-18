import React, { useState } from "react";

const Profile = () => {
    const [age, setAge] = useState(21)
    const [name, setName] = useState("Casper")
    return (
        <>
            <h1>Profile</h1>
            <p>My age: {age}</p>
            <button role="button" onClick={() => setAge(age + 1)}>Add Age</button>
            <button role="button" onClick={() => setAge(age - 1)}>Minus Age</button>
            <br/>
            <p>{name}</p>
            <label htmlFor="name">Update</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </>
    )
}

export default Profile;
