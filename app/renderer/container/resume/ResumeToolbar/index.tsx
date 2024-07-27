import React from 'react';
import './index.less';
import SparkeScrollBox from '@/src/common/components/SparkeScrollBox';
import RESUME_TOOLBAR_LIST from '@/src/common/constants/resume';

function ResumeToolbar() {
  const height = document.body.clientHeight;
  return (
    <div styleName="slider">
      <div styleName="title">
        <span styleName="line" />
        全部模块
      </div>
      <SparkeScrollBox maxHeight={height - 180}>
        <div styleName="module">
          <div styleName="content">
            {RESUME_TOOLBAR_LIST.map((toolbar: TSResume.SliderItem) => {
              return (
                <div styleName="box" key={toolbar.key}>
                  <div styleName="info">
                    <i styleName="icon"></i>
                    <div styleName="text">
                      <div styleName="name">{toolbar.name}</div>
                      <div styleName="summary">{toolbar.summary}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SparkeScrollBox>
    </div>
  );
}

export default ResumeToolbar;
