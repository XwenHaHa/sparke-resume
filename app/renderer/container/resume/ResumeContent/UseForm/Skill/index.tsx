/**
 * 技能清单Form
 */
import React from 'react';
import './index.less';
import SparkeModal from '@/src/common/components/SparkeModal';
import SparkeInput from '@/src/common/components/SparkeInput';
import { useSelector } from 'react-redux';
import RecommendSkill, { IRecommendSkill } from '@/common/constants/skill';

interface IProps {
  onClose: () => void;
}

function Skill({ onClose }: IProps) {
  const skill: string = useSelector((state: any) => state.resume.skill);
  return (
    <SparkeModal.Dialog
      title="技能清单"
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
            <span styleName="require">*</span>技能：
          </div>
          <div styleName="right">
            <div styleName="action">
              {RecommendSkill.map((skill: IRecommendSkill) => {
                return (
                  <div
                    styleName="label"
                    key={skill.uid}
                    style={{
                      color: skill?.styles?.font,
                      borderColor: skill?.styles?.font,
                      backgroundColor: skill?.styles?.bg,
                    }}
                    onClick={() => {
                      const value = `${skill}${skill ? '|' : ''}${skill.label}`;
                    }}
                  >
                    {skill.label}
                  </div>
                );
              })}
            </div>
            <SparkeInput
              type="textarea"
              onChange={(e) => {}}
              rows={5}
              value={skill}
              placeholder="例如 Vue、React"
              allowClear={true}
            />
            <div styleName="tips"> * 多个技能以 | 分割</div>
          </div>
        </div>
      </div>
    </SparkeModal.Dialog>
  );
}

export default Skill;
