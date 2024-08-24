import { useSelector, useDispatch } from 'react-redux';
import { setStore } from '@/src/store/features/resumeModel';

function useUpdateResumeHook() {
  const updatePersonalHook = useUpdatePersonalHook();
  return <T>(stateKey: String, stateValue: T) => {
    const keys = stateKey.split('/') || [];
    if (keys[0]) {
      if (keys[0] === 'base') updatePersonalHook(keys[1], stateValue);
    }
  };
}

function useUpdatePersonalHook() {
  const dispatch = useDispatch();
  const base: TSResume.Base = useSelector((state: any) => state.resume.base);
  return <T>(stateKey: string, stateValue: T) => {
    dispatch(
      setStore({
        key: 'base',
        values: {
          ...base,
          [stateKey]: stateValue,
        },
      })
    );
  };
}

export default useUpdateResumeHook;
