import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from '../API';

//Components
import Button from './Button';
//Styles
import { Wrapper } from './Login.styles';
//Context
import{ Context } from '../context';
import { useState } from "react/cjs/react.development";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [user, setUser] = useContext(Context);
    const navigate = useNavigate();


    const handleSubmit = async () => {
            setError(false)
            try{
                const requestToken = await API.getRequestToken();
                const sessionId = await API.authenticate(
                    requestToken,
                    username,
                    password
                );

                console.log(sessionId)

                    setUser({ sessionId: sessionId.session_id, username})
                    
                    navigate('/');

            } catch (error) {
                setError(true);
            }
    };

    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if(name === 'username') setUsername(value);
        if(name === 'password') setPassword(value);
    };

    return (
        <Wrapper>
            {error && <div className="error">there was an error!</div>}
            <label>UserName:</label>
            <input
            type='text'
            value="state value"
            name='username'
            />
            <input
                type='password'
                value='state value'
                name='password'
                onChange={handleInput}
                />
                <button callback={handleSubmit}>login</button>
            </Wrapper>
    )
}
export default Login;
