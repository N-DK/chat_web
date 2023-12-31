import { Link } from 'react-router-dom';
import styles from './Messenger.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Messenger({ active }) {
    return (
        <Link
            className={`${cx(
                'wrapper',
                `${active && 'active'}`,
            )} rounded-2 text-decoration-none d-block bg--hover--message-item`}
        >
            <div className="p-2 pt-3 pb-3">
                <div className="d-flex align-items-center">
                    <figure className="mb-0 rounded-circle overflow-hidden me-2">
                        <img
                            src="https://res.cloudinary.com/dmvyx3gwr/image/upload/v1703338394/ndk_music/avatar/NDK.jpg"
                            alt=""
                            className="w-100 h-100"
                        />
                    </figure>
                    <div className="flex-1">
                        <div className="d-flex align-items-center justify-content-between pb-1">
                            <h6 className="mb-0 text-white fw-medium">
                                Đăng Khoa
                            </h6>
                            <span className={cx('time')}>6 minutes</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <p
                                className={`mb-0 ${cx(
                                    `${active ? 'seen' : 'received'}`,
                                )}`}
                            >
                                Hello!
                            </p>
                            {!active && (
                                <span
                                    className={`text-white rounded-circle d-flex align-items-center justify-content-center square_20 bg--primary fw-medium ${cx(
                                        'notice',
                                    )}`}
                                >
                                    1
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Messenger;
