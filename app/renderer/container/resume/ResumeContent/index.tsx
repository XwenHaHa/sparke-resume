import React, { useState, useEffect } from 'react';
import './index.less';
import * as UseTemplateList from './UseTemplate';
import SparkeScrollBox from '@/src/common/components/SparkeScrollBox';
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@/common/messager';
import { RESUME_TOOLBAR_MAPS } from '@/src/common/constants/resume';
import PersonalForm from './UseForm/Personal';
import CertificateForm from './UseForm/Certificate';
import ContactForm from './UseForm/Contact';
import EducationForm from './UseForm/Education';
import SkillForm from './UseForm/Skill';
import WorkForm from './UseForm/Work';

function ResumeContent() {
  const HEAD_ACTION_HEIGHT = 92;
  const height = document.body.clientHeight;

  const [formName, setFormName] = useState('');
  const [showFormModal, setShowFormModal] = useState(false);

  // 监听messager事件
  useEffect(() => {
    document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    // 组件卸载时执行
    return () => {
      document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    };
  }, []);

  /**
   * 接收订阅事件的传参
   */
  const onReceive = (e: any) => {
    Messager.receive(e, (data: any) => {
      setShowFormModal(true);
      setFormName(data?.form_name);
    });
  };

  const onClose = () => {
    setShowFormModal(false);
    setFormName('');
  };

  return (
    <SparkeScrollBox maxHeight={height - HEAD_ACTION_HEIGHT}>
      <UseTemplateList.TemplateOne />
      {showFormModal && (
        <>
          {formName === RESUME_TOOLBAR_MAPS.personal && <PersonalForm onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.certificate && <CertificateForm onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.contact && <ContactForm onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.education && <EducationForm onClose={onClose} />}
          {formName == RESUME_TOOLBAR_MAPS.skill && <SkillForm onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.workPrefer && <WorkForm onClose={onClose} />}
        </>
      )}
    </SparkeScrollBox>
  );
}

export default ResumeContent;
