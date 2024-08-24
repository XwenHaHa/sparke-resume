/**
 * @desc 头像
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';
import uploadIcon from '@/assets/icon/upload.png';
import ImageUpload from '@/src/common/components/SparkeUpload/ImageUpload';
import SparkeButton from '@/src/common/components/SparkeButton';
import useUpdateResumeHook from '@/src/container/resume/ResumeContent/useUpdateResumeHook';
import { useSelector } from 'react-redux';

function Avatar() {
  const updateResumeHook = useUpdateResumeHook();
  const base: TSResume.Base = useSelector((state: any) => state.resume.base);

  // 更新用户的简历头像
  const onUpdateUserAvatar = (avatarUrl: string) => {
    updateResumeHook<string>('base/avatar', avatarUrl);
  };

  return (
    <div styleName="box">
      {!base?.avatar && (
        <ImageUpload
          icon={uploadIcon}
          accept="image/*"
          multiple={false}
          onAfterChange={(files: TSUpload.File[]) => {
            onUpdateUserAvatar(files[0].base64URL);
          }}
        />
      )}
      {base?.avatar && (
        <div styleName="avatar">
          <img src={base?.avatar} />
          <div styleName="mask">
            <SparkeButton size="small" className="btn-change" onClick={() => onUpdateUserAvatar('')}>
              更换
            </SparkeButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default Avatar;
