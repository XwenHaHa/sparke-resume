/**
 * 添加工具条模块
 * @param prevToolbarList  上一轮
 * @param currentToolbar   当前目标模块
 * @returns nextToolbarList 下一轮
 */
export const onAddToolbar = (
  prevToolbarList: TSResume.SliderItem[],
  currentToolbar: TSResume.SliderItem
): TSResume.SliderItem[] => {
  const addKeys = prevToolbarList.map((item: TSResume.SliderItem) => item.key);
  const nextToolbarList = [...Array.from(prevToolbarList)];
  if (!addKeys.includes(currentToolbar.key)) {
    nextToolbarList.push(currentToolbar);
  }
  return nextToolbarList;
};

/**
 * 删除工具条模块
 * @param prevToolbarList 上一轮
 * @param currentToolbar  当前模块
 * @returns nextToolbarList 下一轮
 */
export const onDeleteToolbar = (
  prevToolbarList: TSResume.SliderItem[],
  currentToolbar: TSResume.SliderItem
): TSResume.SliderItem[] => {
  const nextToolbarList = [...Array.from(prevToolbarList)];
  const findIndex = nextToolbarList.findIndex((item: TSResume.SliderItem) => item.key === currentToolbar.key);
  if (findIndex > -1) nextToolbarList.splice(findIndex, 1);
  return nextToolbarList;
};
