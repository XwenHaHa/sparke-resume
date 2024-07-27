import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import { shell } from 'electron';
import ROUTER from '@/common/constants/router';
import SparkeButton from '@/src/common/components/SparkeButton';
import Logo from '@/assets/logo.png';
import Github from '@/assets/icon/github.png';
import Juejin from '@/assets/icon/juejin.png';

function ResumeAction() {
  const histroy = useHistory();
  const handleBack = () => {
    histroy.push(ROUTER.root);
  };
  const handleToJuejin = () => {
    shell.openExternal('https://juejin.cn/user/2762445644905719');
  };
  const handleToGithub = () => {
    shell.openExternal('https://github.com/XwenHaHa/sparke-resume.git');
  };
  const handleExportPDF = () => {};
  return (
    <div styleName="actions">
      <div styleName="operate">
        <div styleName="back" onClick={() => handleBack()}>
          <div styleName="icon">
            <img src={Logo} alt="" />
          </div>
          <div styleName="text">Sparke-Resume</div>
        </div>
        <SparkeButton size="middle" className="export-btn" onClick={() => handleExportPDF()}>
          导出PDF
        </SparkeButton>
      </div>
      <div styleName="btns">
        <div styleName="juejin">
          <img src={Juejin} alt="" onClick={() => handleToJuejin()} />
        </div>
        <div styleName="github">
          <img src={Github} alt="" onClick={() => handleToGithub()} />
        </div>
      </div>
    </div>
  );
}

export default ResumeAction;
