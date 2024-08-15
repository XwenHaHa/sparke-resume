/**
 * 荣誉证书Form
 */
import React from 'react';
import './index.less';
import SparkeModal from '@/src/common/components/SparkeModal';
import SparkeInput from '@/src/common/components/SparkeInput';
import { useSelector } from 'react-redux';

interface IProps {
  onClose: () => void;
}

function Certificate({ onClose }: IProps) {
  const certificate: string = useSelector((state: any) => state.resume.certificate);
  return (
    <SparkeModal.Dialog
      title="荣誉证书"
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
            <span styleName="require">*</span>证书：
          </div>
          <div styleName="right">
            <SparkeInput
              type="textarea"
              onChange={(e) => {}}
              rows={5}
              value={certificate || ''}
              placeholder="请输入你获得过的证书名称"
              allowClear={true}
            ></SparkeInput>
            <div styleName="tips"> * 多个证书以 | 分割</div>
          </div>
        </div>
      </div>
    </SparkeModal.Dialog>
  );
}

export default Certificate;
