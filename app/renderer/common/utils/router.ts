// renderer/common/utils/router.ts
/**
 * 判断是否属于外部链接
 * @param url 地址
 * @returns
 */
export function isHttpOrHttpsUrl(url: string): boolean {
  let regRule = /(http|https):\/\/([\w.]+\/?)\S*/;
  return regRule.test(url.toLowerCase());
}
