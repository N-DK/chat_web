import styles from '../Auth.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEye,
    faEyeSlash,
    faLock,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isShowPass, setIsShowPass] = useState(false);
    const [password, setPassword] = useState('');
    const [data, setData] = useState({
        phoneNumber,
        password,
    });

    const validPhoneNumber = new RegExp('^(84|0[3|5|7|8|9])+([0-9]{8})$');

    const isNumber = (character) => {
        return Number.isInteger(Number(character)) && character !== '';
    };

    const handleInputChange = (e) => {
        const { value, selectionStart } = e.target;
        if (value.length > 0) {
            if (isNumber(value.charAt(selectionStart - 1).trim())) {
                setPhoneNumber(value);
            }
        } else {
            setPhoneNumber('');
        }
    };

    const handlePassStatus = () => {
        setIsShowPass((prev) => !prev);
    };

    const isLogin = () => {
        var isEmpty = false;
        var isPhoneNumber = validPhoneNumber.test(phoneNumber);

        [(phoneNumber, password)].forEach((item) => {
            if (item === '') isEmpty = true;
        });

        return !isEmpty && isPhoneNumber;
    };

    useEffect(() => {
        setData({
            phoneNumber,
            password,
        });
    }, [phoneNumber, password]);

    const handleLogin = () => {
        console.log(data);
    };

    return (
        <div>
            <div className="p-3">
                <div className={`mb-4 ${cx('form_control')}`}>
                    <label className="d-block mb-2">Phone number</label>
                    <div className={`position-relative`}>
                        <input
                            value={phoneNumber}
                            onChange={handleInputChange}
                            type="text"
                            className="w-100 bg-transparent text-white pb-3 pt-3"
                            placeholder="Phone number"
                            maxLength={10}
                        />
                        <i className=" position-absolute pb-3 pt-3 start-0 top-50 translate-middle-y">
                            <FontAwesomeIcon icon={faUser} />
                        </i>
                    </div>
                </div>
                <div className={`${cx('form_control')}`}>
                    <label className="d-block mb-2">Password</label>
                    <div className={`position-relative`}>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={isShowPass ? 'text' : 'password'}
                            className="w-100 bg-transparent text-white pb-3 pt-3"
                            autoComplete={false}
                            placeholder="Password"
                        />
                        <i className=" position-absolute pb-3 pt-3 start-0 top-50 translate-middle-y">
                            <FontAwesomeIcon icon={faLock} />
                        </i>
                        <i
                            onClick={handlePassStatus}
                            className="pointer position-absolute pb-3 pt-3 pe-3 end-0 top-50 translate-middle-y"
                        >
                            <FontAwesomeIcon
                                icon={isShowPass ? faEyeSlash : faEye}
                            />
                        </i>
                    </div>
                </div>
                <Link className="mb-2 text--primary is_underline fs-14 float-end mt-2">
                    Forgot password?
                </Link>
                <button
                    disabled={!isLogin()}
                    onClick={handleLogin}
                    className={`mt-4 rounded-5 w-100 border-0 bg--primary text-white p-2 fw-semibold ${cx(
                        `${isLogin() ? '' : 'disable'}`,
                        'btn_submit',
                    )}`}
                >
                    LOGIN
                </button>
            </div>
        </div>
    );
}

export default Login;
