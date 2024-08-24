/**
 * @desc 荣誉奖励
 */
import React from 'react';
import '../../../styles/template-one.less';
import { useSelector } from 'react-redux';

function Certificate() {
  const certificate: string = useSelector((state: any) => state.resume.certificate);
  const finallyList: string[] = certificate ? certificate.split('|') : [];
  return (
    <div styleName="container">
      <p styleName="title">荣誉奖励 Certificate</p>
      <ul styleName="content">
        {certificate &&
          finallyList.length > 0 &&
          finallyList?.map((item: string, index: number) => {
            return <li key={index}>{item}</li>;
          })}
      </ul>
    </div>
  );
}

export default Certificate;
