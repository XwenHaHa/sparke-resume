/**
 * 联系方式Form
 */
import React from 'react';
import './index.less';
import SparkeModal from '@/src/common/components/SparkeModal';
import SparkeInput from '@/src/common/components/SparkeInput';
import { useSelector } from 'react-redux';

interface IProps {
  onClose: () => void;
}

function Contact({ onClose }: IProps) {
  const contact: TSResume.Contact = useSelector((state: any) => state.resume.contact);
  return (
    <SparkeModal.Dialog
      title="联系方式"
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
            <span styleName="require">*</span>电话：
          </div>
          <div styleName="right">
            <SparkeInput
              onChange={(e) => {}}
              value={contact?.phone || ''}
              placeholder="请输入电话号码"
              allowClear={true}
            ></SparkeInput>
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>邮箱：
          </div>
          <div styleName="right">
            <SparkeInput
              onChange={(e) => {}}
              value={contact?.email || ''}
              placeholder="请输入邮箱"
              allowClear={true}
            ></SparkeInput>
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>Github：
          </div>
          <div styleName="right">
            <SparkeInput
              onChange={(e) => {}}
              value={contact?.github || ''}
              placeholder="请输入Github地址"
              allowClear={true}
            ></SparkeInput>
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>掘金：
          </div>
          <div styleName="right">
            <SparkeInput
              onChange={(e) => {}}
              value={contact?.juejin || ''}
              placeholder="请输入掘金地址"
              allowClear={true}
            ></SparkeInput>
          </div>
        </div>
      </div>
    </SparkeModal.Dialog>
  );
}

export default Contact;
