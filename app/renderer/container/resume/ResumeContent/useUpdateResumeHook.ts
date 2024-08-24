import { useSelector, useDispatch } from 'react-redux';
import { setStore } from '@/src/store/features/resumeModel';

/**
 * 更新简历信息，这是修改redux简历信息的唯一方法
 * @param {string[]} stateKey 关键key，如路径为 [base/username] 表示修改 base 对象下的 username
 * @param {string} stateValue 对应key修改的值
 */
function useUpdateResumeHook() {
  const updatePersonalHook = useUpdatePersonalHook();
  return <T>(stateKey: String, stateValue: T) => {
    const keys = stateKey.split('/') || [];
    if (keys[1]) {
      updatePersonalHook(keys[1], stateValue, keys[0]);
    } else {
      updatePersonalHook('', stateValue, keys[0]);
    }
  };
}

function useUpdatePersonalHook() {
  const dispatch = useDispatch();
  const base: TSResume.Base = useSelector((state: any) => state.resume.base);
  return <T>(stateKey: string, stateValue: T, moduleName: string) => {
    dispatch(
      setStore({
        key: moduleName,
        values: stateKey.length
          ? {
              ...base,
              [stateKey]: stateValue,
            }
          : stateValue,
      })
    );
  };
}

export default useUpdateResumeHook;
