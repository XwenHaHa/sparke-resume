import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import { shell } from 'electron';
import { ROUTER_ENTRY } from '@/common/constants/router';
import { isHttpOrHttpsUrl } from '@/common/utils/router';
import Logo from '@/assets/logo.jpeg';

function Root() {
  const histroy = useHistory();

  const onRouterLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      histroy.push(router.url);
    }
  };
  return (
    <div styleName="root">
      <div styleName="container">
        <div styleName="logo">
          <img src={Logo} alt="" />
        </div>
        <div styleName="title">Sparke-Resume</div>
        <div styleName="tips">一个轻量级的模板简历制作平台</div>
        <div styleName="technology">React + TypeScript + Electron + Redux-Toolkit</div>
        <div styleName="actions">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div key={router.key} styleName="item" onClick={() => onRouterLink(router)}>
                {router.text}
              </div>
            );
          })}
        </div>
        <div styleName="copyright">
          <p>Copyright © 2024-{new Date().getFullYear()} All Rights Reserved. Copyright By XwenHaHa</p>
        </div>
      </div>
    </div>
  );
}

export default Root;
