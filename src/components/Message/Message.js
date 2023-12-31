import { faFile } from '@fortawesome/free-solid-svg-icons';
import styles from './Message.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MessageItem from '../MessageItem';
import Reply from '../Reply';

const cx = classNames.bind(styles);

function Message({ host, handleReply, data }) {
    return (
        <div className={cx('wrapper')}>
            <div className="d-flex align-items-start">
                {!host && (
                    <div className="me-2">
                        <figure className=" rounded-circle overflow-hidden square_40 mb-0">
                            <img
                                src="https://res.cloudinary.com/dmvyx3gwr/image/upload/v1703338394/ndk_music/avatar/NDK.jpg"
                                alt=""
                                className="w-100 h-100"
                            />
                        </figure>
                    </div>
                )}
                <div className={`w-100`}>
                    <div
                        className={`w-100 text-white d-flex flex-column ${
                            host ? 'align-items-end' : ''
                        }`}
                    >
                        {data.content.map((item, index) => {
                            let Component;
                            if (item.message.includes('.jpg')) {
                                Component = (
                                    <figure
                                        key={index}
                                        className=" rounded-2 overflow-hidden mb-2"
                                    >
                                        <img
                                            src={item.message}
                                            alt=""
                                            className="w-100 h-100"
                                        />
                                    </figure>
                                );
                            } else if (item.message.includes('.doc')) {
                                Component = (
                                    <div
                                        key={index}
                                        className={`bg--primary rounded-1 p-2 mb-2 ${cx(
                                            'content',
                                        )}`}
                                    >
                                        <div className="d-flex align-items-center">
                                            <i className="fs-4 p-2 me-2">
                                                <FontAwesomeIcon
                                                    icon={faFile}
                                                />
                                            </i>
                                            <div>
                                                <p className="mb-0">
                                                    lesson_1.docx
                                                </p>
                                                <span className=" text-uppercase">
                                                    13.02 kb
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else {
                                Component = (
                                    <div
                                        key={index}
                                        className={`bg--primary rounded-1 p-2 mb-2 ${cx(
                                            'content',
                                        )}`}
                                    >
                                        {data.reply.content && (
                                            <Reply data={data.reply} />
                                        )}
                                        {item.message}
                                        <p
                                            className={`mb-0 mt-2 ${cx(
                                                'time',
                                            )}`}
                                        >
                                            15:36
                                        </p>
                                    </div>
                                );
                            }
                            return (
                                <MessageItem
                                    key={index}
                                    host={host}
                                    handleReply={handleReply}
                                    content={Component}
                                    mess={item.message}
                                    _emoji={item.react}
                                />
                            );
                        })}
                        {data.status && (
                            <div
                                className={`${cx(
                                    'state__message',
                                )} d-flex align-items-center justify-content-end`}
                            >
                                <figure className=" rounded-circle overflow-hidden square_15 mb-0">
                                    <img
                                        src="https://res.cloudinary.com/dmvyx3gwr/image/upload/v1703338394/ndk_music/avatar/NDK.jpg"
                                        alt=""
                                        className="w-100 h-100"
                                    />
                                </figure>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;
