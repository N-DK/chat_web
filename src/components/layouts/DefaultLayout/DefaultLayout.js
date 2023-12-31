import ChatRoom from './ChatRoom';
import Menu from './Menu';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Profile from '~/components/Profile';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const PROFILE = Profile;
const CHAT = Sidebar;

function DefaultLayout({ children }) {
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
        </div>
    );
}

export default DefaultLayout;
