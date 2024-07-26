import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import ROUTER from '@/common/constants/router';
import SparkeButton from '@/src/common/components/SparkeButton';

function ResumeAction() {
  const histroy = useHistory();
  const handleBack = () => {
    histroy.push(ROUTER.root);
  };
  const handleExportPDF = () => {};
  return (
    <div styleName="actions">
      <div styleName="back" onClick={() => handleBack()}>
        返回
      </div>
      <SparkeButton size="middle" className="export-btn" onClick={() => handleExportPDF()}>
        导出PDF
      </SparkeButton>
    </div>
  );
}

export default ResumeAction;
