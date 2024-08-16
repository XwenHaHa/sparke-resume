/**
 * @description 工作期望Form
 */
import React from 'react';
import './index.less';
import SparkeModal from '@/common/components/SparkeModal';
import SparkeInput from '@/common/components/SparkeInput';
import { useSelector } from 'react-redux';

interface IProps {
  onClose: () => void;
}
function Work({ onClose }: IProps) {
  const work: TSResume.Work = useSelector((state: any) => state.resume.work);
  return (
    <SparkeModal.Dialog
      title="工作期望"
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
            <span styleName="require">*</span>职 位 ：
          </div>
          <div styleName="right">
            <SparkeInput onChange={(e) => {}} value={work?.job || ''} placeholder="求职岗位" allowClear={true} />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>城 市 ：
          </div>
          <div styleName="right">
            <SparkeInput onChange={(e) => {}} value={work?.city || ''} placeholder="请输入意愿城市" allowClear={true} />
            <div styleName="tips"> * 多个地点以｜分割</div>
          </div>
        </div>
      </div>
    </SparkeModal.Dialog>
  );
}

export default Work;
