import React from 'react';
import styles from './NotFound.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const NotFound = ({onGoBack}) => (
    <div className={cx('not-found')}>
        <h2>
            존재하지 않는 페이지입니다.<br />
            404 - NOT FOUND
        </h2>
        <Button onClick={onGoBack} theme="outline">Back</Button>
    </div>
);

export default NotFound;