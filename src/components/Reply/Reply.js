import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Reply.module.scss';
import classNames from 'classnames/bind';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Reply({ data }) {
    const [component, setComponent] = useState();

    const convertContent = (content) => {
        if (content.includes('.jpg')) {
            return '[Image]';
        } else if (content.includes('.doc')) {
            return '[File] ' + content;
        } else {
            return content;
        }
    };

    useEffect(() => {
        if (data.content.includes('.doc')) {
            setComponent(
                <i className="fs-3">
                    <FontAwesomeIcon icon={faFile} />
                </i>,
            );
        } else if (data.content.includes('.jpg')) {
            setComponent(
                <figure className="square_55 mb-0">
                    <img
                        src={data.content}
                        alt=""
                        className="w-100 h-100 rounded-2"
                    />
                </figure>,
            );
        }
    }, [data]);

    return (
        <div className={`${cx('wrapper')} rounded-2`}>
            <div className="p-2 mb-2 pt-3 pb-3">
                <div className={`${cx('container')}`}>
                    <div className="d-flex align-items-center">
                        {component && (
                            <div>
                                <div className="me-3">{component}</div>
                            </div>
                        )}
                        <div className=" overflow-hidden">
                            <h5 className="mb-1 fs-6">{data.user}</h5>
                            <span className={`fs-13 ${cx('message')}`}>
                                {convertContent(data.content)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reply;
