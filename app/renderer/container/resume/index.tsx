import React from 'react';
import './index.less';
import SparkeInput from '@/src/common/components/SparkeInput';
import ImageUpload from '@/src/common/components/SparkeUpload/ImageUpload';

function Resume() {
  return (
    <div>
      <SparkeInput value={2} />
      <ImageUpload />
    </div>
  );
}

export default Resume;
