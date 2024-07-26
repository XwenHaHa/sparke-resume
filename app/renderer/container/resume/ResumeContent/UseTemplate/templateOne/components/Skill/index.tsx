/**
 * @desc 技能
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';

function Skill() {
  return (
    <div styleName="content">
      <p styleName="label">技能证书 Skill</p>
      <ul styleName="skill">
        <li styleName="item">熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码</li>
        <li styleName="item">了解 React，了解并使用 Hooks 特性</li>
        <li styleName="item">阅读过 ElementPlus 部分优秀组件源码，并二次开发组内业务组件库</li>
        <li styleName="item">了解 Webpack 编译原理，编写过 Webpack 插件</li>
        <li styleName="item">了解 Electron，了解 Node.js 以及 Git 团队协作开发工具</li>
        <li styleName="item">解设计模式，对于特定场景，能采用合适的设计模式进行解决</li>
        <li styleName="item">了解前端工程化，开发过组内提效脚手架</li>
        <li styleName="item">了解Taro 开发微信小程序，具备良好的网络基础知识</li>
      </ul>
    </div>
  );
}

export default Skill;
