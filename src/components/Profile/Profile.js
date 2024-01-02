import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import { faCamera, faPen } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Profile({ data, host = true }) {
    const [allowEdit, setAllowEdit] = useState(false);
    const [avatar, setAvatar] = useState();
    const refUserName = useRef();

    const handleUpdate = () => {
        console.log('updating');
    };

    const handleAllowEdit = () => {
        setAllowEdit(true);
    };

    const handleFileChange = (e) => {
        if (e.target.files) {
            try {
                const file = e.target.files[0];
                setAvatar(URL.createObjectURL(file));
                // convertBase64(URL.createObjectURL(file));
            } catch (err) {}
        }
    };

    const convertBase64 = (blobUrl) => {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function () {
            var recoveredBlob = xhr.response;
            var reader = new FileReader();
            reader.onload = function () {
                var dataURL = reader.result;
                setAvatar(btoa(dataURL));
            };
            reader.readAsDataURL(recoveredBlob);
        };
        xhr.open('GET', blobUrl);
        xhr.send();
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                refUserName.current &&
                !refUserName.current.contains(e.target)
            ) {
                setAllowEdit(false);
            }
        };

        window.document.addEventListener('click', handleClickOutside);

        return () => {
            window.document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className={`${cx('wrapper')}`}>
            <div className="p-3 text-white">
                {host && (
                    <div className="mb-4">
                        <h4 className=" fw-semibold">My Profile</h4>
                    </div>
                )}
                <div className=" d-flex align-items-center flex-column">
                    <div className={` position-relative ${cx('')}`}>
                        <figure className={`${cx('avatar')} mb-0 square_80`}>
                            <img
                                src={
                                    avatar
                                        ? avatar
                                        : 'https://res.cloudinary.com/dmvyx3gwr/image/upload/v1703338394/ndk_music/avatar/NDK.jpg'
                                }
                                alt=""
                                className="w-100 rounded-circle overflow-hidden h-100"
                            />
                        </figure>
                        {host && (
                            <label
                                htmlFor="avatar"
                                className="position-absolute bottom-0 end-0 bg-second square_36 rounded-circle d-flex align-items-center justify-content-center pointer"
                            >
                                <i className=" ">
                                    <FontAwesomeIcon icon={faCamera} />
                                </i>
                                <input
                                    id="avatar"
                                    type="file"
                                    className="d-none"
                                    onChange={handleFileChange}
                                />
                            </label>
                        )}
                    </div>
                    <div ref={refUserName}>
                        <h5
                            contentEditable={allowEdit}
                            wrap="soft"
                            suppressContentEditableWarning
                            className="mt-3 d-inline-block"
                        >
                            Đăng Khoa
                        </h5>
                        {host && (
                            <i
                                onClick={handleAllowEdit}
                                className="ms-2 fs-6 pointer text--primary"
                            >
                                <FontAwesomeIcon icon={faPen} />
                            </i>
                        )}
                    </div>
                </div>
                <div className="mt-4">
                    <h5 className="mb-3">Personal information</h5>
                    <p>
                        <span className={`${cx('title__info')}`}>Gender</span>
                        <span className="text--second">Male</span>
                    </p>
                    <p>
                        <span className={`${cx('title__info')}`}>Birthday</span>
                        <span className="text--second">November 27, 2003</span>
                    </p>
                    <p>
                        <span className={`${cx('title__info')}`}>
                            Phone number
                        </span>
                        <span className="text--second">+84 796 798 048</span>
                    </p>
                </div>
                {host && (
                    <button
                        onClick={handleUpdate}
                        className="w-100 rounded-1 p-2 mt-2 border-0 bg--primary text-white"
                    >
                        <i className="me-2">
                            <FontAwesomeIcon icon={faPen} />
                        </i>
                        Update
                    </button>
                )}
            </div>
        </div>
    );
}

export default Profile;
