/**
 * @desc 在校经历
 * @author
 */
import './index.less';
import React from 'react';

function Post() {
  return (
    <div styleName="content">
      <p styleName="label">在校经历 Post</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>2018.09-2019.09</p>
            <p>心理委员</p>
          </div>
          <div styleName="right">
            <p>计算机1804班</p>
            <p>计划、组织和协调班级同学的心理健康活动，提供情绪支持与危机干预，以促进学生的心理健康和福祉</p>
          </div>
        </li>
        <li styleName="flex">
          <div styleName="left">
            <p>2019.09-2021.04</p>
            <p>前端工程师</p>
          </div>
          <div styleName="right">
            <p>广东某大学计算机协会</p>
            <p>
              担任Sparke工作室前端工程师，与广东某大学合作，围绕微信小程序开发或主导多个应用｜任职期间基于微信小程序开发开发校内闲余市场，采用Vue.js主导开发，并与广东xxx科技有限公司合作，主导开发该公司官网及后台管理
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Post;
