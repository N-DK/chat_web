import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import {
    faMagnifyingGlass,
    faUserGroup,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import Messenger from '~/components/Messenger';

const cx = classNames.bind(styles);

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

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className="p-3 pb-2">
                <div>
                    <div className="d-flex align-items-center justify-content-between">
                        <h4 className="text-white fw-semibold mb-0">
                            MESSENGER
                        </h4>
                        <div className="d-flex align-items-center">
                            <button
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddFriend"
                                className=" bg-transparent rounded-circle icon__border_circle square_40 me-2"
                            >
                                <i className="fs-6">
                                    <FontAwesomeIcon icon={faUserPlus} />
                                </i>
                            </button>
                            <button
                                data-bs-toggle="modal"
                                data-bs-target="#modalCreateGroup"
                                className=" bg-transparent rounded-circle icon__border_circle square_40"
                            >
                                <i className={`fs-6 ${cx('plus')}`}>
                                    <FontAwesomeIcon icon={faUserGroup} />
                                </i>
                            </button>
                        </div>
                    </div>
                    <div
                        className={`d-flex justify-content-center mt-3 ${cx(
                            'search',
                        )}`}
                    >
                        <input type="text" placeholder="Search..." />
                        <i className=" position-absolute top-50 translate-middle-y start-0 ms-3">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </i>
                    </div>
                </div>
                <div className={`mt-3 ${cx('container__message')}`}>
                    <Messenger />
                    <Messenger active={true} />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
