/**
 * @desc 基本信息
 * @author
 */
import React from 'react';
import '../../../styles/template-one.less';

function BaseInfo() {
  return (
    <div styleName="container">
      <p styleName="title">基本信息 Basic</p>
      <ul styleName="content">
        <li>院校：门头沟学院</li>
        <li>专业：软件工程</li>
        <li>学历：本科</li>
        <li>学年：2018.09 - 2022.06</li>
        <li>籍贯：广东·揭阳</li>
      </ul>
    </div>
  );
}

export default BaseInfo;
