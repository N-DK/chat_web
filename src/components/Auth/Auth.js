import { useState } from 'react';
import styles from './Auth.module.scss';
import classNames from 'classnames/bind';
import Login from './Login/Login';
import Register from './Register/Register';

const cx = classNames.bind(styles);

// true ~ login && false ~ register
function Auth() {
    const [active, setActive] = useState(true);

    const loginForm = () => setActive(true);
    const registerForm = () => setActive(false);

    return (
        <div
            className={` ${cx(
                'wrapper',
            )} position-fixed top-0 bottom-0 end-0 start-0 `}
        >
            <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                <div className={` rounded-2 ${cx('container')} bg-second`}>
                    <div className="d-flex align-items-center border_bottom text-white pt-3 pb-3 mb-3">
                        <div
                            onClick={loginForm}
                            className="flex-1 d-flex justify-content-center pointer border_end"
                        >
                            <p
                                className={`mb-0 fs-5 fw-semibold  ${cx(
                                    `${active ? 'active' : ''}`,
                                )}`}
                            >
                                Log in
                            </p>
                        </div>
                        <div
                            onClick={registerForm}
                            className="flex-1 d-flex justify-content-center pointer"
                        >
                            <p
                                className={`mb-0 fs-5 fw-semibold ${cx(
                                    `${!active ? 'active' : ''}`,
                                )}`}
                            >
                                Register
                            </p>
                        </div>
                    </div>
                    <div className="text-white pt-4">
                        {active ? <Login /> : <Register />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
