import { useEffect, useState } from "react";

const UseToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const userData = { email: email }
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(userData)
            })
                .then(res => res.json())
                .then(data =>{
                    localStorage.setItem('token',data.token);
                    setToken(data.token)
                })
        }
    }, [user])
    return [token]
};

export default UseToken;