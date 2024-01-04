import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ChatRoom.module.scss';
import classNames from 'classnames/bind';
import {
    faBell,
    faCaretRight,
    faChevronDown,
    faChevronUp,
    faCircleInfo,
    faCircleUser,
    faCircleXmark,
    faFaceSmile,
    faFile,
    faImage,
    faLink,
    faMagnifyingGlass,
    faMicrophone,
    faPaperclip,
    faPhone,
    faThumbsUp,
    faVideo,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Message from '~/components/Message';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LinkPreview from '@ashwamegh/react-link-preview';

const cx = classNames.bind(styles);

// Default
// User logged in
const user = {
    id: 1,
};

// Example
const _data = [
    {
        content: [
            {
                message: 'hi',
                react: 'https://static.xx.fbcdn.net/images/emoji.php/v9/tf9/1.5/32/2764.png',
            },
            {
                message: "What's your name",
                react: '',
            },
        ],
        reply: {},
        user_id: 2,
        status: false,
        createDate: new Date(),
    },
    {
        content: [
            {
                message: 'Hello',
                react: 'https://static.xx.fbcdn.net/images/emoji.php/v9/tf9/1.5/32/2764.png',
            },
            {
                message: "My name's Khoa",
                react: '',
            },
            ,
            {
                message: 'Nice too meet you',
                react: '',
            },
        ],
        reply: {},
        user_id: 1,
        status: true,
        createDate: new Date(),
    },
];

function ChatRoom() {
    const [isOnImage, setIsOnImage] = useState(false);
    const [isOnFile, setIsOnFile] = useState(false);
    const [isLink, setIsLink] = useState(false);
    const [isOnInfo, setIsOnInfo] = useState(true);
    const [isOnSearch, setIsOnSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [message, setMessage] = useState('');
    const [data, setData] = useState(_data);
    const [reply, setReply] = useState();
    const chatBody = useRef();
    const refFile = useRef();
    const refImage = useRef();
    const refLink = useRef();

    const handleSendMessage = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setData((prev) => {
                const data_temp = [...prev];
                data_temp[data_temp.length - 1].status = false;
                return [
                    ...data_temp,
                    {
                        content: [
                            {
                                message,
                                react: '',
                            },
                        ],
                        reply: reply ? reply : {},
                        user_id: user.id,
                        status: true,
                        createDate: new Date(),
                    },
                ];
            });

            setMessage('');
            e.currentTarget.innerText = '';
            handleCancelReply();
        }
    };

    useEffect(() => {
        if (refFile.current) {
            if (isOnFile) {
                refFile.current.style.height = `${3 * 62.6 + 56}px`;
            } else {
                refFile.current.style.height = `${0}px`;
            }
        }
    }, [isOnFile]);

    useEffect(() => {
        if (refLink.current) {
            if (isLink) {
                refLink.current.style.height = `${3 * 71 + 56}px`;
            } else {
                refLink.current.style.height = `${0}px`;
            }
        }
    }, [isLink]);

    useEffect(() => {
        if (refImage.current) {
            if (isOnImage) {
                refImage.current.style.height = `${3 * 62 + 56}px`;
            } else {
                refImage.current.style.height = `${0}px`;
            }
        }
    }, [isOnImage]);

    useEffect(() => {
        if (chatBody) {
            chatBody.current.scrollTo({
                top: chatBody.current.scrollHeight,
            });
        }
    }, [chatBody, data]);

    const LinkPreviewer = ({ loading, preview }) => {
        return (
            <div className={`${cx('preview_link')}`}>
                <div className=" d-flex align-items-center">
                    <figure
                        className={`square_55 mb-0 ${cx(
                            `${loading ? 'loading' : ''}`,
                            'figure',
                        )}`}
                    >
                        {!loading && (
                            <img
                                style={{ objectFit: 'cover' }}
                                src={preview.img}
                                alt=""
                                className="w-100 h-100 rounded-2"
                            />
                        )}
                    </figure>
                    <div className="ms-2 overflow-hidden flex-1">
                        <h6
                            className={`text-white ${cx(
                                `${loading ? 'loading' : ''}`,
                                'title',
                            )} mb-1`}
                        >
                            {preview.title}
                        </h6>
                        <span
                            className={`${cx(
                                `${loading ? 'loading' : ''}`,
                                'domain',
                            )}`}
                        >
                            {preview.domain}
                        </span>
                    </div>
                </div>
            </div>
        );
    };

    const handleReply = (host, content) => {
        setReply({ host, content });
    };

    const handleCancelReply = () => {
        setReply();
    };

    const showSearch = () => setIsOnSearch(true);
    const hideSearch = () => setIsOnSearch(false);

    return (
        <div className={`${cx('wrapper')}`}>
            <div>
                <div className={`row g-0`}>
                    <div
                        style={{ transition: '0.3s' }}
                        className={`col-${isOnInfo ? 8 : 12}`}
                    >
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
                                        <div className=" list-unstyled d-flex ">
                                            <li className="text--primary pointer">
                                                <i className="fs-5">
                                                    <FontAwesomeIcon
                                                        icon={faPhone}
                                                    />
                                                </i>
                                            </li>
                                            <li className="text--primary pointer me-4 ms-4">
                                                <i className="fs-5">
                                                    <FontAwesomeIcon
                                                        icon={faVideo}
                                                    />
                                                </i>
                                            </li>
                                            <li
                                                onClick={() =>
                                                    setIsOnInfo((prev) => !prev)
                                                }
                                                className="text--primary pointer"
                                            >
                                                <i
                                                    className={`fs-5 ${
                                                        isOnInfo
                                                            ? 'text--primary-hover'
                                                            : ''
                                                    }`}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faCircleInfo}
                                                    />
                                                </i>
                                            </li>
                                        </div>
                                    </div>
                                    {isOnSearch && (
                                        <div>
                                            <div className="d-flex align-items-center mt-2">
                                                <div
                                                    className={`d-flex justify-content-center flex-1  w-100 ${cx(
                                                        'search',
                                                    )}`}
                                                >
                                                    <input
                                                        value={searchValue}
                                                        type="text"
                                                        placeholder="Search..."
                                                        className="flex-1 pt-1 pb-1"
                                                        onChange={(e) =>
                                                            setSearchValue(
                                                                e.target.value,
                                                            )
                                                        }
                                                    />
                                                    <i className=" position-absolute top-50 translate-middle-y start-0 ms-3">
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faMagnifyingGlass
                                                            }
                                                        />
                                                    </i>
                                                    {searchValue && (
                                                        <i
                                                            onClick={() =>
                                                                setSearchValue(
                                                                    '',
                                                                )
                                                            }
                                                            className="pointer position-absolute top-50 translate-middle-y end-0 me-2"
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    faCircleXmark
                                                                }
                                                            />
                                                        </i>
                                                    )}
                                                </div>
                                                <button className=" bg-transparent rounded-circle icon__border_circle square_32 ms-2">
                                                    <i className="fs-6">
                                                        <FontAwesomeIcon
                                                            icon={faChevronUp}
                                                        />
                                                    </i>
                                                </button>
                                                <button className=" bg-transparent rounded-circle icon__border_circle square_32 ms-2">
                                                    <i className="fs-6">
                                                        <FontAwesomeIcon
                                                            icon={faChevronDown}
                                                        />
                                                    </i>
                                                </button>
                                                <button
                                                    onClick={hideSearch}
                                                    className="icon__border_circle text-white bg-second rounded-5 p-2 pt-1 pb-1 ms-2"
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className={`${cx('body')} flex-1`}>
                                <div
                                    ref={chatBody}
                                    className={`overflow-auto h-100 p-3 ${cx(
                                        'container',
                                    )}`}
                                >
                                    <div className="d-flex justify-content-center mb-5 mt-4 pb-3 flex-column align-items-center">
                                        <figure
                                            className={`${cx(
                                                'avatar',
                                            )} mb-0 square_80`}
                                        >
                                            <img
                                                src="https://res.cloudinary.com/dmvyx3gwr/image/upload/v1703338394/ndk_music/avatar/NDK.jpg"
                                                alt=""
                                                className="w-100 rounded-circle overflow-hidden h-100"
                                            />
                                        </figure>
                                        <h5 className="mt-3 d-inline-block text-white">
                                            Đăng Khoa
                                        </h5>
                                    </div>
                                    {data.map((message, index) => (
                                        <Message
                                            key={index}
                                            host={message.user_id === user.id}
                                            handleReply={handleReply}
                                            data={message}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className={`${cx('footer')}`}>
                                <div className="p-3 d-flex flex-column">
                                    {reply && (
                                        <div className="mb-2 position-relative">
                                            <h6 className="text-white fw-semibold mb-1">
                                                Replying to{' '}
                                                {reply.host ? 'yourself' : ''}
                                            </h6>
                                            <span className="text-white opacity-50 fs-13">
                                                {reply.content}
                                            </span>
                                            <button
                                                onClick={handleCancelReply}
                                                className=" border-0  bg-transparent position-absolute top-0 end-0"
                                            >
                                                <span>
                                                    <i>
                                                        <FontAwesomeIcon
                                                            icon={faXmark}
                                                        />
                                                    </i>
                                                </span>
                                            </button>
                                        </div>
                                    )}
                                    <div className=" d-flex align-items-center ">
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
                                                    suppressContentEditableWarning
                                                    onInput={(e) =>
                                                        setMessage(
                                                            e.currentTarget
                                                                .innerText,
                                                        )
                                                    }
                                                    onKeyDown={(e) =>
                                                        handleSendMessage(e)
                                                    }
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
                    </div>
                    <div className={`col-4`}>
                        <div
                            className={`${cx(
                                'info_conver',
                            )} pt-3 overflow-auto`}
                        >
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
                                            <button
                                                data-bs-toggle="modal"
                                                data-bs-target="#modalProfile"
                                                className="mb-1 border-0 rounded-circle square_36 text-white bg-second d-flex align-items-center justify-content-center"
                                            >
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
                                            <button
                                                onClick={
                                                    isOnSearch
                                                        ? hideSearch
                                                        : showSearch
                                                }
                                                className="mb-1 border-0 rounded-circle square_36 text-white bg-second d-flex align-items-center justify-content-center"
                                            >
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
                                    <div>
                                        <div
                                            onClick={() =>
                                                setIsOnImage((prev) => !prev)
                                            }
                                            className={`d-flex align-items-center justify-content-between p-2 rounded-2 bg--hover--message-item pointer ${cx(
                                                'image',
                                                `${isOnImage ? 'on' : ''}`,
                                            )}`}
                                        >
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
                                            <i
                                                className={`text--primary ${cx(
                                                    'more',
                                                )}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faCaretRight}
                                                />
                                            </i>
                                        </div>
                                        <div
                                            ref={refImage}
                                            className={`${cx(
                                                'image__container',
                                                `${isOnImage ? '' : ''}`,
                                            )}`}
                                        >
                                            <div className="p-2 row g-2">
                                                <div className="col-3">
                                                    <figure className="w-100 mb-1 rounded-1 overflow-hidden">
                                                        <img
                                                            src="https://res.cloudinary.com/dmvyx3gwr/image/upload/v1703338394/ndk_music/avatar/NDK.jpg"
                                                            alt=""
                                                            className="w-100"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="col-3">
                                                    <figure className="w-100 mb-1 rounded-1 overflow-hidden">
                                                        <img
                                                            src="https://res.cloudinary.com/dmvyx3gwr/image/upload/v1703338394/ndk_music/avatar/NDK.jpg"
                                                            alt=""
                                                            className="w-100"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="col-3">
                                                    <figure className="w-100 mb-1 rounded-1 overflow-hidden">
                                                        <img
                                                            src="https://res.cloudinary.com/dmvyx3gwr/image/upload/v1703338394/ndk_music/avatar/NDK.jpg"
                                                            alt=""
                                                            className="w-100"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="col-3">
                                                    <figure className="w-100 mb-1 rounded-1 overflow-hidden">
                                                        <img
                                                            src="https://res.cloudinary.com/dmvyx3gwr/image/upload/v1703338394/ndk_music/avatar/NDK.jpg"
                                                            alt=""
                                                            className="w-100"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="col-3">
                                                    <figure className="w-100 mb-1 rounded-1 overflow-hidden">
                                                        <img
                                                            src="https://res.cloudinary.com/dmvyx3gwr/image/upload/v1703338394/ndk_music/avatar/NDK.jpg"
                                                            alt=""
                                                            className="w-100"
                                                        />
                                                    </figure>
                                                </div>
                                                <div className="col-3">
                                                    <figure className="w-100 mb-1 rounded-1 overflow-hidden">
                                                        <img
                                                            src="https://res.cloudinary.com/dmvyx3gwr/image/upload/v1703338394/ndk_music/avatar/NDK.jpg"
                                                            alt=""
                                                            className="w-100"
                                                        />
                                                    </figure>
                                                </div>
                                            </div>
                                            <button className="w-100 rounded-1 p-2 mt-2 border-0 bg--primary text-white">
                                                More
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            onClick={() =>
                                                setIsOnFile((prev) => !prev)
                                            }
                                            className={`d-flex align-items-center justify-content-between p-2 rounded-2 bg--hover--message-item pointer ${cx(
                                                `${isOnFile ? 'on' : ''}`,
                                            )}`}
                                        >
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
                                            <i
                                                className={`text--primary ${cx(
                                                    'more',
                                                )}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faCaretRight}
                                                />
                                            </i>
                                        </div>
                                        <div>
                                            <div
                                                ref={refFile}
                                                className={`${cx(
                                                    'file__container',
                                                    `${isOnFile ? '' : ''}`,
                                                )}`}
                                            >
                                                <div>
                                                    <Link
                                                        download
                                                        className=" d-flex align-items-center pb-2 pt-2 text-decoration-none "
                                                    >
                                                        <i className="square_40 rounded-1 d-flex align-items-center justify-content-center text-white bg-second">
                                                            <FontAwesomeIcon
                                                                icon={faFile}
                                                            />
                                                        </i>
                                                        <div className="ms-3">
                                                            <span className="d-block fw-semibold text-white">
                                                                lesson_1.docx
                                                            </span>
                                                            <span className=" text-uppercase">
                                                                13.02 KB
                                                            </span>
                                                        </div>
                                                    </Link>
                                                    <Link
                                                        download
                                                        className=" d-flex align-items-center pb-2 pt-2 text-decoration-none "
                                                    >
                                                        <i className="square_40 rounded-1 d-flex align-items-center justify-content-center text-white bg-second">
                                                            <FontAwesomeIcon
                                                                icon={faFile}
                                                            />
                                                        </i>
                                                        <div className="ms-3">
                                                            <span className="d-block fw-semibold text-white">
                                                                lesson_1.docx
                                                            </span>
                                                            <span className=" text-uppercase">
                                                                13.02 KB
                                                            </span>
                                                        </div>
                                                    </Link>
                                                    <Link
                                                        download
                                                        className=" d-flex align-items-center pb-2 pt-2 text-decoration-none "
                                                    >
                                                        <i className="square_40 rounded-1 d-flex align-items-center justify-content-center text-white bg-second">
                                                            <FontAwesomeIcon
                                                                icon={faFile}
                                                            />
                                                        </i>
                                                        <div className="ms-3">
                                                            <span className="d-block fw-semibold text-white">
                                                                lesson_1.docx
                                                            </span>
                                                            <span className=" text-uppercase">
                                                                13.02 KB
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <button className="w-100 rounded-1 p-2 mt-2 border-0 bg--primary text-white">
                                                    More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            onClick={() =>
                                                setIsLink((prev) => !prev)
                                            }
                                            className={`d-flex align-items-center justify-content-between p-2 rounded-2 bg--hover--message-item pointer ${cx(
                                                `${isLink ? 'on' : ''}`,
                                            )}`}
                                        >
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
                                            <i
                                                className={`text--primary ${cx(
                                                    'more',
                                                )}`}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faCaretRight}
                                                />
                                            </i>
                                        </div>
                                        <div
                                            ref={refLink}
                                            className={`${cx(
                                                'link__container',
                                            )}`}
                                        >
                                            <div>
                                                <Link
                                                    className=" text-decoration-none pt-2 pb-2 d-block"
                                                    to="https://vt.tiktok.com/ZSNGbuhdC/"
                                                >
                                                    <LinkPreview
                                                        url="https://vt.tiktok.com/ZSNGbuhdC/"
                                                        render={LinkPreviewer}
                                                    />
                                                </Link>
                                                <Link
                                                    className=" text-decoration-none pt-2 pb-2 d-block"
                                                    to="https://www.youtube.com/watch?v=dCNdTe1wDLM"
                                                >
                                                    <LinkPreview
                                                        url="https://www.youtube.com/watch?v=dCNdTe1wDLM"
                                                        render={LinkPreviewer}
                                                    />
                                                </Link>
                                                <Link
                                                    className=" text-decoration-none pt-2 pb-2 d-block"
                                                    to="https://www.youtube.com/watch?v=RF6PvRkSLjU&t=555s"
                                                >
                                                    <LinkPreview
                                                        url="https://www.youtube.com/watch?v=RF6PvRkSLjU&t=555s"
                                                        render={LinkPreviewer}
                                                    />
                                                </Link>
                                            </div>
                                            <button className="w-100 rounded-1 p-2 mt-2 border-0 bg--primary text-white">
                                                More
                                            </button>
                                        </div>
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
