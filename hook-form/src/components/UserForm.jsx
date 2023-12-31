import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const createUser = (e) => {
        e.preventDefault()

        const newUser = {firstName, lastName, email, password, confirmPassword}
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    return (
        <>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value)}/>
                    { firstName.length < 2 ? <p>First Name must be at least 2 characters</p> : null}
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value)}/>
                    { lastName.length < 2 ? <p>Last Name must be at least 2 characters</p> : null}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value)}/>
                    { email.length < 5 ? <p>Email must be at least 5 characters</p> : null}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" value={password} onChange={ (e) => setPassword(e.target.value)}/>
                    { password.length < 8 ? <p>Password must be at least 8 characters</p> : null}
                <div>
                </div>
                    <label>Confirm Password:</label>
                    <input type="text" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value)}/>
                    { confirmPassword != password ? <p>Passwords must match</p> : null}
                </div>
                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </form>

            <div>
                <p>Your Form Data</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </>
    )
}

export default UserForm