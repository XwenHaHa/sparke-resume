import React from 'react';
import './index.less';
import * as UseTemplateList from './UseTemplate';
import SparkeScrollBox from '@/src/common/components/SparkeScrollBox';

function ResumeContent() {
  const HEAD_ACTION_HEIGHT = 92;
  const height = document.body.clientHeight;
  return (
    <div styleName="resumeBox">
      <SparkeScrollBox maxHeight={height - HEAD_ACTION_HEIGHT}>
        <UseTemplateList.TemplateOne />
      </SparkeScrollBox>
    </div>
  );
}

export default ResumeContent;
