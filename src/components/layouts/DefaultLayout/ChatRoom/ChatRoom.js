import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ChatRoom.module.scss';
import classNames from 'classnames/bind';
import {
    faBell,
    faCaretRight,
    faCircleUser,
    faFaceSmile,
    faFile,
    faImage,
    faLink,
    faMagnifyingGlass,
    faMicrophone,
    faPaperclip,
    faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import Message from '~/components/Message';

const cx = classNames.bind(styles);

function ChatRoom() {
    return (
        <div className={`${cx('wrapper')}`}>
            <div>
                <div className="row g-0">
                    <div className={`col-8`}>
                        <div className={`d-flex flex-column ${cx('room')}`}>
                            <div className={`${cx('header')}`}>
                                <div className="p-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className={`${cx('avatar')}`}>
                                                <figure
                                                    className={`mb-0 rounded-circle overflow-hidden me-2`}
                                                >
                                                    <img
                                                        src="https://res.cloudinary.com/dmvyx3gwr/image/upload/v1703338394/ndk_music/avatar/NDK.jpg"
                                                        alt=""
                                                        className="w-100 h-100"
                                                    />
                                                </figure>
                                            </div>
                                            <div>
                                                <h5 className=" fw-semibold mb-0 text-white">
                                                    Đăng Khoa
                                                </h5>
                                                <span>Active</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${cx('body')} flex-1`}>
                                <div
                                    className={`overflow-auto h-100 p-3 ${cx(
                                        'container',
                                    )}`}
                                >
                                    <Message
                                        content={['hi', "What's your name"]}
                                    />
                                    <Message
                                        content={[
                                            'Hello',
                                            "My name's Khoa",
                                            'Nice too meet you',
                                        ]}
                                        host
                                    />
                                    <Message content={['Oke']} />
                                    <Message content={['Bye']} host />
                                    <Message content={['Bye', 'See then']} />
                                    <Message content={['Oke']} host />
                                    <Message
                                        content={[
                                            'https://res.cloudinary.com/dmvyx3gwr/image/upload/v1703338394/ndk_music/avatar/NDK.jpg',
                                        ]}
                                        host
                                    />
                                    <Message
                                        content={['lesson_1.docx']}
                                        host
                                        seen
                                    />
                                </div>
                            </div>
                            <div className={`${cx('footer')}`}>
                                <div className="p-3 d-flex align-items-center h-100">
                                    <div className="d-flex align-items-center w-100">
                                        <div className="me-3">
                                            <button className="border-0 bg-transparent text--primary me-3">
                                                <i className="fs-5">
                                                    <FontAwesomeIcon
                                                        icon={faPaperclip}
                                                    />
                                                </i>
                                            </button>
                                            <button className="border-0 bg-transparent text--primary me-3">
                                                <i className="fs-5">
                                                    <FontAwesomeIcon
                                                        icon={faMicrophone}
                                                    />
                                                </i>
                                            </button>
                                            <button className="border-0 bg-transparent text--primary">
                                                <i className="fs-5">
                                                    <FontAwesomeIcon
                                                        icon={faImage}
                                                    />
                                                </i>
                                            </button>
                                        </div>
                                        <div
                                            className={`flex-1 d-flex align-items-center position-relative ${cx(
                                                '',
                                            )}`}
                                        >
                                            <div
                                                contentEditable={true}
                                                wrap="soft"
                                                className={`w-100 ${cx(
                                                    'message__content',
                                                )}`}
                                                type="text"
                                                placeholder="Enter message..."
                                            ></div>
                                            <button className="border-0 bg-transparent text--primary position-absolute end-0 me-2 top-50 translate-middle-y">
                                                <i className="fs-5">
                                                    <FontAwesomeIcon
                                                        icon={faFaceSmile}
                                                    />
                                                </i>
                                            </button>
                                        </div>
                                        <button className="border-0 bg-transparent text--primary ms-2">
                                            <i className="fs-5">
                                                <FontAwesomeIcon
                                                    icon={faThumbsUp}
                                                />
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${cx('info_conver')} pt-3`}>
                            <div className="p-2">
                                <div className="text-center d-flex flex-column align-items-center">
                                    <div className={`${cx('avatar')}`}>
                                        <figure
                                            className={`mb-0 rounded-circle overflow-hidden me-2 square_80`}
                                        >
                                            <img
                                                src="https://res.cloudinary.com/dmvyx3gwr/image/upload/v1703338394/ndk_music/avatar/NDK.jpg"
                                                alt=""
                                                className="w-100 h-100"
                                            />
                                        </figure>
                                    </div>
                                    <h5 className="mt-2 text-white mb-1">
                                        Đăng Khoa
                                    </h5>
                                    <span>Active now</span>
                                    <div className="d-flex align-items-center justify-content-center mt-3">
                                        <div className="d-flex align-items-center flex-column">
                                            <button className="mb-1 border-0 rounded-circle square_36 text-white bg-second d-flex align-items-center justify-content-center">
                                                <i className="fs-5">
                                                    <FontAwesomeIcon
                                                        icon={faCircleUser}
                                                    />
                                                </i>
                                            </button>
                                            <span>Profile</span>
                                        </div>
                                        <div className="d-flex align-items-center flex-column me-4 ms-4">
                                            <button className="mb-1 border-0 rounded-circle square_36 text-white bg-second d-flex align-items-center justify-content-center">
                                                <i className="fs-5">
                                                    <FontAwesomeIcon
                                                        icon={faBell}
                                                    />
                                                </i>
                                            </button>
                                            <span>Mute</span>
                                        </div>
                                        <div className="d-flex align-items-center flex-column">
                                            <button className="mb-1 border-0 rounded-circle square_36 text-white bg-second d-flex align-items-center justify-content-center">
                                                <i className="fs-5">
                                                    <FontAwesomeIcon
                                                        icon={faMagnifyingGlass}
                                                    />
                                                </i>
                                            </button>
                                            <span>Search</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className="d-flex align-items-center justify-content-between p-2 rounded-2 bg--hover--message-item pointer">
                                        <h5 className="mb-0 d-flex align-items-center">
                                            <i className={`${cx('text')}`}>
                                                <FontAwesomeIcon
                                                    icon={faImage}
                                                />
                                            </i>
                                            <span className="text-white ms-3">
                                                Image/Video
                                            </span>
                                        </h5>
                                        <i className="text--primary">
                                            <FontAwesomeIcon
                                                icon={faCaretRight}
                                            />
                                        </i>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between p-2 rounded-2 bg--hover--message-item pointer">
                                        <h5 className="mb-0 d-flex align-items-center">
                                            <i className={`${cx('text')}`}>
                                                <FontAwesomeIcon
                                                    icon={faFile}
                                                />
                                            </i>
                                            <span className="text-white ms-3">
                                                File
                                            </span>
                                        </h5>
                                        <i className="text--primary">
                                            <FontAwesomeIcon
                                                icon={faCaretRight}
                                            />
                                        </i>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between p-2 rounded-2 bg--hover--message-item pointer">
                                        <h5 className="mb-0 d-flex align-items-center">
                                            <i className={`${cx('text')}`}>
                                                <FontAwesomeIcon
                                                    icon={faLink}
                                                />
                                            </i>
                                            <span className="text-white ms-3">
                                                Link
                                            </span>
                                        </h5>
                                        <i className="text--primary">
                                            <FontAwesomeIcon
                                                icon={faCaretRight}
                                            />
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatRoom;
