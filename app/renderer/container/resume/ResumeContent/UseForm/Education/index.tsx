/**
 * 教育信息Form
 */
import React from 'react';
import './index.less';
import SparkeModal from '@/src/common/components/SparkeModal';
import SparkeInput from '@/src/common/components/SparkeInput';
import { useSelector } from 'react-redux';

interface IProps {
  onClose: () => void;
}

function Education({ onClose }: IProps) {
  const base: TSResume.Base = useSelector((state: any) => state.resume.base);
  return (
    <SparkeModal.Dialog
      title="教育信息"
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
            <span styleName="require">*</span>学校：
          </div>
          <div styleName="right">
            <SparkeInput
              onChange={(e) => {}}
              value={base?.school || ''}
              placeholder="请输入学校"
              allowClear={true}
            ></SparkeInput>
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>专业：
          </div>
          <div styleName="right">
            <SparkeInput
              onChange={(e) => {}}
              value={base?.major || ''}
              placeholder="请输入专业"
              allowClear={true}
            ></SparkeInput>
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>学历：
          </div>
          <div styleName="right">
            <SparkeInput
              onChange={(e) => {}}
              value={base?.degree || ''}
              placeholder="本科？硕士？博士？"
              allowClear={true}
            ></SparkeInput>
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>学年：
          </div>
          <div styleName="right">
            <SparkeInput
              onChange={(e) => {
                const nextTime = {
                  ...base?.onSchoolTime,
                  beginTime: e.target.value,
                };
              }}
              value={base?.onSchoolTime?.beginTime || ''}
              placeholder="2018.09.01"
              allowClear={true}
              style={{ width: 300 }}
            ></SparkeInput>
            <span styleName="line">-</span>
            <SparkeInput
              onChange={(e) => {
                const nextTime = {
                  ...base?.onSchoolTime,
                  endTime: e.target.value,
                };
              }}
              value={base?.onSchoolTime?.endTime || ''}
              placeholder="2022.06.30"
              allowClear={true}
              style={{ width: 300 }}
            ></SparkeInput>
          </div>
        </div>
      </div>
    </SparkeModal.Dialog>
  );
}

export default Education;
