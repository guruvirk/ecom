import { React, useState } from 'react'
import Alert from './Alert'

export default function Login() {

    const [email, setEmail] = useState('')
    const [alert, setAlert] = useState(null)

    const handleSubmit = () => {
        if(!email) {
            showAlert("Email is Required")
        }
    }

    const showAlert = (message) => {
        setAlert(message)
        setTimeout(() => {
            setAlert(null)
        }, 1500)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    return (
        <>
            <Alert alert={alert}></Alert>
            <div className="container">
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" onChange={handleEmailChange} value={email} className="form-control" id="email" placeholder="Enter email" name="email" />
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Login</button>
            </div>
        </>
    )
}
