import { Link, useParams } from 'react-router-dom';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserGroup,
    faUser,
    faCommentDots,
    faGear,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

const cx = classNames.bind(styles);

const listNav = [
    {
        id: 0,
        icon: faUser,
        content: 'Profile',
        path: '/profile',
    },
    {
        id: 1,
        icon: faCommentDots,
        content: 'Chats',
        path: '/chatroom',
    },
    {
        id: 2,
        icon: faUserGroup,
        content: 'Groups',
        path: '/groups',
    },
];

function Menu() {
    const [active, setActive] = useState();
    const { slug } = useParams();

    const handleActive = (id) => {
        setActive(id);
    };

    useEffect(() => {
        if (!slug || slug === 'chatroom') {
            handleActive('/chatroom');
        } else {
            handleActive(`/${slug}`);
        }
    }, [slug]);

    return (
        <div className={`${cx('wrapper')}`}>
            <div className="p-2 pt-3 h-100 pb-2">
                <div className="d-flex h-100 flex-column justify-content-between">
                    <ul className=" list-unstyled">
                        <Link className="d-flex align-items-center justify-content-center">
                            <figure className={` ${cx('logo')}`}>
                                <img
                                    className="w-100 h-100"
                                    src="https://themes.themesbrand.com/chatvia/angular/dark/assets/images/logo.svg"
                                />
                            </figure>
                        </Link>
                        {listNav.map((nav) => (
                            <Tippy
                                key={nav.id}
                                content={nav.content}
                                className="custom-tooltip"
                            >
                                <li>
                                    <Link
                                        to={nav.path}
                                        className={`rounded d-flex align-items-center justify-content-center text-decoration-none square_55 text--primary ${cx(
                                            `${
                                                nav.path === active && 'active'
                                            }`,
                                        )}`}
                                    >
                                        <i className="fs-5">
                                            <FontAwesomeIcon icon={nav.icon} />
                                        </i>
                                    </Link>
                                </li>
                            </Tippy>
                        ))}
                    </ul>
                    <ul className="list-unstyled">
                        <Tippy content="Settings" className="custom-tooltip">
                            <li className="mb-3">
                                <Link
                                    to="/settings"
                                    className={`rounded d-flex align-items-center justify-content-center text-decoration-none square_55 text--primary ${cx(
                                        `${active === '/settings' && 'active'}`,
                                    )}`}
                                >
                                    <i className="fs-5">
                                        <FontAwesomeIcon icon={faGear} />
                                    </i>
                                </Link>
                            </li>
                        </Tippy>
                        <li>
                            <Link className="d-flex align-items-center justify-content-center">
                                <figure
                                    className={`mb-0 rounded-circle overflow-hidden ${cx(
                                        'avatar',
                                    )}`}
                                >
                                    <img
                                        src="https://res.cloudinary.com/dmvyx3gwr/image/upload/v1703338394/ndk_music/avatar/NDK.jpg"
                                        alt=""
                                        className="w-100 h-100"
                                    />
                                </figure>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Menu;
