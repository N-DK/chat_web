import styles from '../Auth.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEye,
    faEyeSlash,
    faLock,
    faSignature,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Register() {
    const [isShowPass, setIsShowPass] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [data, setData] = useState({
        phoneNumber: '',
        name: '',
        password: '',
        birthday: '',
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

    const isCheckLeapYear = (year) => {
        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    };

    const getLimitDayByMonth = (month) => {
        var limitDay = 31;
        switch (month) {
            case '01':
            case '03':
            case '05':
            case '07':
            case '08':
            case '10':
            case '12':
                limitDay = 31;
                break;
            case '04':
            case '06':
            case '09':
            case '11':
                limitDay = 30;
                break;
            case '02':
                limitDay = isCheckLeapYear(year) ? 29 : 28;
                break;
            default:
                break;
        }
        return limitDay;
    };

    const handlePassStatus = () => {
        setIsShowPass((prev) => !prev);
    };

    const isRegister = () => {
        var isEmpty = false;
        var isDate = day <= getLimitDayByMonth(month);
        var isYear = year >= 1900 && year <= 2023;
        var isPhoneNumber = validPhoneNumber.test(phoneNumber);
        [phoneNumber, name, password, day, month, year].forEach((item) => {
            if (item === '') isEmpty = true;
        });

        return !isEmpty && isDate && isYear && isPhoneNumber;
    };

    useEffect(() => {
        setData({
            phoneNumber,
            name,
            password,
            birthday: `${day}-${month}-${year}`,
        });
    }, [phoneNumber, name, password, day, month, year]);

    const handleRegister = () => {
        console.log(data);
    };

    return (
        <div>
            <div className="p-3">
                <div className={`mb-3 ${cx('form_control')}`}>
                    <label className="d-block">Phone number</label>
                    <div className={`position-relative`}>
                        <input
                            value={phoneNumber}
                            onChange={handleInputChange}
                            type="text"
                            maxLength={10}
                            className="w-100 bg-transparent text-white pb-3 pt-3"
                            placeholder="Phone number"
                        />
                        <i className=" position-absolute pb-3 pt-3 start-0 top-50 translate-middle-y">
                            <FontAwesomeIcon icon={faUser} />
                        </i>
                    </div>
                </div>
                <div className={`${cx('form_control')} mb-3`}>
                    <label className="d-block">What should we call you?</label>
                    <div className={`position-relative`}>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="w-100 bg-transparent text-white pb-3 pt-3"
                            placeholder="Your name"
                        />
                        <i className=" position-absolute pb-3 pt-3 start-0 top-50 translate-middle-y">
                            <FontAwesomeIcon icon={faSignature} />
                        </i>
                    </div>
                </div>
                <div className={`${cx('form_control')} mb-3`}>
                    <label className="d-block">Password</label>
                    <div className={`position-relative`}>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="w-100 bg-transparent text-white pb-3 pt-3"
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
                <div className={`${cx('form_control')}`}>
                    <label className="d-block mb-2">
                        What's your birthday?
                    </label>
                    <div className={`pt-1`}>
                        <div className="row">
                            <div className="col-3">
                                <input
                                    className={` ${cx(
                                        'input-form',
                                    )} w-100 p-2 text-white`}
                                    placeholder="DD"
                                    maxLength={2}
                                    onChange={(e) => setDay(e.target.value)}
                                    value={day}
                                />
                            </div>
                            <div className="col-5">
                                <select
                                    value={month}
                                    className={`${cx('input-form')} w-100 p-2 ${
                                        month !== '' ? 'text-white' : ''
                                    }`}
                                    placeholder=""
                                    onChange={(e) => {
                                        setMonth(e.target.value);
                                    }}
                                >
                                    <option disabled={month !== ''} value="">
                                        Month
                                    </option>
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                            </div>
                            <div className="col-4">
                                <input
                                    className={`${cx(
                                        'input-form',
                                    )} w-100 p-2 text-white`}
                                    placeholder="YYYY"
                                    maxLength={4}
                                    onChange={(e) => setYear(e.target.value)}
                                    value={year}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    disabled={!isRegister()}
                    onClick={handleRegister}
                    className={`mt-4 rounded-5 w-100 border-0 bg--primary text-white p-2 fw-semibold mb-5 ${cx(
                        `${isRegister() ? '' : 'disable'}`,
                        'btn_submit',
                    )}`}
                >
                    REGISTER
                </button>
            </div>
        </div>
    );
}

export default Register;
