import ChatRoom from './ChatRoom';
import Menu from './Menu';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCamera,
    faCircleCheck,
    faCircleXmark,
    faMagnifyingGlass,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Profile from '~/components/Profile';

const friends = [
    {
        id: 1,
        name: 'Dang Khoa',
        avatar: 'https://i.ytimg.com/vi/RF6PvRkSLjU/maxresdefault.jpg',
    },
    {
        id: 2,
        name: 'Kim Hung',
        avatar: 'https://i.ytimg.com/vi/dCNdTe1wDLM/maxresdefault.jpg',
    },
];

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [avatar, setAvatar] = useState();
    const [members, setMember] = useState([]);
    const [searchFriend, setSearchFriend] = useState('');
    const [groupName, setGroupName] = useState('');

    const handleAddMember = (id) => {
        setMember((prev) => {
            if (prev.length <= 100) {
                if (!handleConfirmAddMember(id)) return [...prev, id];
                return prev.filter((member) => member !== id);
            }
        });
    };

    const handleConfirmAddMember = (id) => {
        return members.find((member) => member === id);
    };

    const getInfoMember = (id) => {
        return friends.find((friend) => friend.id === id);
    };

    const removeMember = (id) => {
        setMember((prev) => prev.filter((member) => member !== id));
    };

    return (
        <div className={cx('wrapper')}>
            <div className="d-flex h-100">
                <Menu />
                <div className="row flex-1 g-0">
                    <div className="col-3">{children}</div>
                    <div className="col-9">
                        <ChatRoom />
                    </div>
                </div>
            </div>
            <div className="modal fade" id="modalAddFriend" tabIndex="-1">
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div
                        className={`${cx(
                            'container',
                        )} modal-content text-white`}
                    >
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalTitleId">
                                Add friend
                            </h5>
                            <button
                                className=" border-0 bg-transparent"
                                data-bs-dismiss="modal"
                            >
                                <i className="fs-5 text--second">
                                    <FontAwesomeIcon icon={faXmark} />
                                </i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div
                                    className={`mb-3 ${cx(
                                        'find__phone-number',
                                    )}`}
                                >
                                    <input
                                        placeholder="Phone number"
                                        className="w-100 pb-2 bg-transparent text-white"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className=" border-0 bg-transparent me-3 text-white bg--second"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="border-0 rounded-2 p-2 ps-3 pe-3 text-white bg--primary"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="modalCreateGroup" tabIndex="-1">
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div
                        className={`${cx(
                            'container',
                        )} modal-content text-white`}
                    >
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalTitleId">
                                Create group
                            </h5>
                            <button
                                className=" border-0 bg-transparent"
                                data-bs-dismiss="modal"
                            >
                                <i className="fs-5 text--second">
                                    <FontAwesomeIcon icon={faXmark} />
                                </i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="">
                                <div
                                    className={`mb-3 d-flex align-items-center ${cx(
                                        'find__phone-number',
                                    )}`}
                                >
                                    <label
                                        htmlFor="avatar"
                                        className="icon__border_circle square_55 rounded-circle me-3 pointer"
                                    >
                                        <figure className="mb-0 h-100 w-100 d-flex align-items-center justify-content-center ">
                                            {avatar ? (
                                                <img
                                                    className="w-100 h-100"
                                                    src={avatar}
                                                    alt=""
                                                />
                                            ) : (
                                                <i className="fs-4">
                                                    <FontAwesomeIcon
                                                        icon={faCamera}
                                                    />
                                                </i>
                                            )}
                                        </figure>
                                        <input
                                            type="file"
                                            className="d-none"
                                            id="avatar"
                                        />
                                    </label>
                                    <input
                                        placeholder="Enter group name"
                                        className="flex-1 pb-2 bg-transparent"
                                    />
                                </div>
                                <div className=" rounded-5 icon__border_circle position-relative">
                                    <i className=" position-absolute top-50 translate-middle-y ms-3">
                                        <FontAwesomeIcon
                                            icon={faMagnifyingGlass}
                                        />
                                    </i>
                                    <div className="ps-4 ">
                                        <input
                                            className="border-0 bg-transparent w-100 ps-3 p-2 text-white"
                                            placeholder="Enter name, phone number"
                                        />
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="row g-0">
                                        <div
                                            className={`col-${
                                                members.length > 0 ? 7 : 12
                                            } ${cx('list__friend')}`}
                                        >
                                            <ul className=" list-unstyled mb-0 p-0">
                                                {friends.map((friend) => (
                                                    <li
                                                        key={friend.id}
                                                        onClick={() =>
                                                            handleAddMember(
                                                                friend.id,
                                                            )
                                                        }
                                                        className={`p-2  rounded-2 pointer ${cx(
                                                            '',
                                                        )}`}
                                                    >
                                                        <div className="d-flex align-items-center">
                                                            <span className="square_20 rounded-circle icon__border_circle me-2 d-inline-block">
                                                                {handleConfirmAddMember(
                                                                    friend.id,
                                                                ) && (
                                                                    <i className="w-100 h-100 d-flex align-items-center text--primary-hover ">
                                                                        <FontAwesomeIcon
                                                                            className="w-100 h-100"
                                                                            icon={
                                                                                faCircleCheck
                                                                            }
                                                                        />
                                                                    </i>
                                                                )}
                                                            </span>
                                                            <figure className="mb-0 square_40 me-2">
                                                                <img
                                                                    style={{
                                                                        objectFit:
                                                                            'cover',
                                                                    }}
                                                                    src={
                                                                        friend.avatar
                                                                    }
                                                                    alt=""
                                                                    className="w-100 h-100 rounded-circle"
                                                                />
                                                            </figure>
                                                            <span>
                                                                {friend.name}
                                                            </span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div
                                            style={{ transition: '0.3s' }}
                                            className={`${
                                                members.length > 0
                                                    ? 'col-5'
                                                    : `${cx('members')}`
                                            }`}
                                        >
                                            {members.length > 0 && (
                                                <div className="icon__border_circle text-white p-3 rounded-2 h-100">
                                                    <div className="fs-13">
                                                        <span className=" fw-semibold me-2">
                                                            Selected
                                                        </span>
                                                        <p className=" d-inline-flex rounded-1 p-1">
                                                            {members.length}/100
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <ul className=" list-unstyled mb-0 p-0">
                                                            {members.map(
                                                                (member) => (
                                                                    <li
                                                                        key={
                                                                            member
                                                                        }
                                                                        className=" rounded-5 p-1 mb-2 bg--primary"
                                                                    >
                                                                        <div className="d-flex align-items-center justify-content-between">
                                                                            <div className="d-flex align-items-center">
                                                                                <figure className="mb-0 square_20 d-flex align-items-center me-2">
                                                                                    <img
                                                                                        style={{
                                                                                            objectFit:
                                                                                                'cover',
                                                                                        }}
                                                                                        src={
                                                                                            getInfoMember(
                                                                                                member,
                                                                                            )
                                                                                                .avatar
                                                                                        }
                                                                                        alt=""
                                                                                        className="w-100 h-100 rounded-circle"
                                                                                    />
                                                                                </figure>
                                                                                <h6 className="mb-0 fs-13">
                                                                                    {
                                                                                        getInfoMember(
                                                                                            member,
                                                                                        )
                                                                                            .name
                                                                                    }
                                                                                </h6>
                                                                            </div>
                                                                            <i
                                                                                onClick={() =>
                                                                                    removeMember(
                                                                                        member,
                                                                                    )
                                                                                }
                                                                                className="me-1 pointer"
                                                                            >
                                                                                <FontAwesomeIcon
                                                                                    icon={
                                                                                        faCircleXmark
                                                                                    }
                                                                                />
                                                                            </i>
                                                                        </div>
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className=" border-0 bg-transparent me-3 text-white bg--second"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="border-0 rounded-2 p-2 pe-3 ps-3 text-white bg--primary"
                            >
                                Create group
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="modalProfile" tabIndex="-1">
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div
                        className={`${cx(
                            'container',
                        )} modal-content text-white`}
                    >
                        <div className="modal-body">
                            <div className="">
                                <Profile host={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
