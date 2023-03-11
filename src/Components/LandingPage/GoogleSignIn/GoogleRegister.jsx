import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import './GoogleRegister.css'
import { useDispatch } from 'react-redux';
import { loginRedux } from '../../../app/authSlice';
import jwtDecode from 'jwt-decode';
import { apiService } from '../../../Service/ApiService';
import { useNavigate } from 'react-router-dom';
import { toastsFunctions } from '../../../helpers/toastsFunctions';


const GoogleRegister = () => {
    const smallScreen = window.matchMedia("(max-width: 1000px)").matches;
    const [notComputer, setNotComputer] = useState(false)

    useEffect(() => {
        const isMobile = () => {
            const userAgent = navigator.userAgent.toLowerCase();
            return /android|webos|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent);
        }

        setNotComputer(isMobile());
    }, [])

    const dispatch = useDispatch();
    const Navigate = useNavigate()

    async function userRegister(user) {
        try {
            const res = await apiService.googleAuth(user,notComputer);
            if (res.status === 200) {
                console.log(res);
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

    return (
        <GoogleLogin
            shape={'rectangular'}
            width={smallScreen ? 50 : 300}
            onSuccess={credentialResponse => {
                const details = jwtDecode(credentialResponse.credential);
                const googleUser = {
                    firstName: details.given_name,
                    lastName: details.family_name,
                    email: details.email,
                    language: 'en',
                }
                userRegister(googleUser);
            }}

            onError={() => {
                toastsFunctions.toastError('Register Failed');
            }}
        />
    );
};

export default GoogleRegister;