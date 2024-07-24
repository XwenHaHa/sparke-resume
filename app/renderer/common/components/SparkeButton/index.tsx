import React from 'react';
import classnames from 'classnames';
import './index.less';

export interface Button {
  /**
   * 按钮大小
   */
  size?: 'middle' | 'big' | 'small';
  /**
   * 宽度
   */
  width?: number;
  /**
   * 自定义样式
   */
  style?: React.CSSProperties;
  /**
   * 子组件
   */
  children?: React.ReactNode | any;
  /**
   * 禁止
   */
  disabled?: boolean;
  /**
   * 样式名
   */
  className?: string;
  /**
   * 点击事件
   */
  onClick?: Function;
  /**
   * 是否显示边框
   */
  border?: boolean;
}

function SparkeButton({ size = 'small', style, width, children, disabled, className, onClick, border = true }: Button) {
  return (
    <div
      style={{ ...style, width: width }}
      className={className}
      styleName={classnames('es-button', {
        [`es-button-${size}`]: true,
        'es-button-disabled': disabled,
        'es-button-border': border,
      })}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {children}
    </div>
  );
}

export default SparkeButton;