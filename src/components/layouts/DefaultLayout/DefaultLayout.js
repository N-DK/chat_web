import ChatRoom from './ChatRoom';
import Menu from './Menu';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <div className="d-flex h-100">
                <Menu />
                <div className="row flex-1 g-0">
                    <div className="col-3">
                        <Sidebar />
                    </div>
                    <div className="col-9">
                        <ChatRoom />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
