import styles from './MessageItem.module.scss';
import classNames from 'classnames/bind';
import {
    faEllipsisVertical,
    faReply,
    faSmile,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState } from 'react';

const cx = classNames.bind(styles);

const emojis = [
    'https://static.xx.fbcdn.net/images/emoji.php/v9/tf9/1.5/32/2764.png',
    'https://static.xx.fbcdn.net/images/emoji.php/v9/te7/1.5/32/1f606.png',
    'https://static.xx.fbcdn.net/images/emoji.php/v9/td4/1.5/32/1f62e.png',
    'https://static.xx.fbcdn.net/images/emoji.php/v9/t21/1.5/32/1f622.png',
    'https://static.xx.fbcdn.net/images/emoji.php/v9/t1f/1.5/32/1f620.png',
    'https://static.xx.fbcdn.net/images/emoji.php/v9/tf/1.5/32/1f44d.png',
];

function MessageItem({ host, content, handleReply, mess, _emoji }) {
    const [visible, setVisible] = useState(false);
    const [emoji, setEmoji] = useState(_emoji);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const handleReact = (emoji) => {
        setEmoji((prev) => (emoji === prev ? undefined : emoji));
        setVisible(false);
    };

    return (
        <div>
            <div
                className={`${cx('container')} w-100 d-flex ${
                    host ? 'justify-content-end' : 'justify-content-start'
                }`}
            >
                <div
                    style={{ width: 'max-content' }}
                    className={`position-relative ${emoji ? 'mb-2' : ''}`}
                >
                    {content}
                    <div
                        className={`${
                            host ? ' flex-row-reverse' : ''
                        } d-flex text-white position-absolute top-50 translate-middle-y ${
                            host ? 'end-100 me-2' : 'start-100 ms-2'
                        } ${cx('action')}`}
                    >
                        <HeadlessTippy
                            visible={visible}
                            interactive
                            render={(attr) => (
                                <div
                                    className="bg-second rounded-5"
                                    tabIndex={-1}
                                    {...attr}
                                >
                                    <div className="bg-second rounded-5 list-unstyled d-flex p-3 pt-2 pb-2 align-items-center">
                                        {emojis.map((emo, index) => (
                                            <li
                                                onClick={() => handleReact(emo)}
                                                key={index}
                                                className={`p-1 pointer rounded-2 ${cx(
                                                    `${
                                                        emo === emoji
                                                            ? 'active'
                                                            : ''
                                                    }`,
                                                )}`}
                                            >
                                                <figure className="mb-0 square_32">
                                                    <img
                                                        src={emo}
                                                        alt=""
                                                        className="w-100 h-100"
                                                    />
                                                </figure>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            )}
                            onClickOutside={hide}
                        >
                            <Tippy content="React">
                                <i onClick={show} className="pointer pe-1 ps-1">
                                    <FontAwesomeIcon icon={faSmile} />
                                </i>
                            </Tippy>
                        </HeadlessTippy>
                        <Tippy content="Reply">
                            <i
                                onClick={() => handleReply(host, mess)}
                                className="pointer pe-2 ps-2"
                            >
                                <FontAwesomeIcon icon={faReply} />
                            </i>
                        </Tippy>
                        <Tippy content="More">
                            <i className="pointer pe-1 ps-1">
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </i>
                        </Tippy>
                    </div>
                    {emoji && (
                        <div
                            className={`position-absolute bottom-0 end-0 bg-second rounded-circle ${cx(
                                'emoji__container',
                            )}`}
                        >
                            <figure className="square_20 mb-0 d-flex align-items-center justify-content-center">
                                <img src={emoji} alt="" className="w-75" />
                            </figure>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MessageItem;
