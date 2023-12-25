import ChatRoom from './ChatRoom';
import Menu from './Menu';
import Sidebar from './Sidebar';

function DefaultLayout() {
    return (
        <div className="">
            <div className="d-flex">
                <Menu />
                <div style={{ flex: 1 }} className="row">
                    <div className="col-4">
                        <Sidebar />
                    </div>
                    <div className="col-8">
                        <ChatRoom />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
