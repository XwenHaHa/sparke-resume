import React, { useState, useEffect } from 'react';
import './index.less';
import SparkeScrollBox from '@/src/common/components/SparkeScrollBox';
import RESUME_TOOLBAR_LIST from '@/src/common/constants/resume';
import { onAddToolbar, onDeleteToolbar } from './utils';

function ResumeToolbar() {
  const height = document.body.clientHeight;
  // 定义已添加、未添加模块
  const [addToolbarList, setAddToolbarList] = useState<TSResume.SliderItem[]>([]);
  const [unAddToolbarList, setUnAddToolbarList] = useState<TSResume.SliderItem[]>([]);

  useEffect(() => {
    if (RESUME_TOOLBAR_LIST.length > 0) {
      let _addToolbarList: TSResume.SliderItem[] = [];
      let _unAddToolbarList: TSResume.SliderItem[] = [];
      RESUME_TOOLBAR_LIST.forEach((item: TSResume.SliderItem) => {
        if (item.require) _addToolbarList.push(item);
        if (!item.require) _unAddToolbarList.push(item);
      });
      setAddToolbarList(_addToolbarList);
      setUnAddToolbarList(_unAddToolbarList);
    }
  }, []);

  // 添加模块
  const onAddSliderAction = (toolbarItem: TSResume.SliderItem) => {
    const nextAddToolbarList = onAddToolbar(addToolbarList, toolbarItem);
    setAddToolbarList(nextAddToolbarList);
    const nextUnAddToolbarList = onDeleteToolbar(unAddToolbarList, toolbarItem);
    setUnAddToolbarList(nextUnAddToolbarList);
  };

  // 删除模块
  const onDeleteSliderAction = (toolbarItem: TSResume.SliderItem) => {
    const nextAddToolbarList = onDeleteToolbar(addToolbarList, toolbarItem);
    setAddToolbarList(nextAddToolbarList);
    const nextUnAddToolbarList = onAddToolbar(unAddToolbarList, toolbarItem);
    setUnAddToolbarList(nextUnAddToolbarList);
  };
  return (
    <div styleName="slider">
      <div styleName="addToolbar">
        <div styleName="title">
          <span styleName="line" />
          已添加模块
        </div>
        <SparkeScrollBox>
          {addToolbarList.length > 0 && (
            <div styleName="module">
              <div styleName="content">
                {addToolbarList.map((addToolbar: TSResume.SliderItem) => {
                  return (
                    <div styleName="box" key={addToolbar.key}>
                      <div styleName="info">
                        <i styleName="icon"></i>
                        <div styleName="text">
                          <div styleName="name">{addToolbar.name}</div>
                          <div styleName="summary">{addToolbar.summary}</div>
                        </div>
                        {addToolbar.require && <div styleName="tips">必选项</div>}
                        {!addToolbar.require && (
                          <div styleName="action">
                            <i styleName="edit" onClick={(e: React.MouseEvent) => {}} />
                            <i
                              styleName="delete"
                              onClick={(e: React.MouseEvent) => {
                                e.stopPropagation && e.stopPropagation();
                                onDeleteSliderAction(addToolbar);
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </SparkeScrollBox>
      </div>
      <div styleName="unAddToolbar">
        <div styleName="title">
          <span styleName="line" />
          未添加模块
        </div>
        <SparkeScrollBox>
          {unAddToolbarList.length > 0 && (
            <div styleName="module">
              <div styleName="content">
                {unAddToolbarList.map((unAddToolbar: TSResume.SliderItem) => {
                  return (
                    <div
                      styleName="box"
                      key={unAddToolbar.key}
                      onClick={(e: React.MouseEvent) => onAddSliderAction(unAddToolbar)}
                    >
                      <div styleName="info">
                        <i styleName="icon"></i>
                        <div styleName="text">
                          <div styleName="name">{unAddToolbar.name}</div>
                          <div styleName="summary">{unAddToolbar.summary}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </SparkeScrollBox>
      </div>
    </div>
  );
}

export default ResumeToolbar;
