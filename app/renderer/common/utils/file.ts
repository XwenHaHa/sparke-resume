import fs, { promises as fsPromiseAPIS } from 'fs';

const fileAction = {
  /**
   * 读取文件内容
   * @param path 路径
   * @returns
   */
  read: (path: string): Promise<string> => {
    return fsPromiseAPIS.readFile(path, { encoding: 'utf8' });
  },
  /**
   * 写入文件内容
   * @param path 路径
   * @param content 文件内容
   * @returns
   */
  write: (path: string, content: string): Promise<void> => {
    return fsPromiseAPIS.writeFile(path, content, { encoding: 'utf8' });
  },
  /**
   * 重命名文件
   * @param oldPath 旧地址
   * @param newPath 新地址
   * @returns
   */
  rename: (oldPath: string, newPath: string) => {
    return fsPromiseAPIS.rename(oldPath, newPath);
  },
  /**
   * 删除文件
   * @param path 路径
   * @returns
   */
  delete: (path: string) => {
    return fsPromiseAPIS.unlink(path);
  },
  /**
   * 是否存在文件
   * @param path 路径
   * @returns
   */
  hasFile: (path: string) => {
    return fsPromiseAPIS.access(path, fs.constants.F_OK);
  },
  /**
   * 是否可写入
   * @param path 路径
   * @returns
   */
  canWrite: (path: string) => {
    return fsPromiseAPIS.access(path, fs.constants.W_OK);
  },
  /**
   * 是否可读
   * @param path 路径
   * @returns
   */
  canRead: (path: string) => {
    return fsPromiseAPIS.access(path, fs.constants.R_OK);
  },
};

export default fileAction;
