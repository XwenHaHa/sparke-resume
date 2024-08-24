/**
 * @desc 简单介绍
 * @author
 */
import React from 'react';
import './index.less';
import { useSelector } from 'react-redux';

function Synopsis() {
  const base: TSResume.Base = useSelector((state: any) => state.resume.base);
  const work: TSResume.Work = useSelector((state: any) => state.resume.work);
  const evaluation: string = useSelector((state: any) => state.resume.evaluation);
  const evaluationList: string[] = useSelector((state: any) => state.resume.evaluationList);
  return (
    <div styleName="content">
      <p styleName="name">{base?.username || ''}</p>
      <p styleName="job">{work?.job}</p>
      <p styleName="summary">{evaluation && evaluationList.join(',')}</p>
    </div>
  );
}

export default Synopsis;
