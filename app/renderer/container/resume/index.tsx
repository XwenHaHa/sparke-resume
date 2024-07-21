import React from 'react';
import './index.less';
import fileAction from '@/common/utils/file';
import { getAppPath } from '@/common/utils/appPath';

function Resume() {
  getAppPath().then((rootPath: string) => {
    console.log(rootPath, 'rootPath');
    fileAction.read(`${rootPath}app/renderer/container/resume/index.tsx`).then((data) => {
      console.log(data, '111');
    });
  });
  return <div>我是简历模块</div>;
}

export default Resume;
