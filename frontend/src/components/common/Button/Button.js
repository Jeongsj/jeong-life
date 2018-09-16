import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

// 전달받은 className, onClick 등 값들이 rest 안에 있음
// JSX에서 ...을 사용하면 내부에 있는 값들을 props로 넣어줌
const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({
    children, to, onClick, disabled, theme = 'default'
}) => {
    // 비활성이나 링크 버튼은 div, 링크는 link
    const Element = (to && !disabled) ? Link : Div;

    return (
      <Element
        to={to}
        className={cx('button', theme, {disabled})}
        onClick={disabled ? () => null : onClick}>
        {children}
     </Element>
    );
}

export default Button;