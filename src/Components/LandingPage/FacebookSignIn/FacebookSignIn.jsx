import FacebookLogin from '@greatsumini/react-facebook-login';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginRedux } from '../../../app/authSlice';
import { toastsFunctions } from '../../../helpers/toastsFunctions';
import { apiService } from '../../../Service/ApiService';

export default function FacebookSignIn() {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const smallScreen = window.matchMedia("(max-width: 1000px)").matches;
    const [notComputer, setNotComputer] = useState(false)

    useEffect(() => {
        const isMobile = () => {
            const userAgent = navigator.userAgent.toLowerCase();
            return /android|webos|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent);
        }

        setNotComputer(isMobile());
    }, [])

    async function userRegister(user) {
        try {
            // const res = await apiService.googleAuth(user,notComputer);
            const res = await apiService.googleAuth(user);
            if (res.status === 200) {
                dispatch(loginRedux(res.data))
                if (!notComputer) {
                    toastsFunctions.toastInfo("Head to the settings to choose a different language");
                }
                Navigate("/");
            }
        } catch (e) {
            toastsFunctions.toastError(e.response.data);
        }
    }

    async function onSuccessFunction(response) {
        const fields = 'id,name,email';
        fetch(`https://graph.facebook.com/me?fields=${fields}&access_token=${response.accessToken}`)
            .then(response => response.json())
            .then(data => {
                const fullName = data.name;
                const names = fullName.split(' ');
                const firstName = names[0];
                const lastName = names[names.length - 1];

                const facebookUser = {
                    firstName: firstName,
                    lastName: lastName,
                    email: data.email,
                    language: 'en',
                }
                userRegister(facebookUser)
            })
            .catch(error => {
                console.error(error);
            });
    }


    return (
        <FacebookLogin
            appId="617862433513643"
            style={{
                backgroundColor: '#4267b2',
                color: '#fff',
                fontSize: '14px',
                border: 'none',
                borderRadius: '4px',
                width: smallScreen ? '190px' : '300px',
                margin: 0,
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onSuccess={onSuccessFunction}
            onFail={(error) => {
                console.log('Login Failed!', error);
            }}
        />
    )
}
