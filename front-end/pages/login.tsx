import React, { useState, useEffect } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCardFooter,
    MDBValidation,
    MDBBtn,
    MDBIcon,
    MDBSpinner
} from 'mdb-react-ui-kit';
// import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// import { googleSignIn, login } from '../redux/features/authSlice';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import Link from 'next/link';


const initialState = {
    email: '',
    password: '',
};


const Login = () => {

    const [formValue, setFormValue] = useState(initialState);

    //const { loading, error } = useSelector(state => ({ ...state.auth }));

    const { email, password } = formValue;

    // const dispatch = useDispatch();

    // const navigate = useNavigate();

    // prod -> 394690414160-so4bm60imi3uc3kgqk6b5kiv0b0cd4iq.apps.googleusercontent.com

    const devEnv = process.env.NODE_ENV !== "production";

    const clientId = devEnv
        ? '394690414160-qp153jod9qkbk0tq78f2v0sbeau9fhb3.apps.googleusercontent.com'
        : '394690414160-so4bm60imi3uc3kgqk6b5kiv0b0cd4iq.apps.googleusercontent.com';

    // useEffect(() => {
    //     error && toast.error(error);
    // }, [error]);

    gapi.load("client:auth2", () => {
        gapi.client.init({
            clientId: clientId,
            plugin_name: "travelling",
        });
    });

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     if (email && password) {
    //         // dispatch(login({ formValue, navigate, toast }));
    //     }
    // };

    // const onInputChange = e => {
    //     let { name, value } = e.target;
    //     setFormValue({ ...formValue, [name]: value });
    // };

    // const googleSuccess = res => {
    //     const email = res?.profileObj?.email;
    //     const name = res?.profileObj?.name;
    //     const token = res?.tokenId;
    //     const googleId = res?.googleId;
    //     const result = {
    //         email,
    //         name,
    //         token,
    //         googleId,
    //     };
    //     // dispatch(googleSignIn({ result, navigate, toast }));
    // };

    // const googleFailure = err => {
    //     console.log(err);
    // };

    return (
        <div
            style={{
                margin: 'auto',
                padding: '15px',
                maxWidth: '450px',
                alignContent: 'center',
                marginTop: '120px',
            }}
        >
            <MDBCard alignment='center'>
                <MDBIcon fas icon='user-circle' className='fa-2x' />
                <h5>Sign In</h5>
                <MDBCardBody>
                    <MDBValidation
                        // onSubmit={handleSubmit}
                        noValidate
                        className='row g-3'
                    >
                        <div className='col-md-12'>
                            <MDBInput
                                label='Email'
                                type='email'
                                value={email}
                                name='email'
                                // onChange={onInputChange}
                                required
                            />
                        </div>
                        <div className='col-md-12'>
                            <MDBInput
                                label='Password'
                                type='password'
                                value={password}
                                name='password'
                                // onChange={onInputChange}
                                required
                            />
                        </div>
                        <div className="col-12">
                            <MDBBtn
                                style={{ width: '100%' }}
                                className='mt-2'
                            >
                                {/* {
                                    loading && (
                                        <MDBSpinner
                                            size='sm'
                                            role='status'
                                            tag='span'
                                            className='me-2'
                                        />
                                    )
                                } */}
                                Login
                            </MDBBtn>
                        </div>
                    </MDBValidation>
                    <br />
                    <GoogleLogin
                        clientId={clientId}
                        render={(renderProps) => (
                            < MDBBtn
                                style={{ width: '100%' }}
                                color='danger'
                                onClick={(renderProps.onClick)}
                                disabled={(renderProps.disabled)}
                            >
                                <MDBIcon
                                    className='me-2'
                                    fab
                                    icon='google'
                                />
                                Google Sign IN
                            </MDBBtn>
                        )}
                        // onSuccess={googleSuccess}
                        // onFailure={googleFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                </MDBCardBody>
                <MDBCardFooter>
                    {/* <Link to='/'> */}
                        <p>Don't have an account ? Sign Up</p>
                    {/* </Link> */}
                </MDBCardFooter>
            </MDBCard>
        </div>
    );
};


export default Login;