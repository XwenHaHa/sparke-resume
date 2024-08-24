/**
 * 个人信息Form
 */
import React from 'react';
import './index.less';
import SparkeModal from '@/common/components/SparkeModal';
import SparkeInput from '@/src/common/components/SparkeInput';
import { useSelector } from 'react-redux';
import useUpdateResumeHook from '@/src/container/resume/ResumeContent/useUpdateResumeHook';

interface IProps {
  onClose: () => void;
}

function Personal({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const hobby: string = useSelector((state: any) => state.resume.hobby);
  const base: TSResume.Base = useSelector((state: any) => state.resume.base);
  return (
    <SparkeModal.Dialog
      title="个人信息"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
    >
      <div styleName="form">
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>姓名：
          </div>
          <div styleName="right">
            <SparkeInput
              onChange={(e) => {
                updateResumeHook<string>('base/username', e.target?.value || '');
              }}
              value={base?.username || ''}
              placeholder="请输入姓名"
              allowClear={true}
            ></SparkeInput>
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>籍贯：
          </div>
          <div styleName="right">
            <SparkeInput
              onChange={(e) => {
                updateResumeHook('base/hometown', e.target.value || '');
              }}
              value={base?.hometown || ''}
              placeholder="请输入籍贯"
              allowClear={true}
            ></SparkeInput>
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            爱好：
          </div>
          <div styleName="right">
            <SparkeInput
              type="textarea"
              onChange={(e) => {
                updateResumeHook('hobby', e.target.value || '');
              }}
              rows={5}
              value={hobby || ''}
              placeholder="请输入爱好"
              allowClear={true}
            ></SparkeInput>
          </div>
        </div>
      </div>
    </SparkeModal.Dialog>
  );
}

export default Personal;
