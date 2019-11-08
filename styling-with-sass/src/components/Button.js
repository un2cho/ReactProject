import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({ children, size, color, outline, fullWidth, className, ...rest }) {
  //   return <button className={['Button', size].join(' ')}>{children}</button>;
  //   return <button className={`Button ${size}`}>{children}</button>;
  return (
    <button
      className={classNames(
        'Button',
        size,
        color,
        {
          outline,
          fullWidth
        },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'lime'
};

export default Button;
