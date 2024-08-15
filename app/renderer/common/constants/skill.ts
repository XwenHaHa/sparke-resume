import { createUID } from '../utils';

export interface IRecommendSkill {
  uid: string;
  label: string;
  styles: {
    bg: string;
    font: string;
  };
}

const colors = [
  {
    // 绿色
    bg: '#f0f8ec',
    font: '#78c74f',
  },
  {
    // 灰色
    bg: '#f4f4f4',
    font: '#a3a7ab',
  },
  {
    // 橙色
    bg: '#fdf6ec',
    font: '#f0c588',
  },
  {
    // 蓝色
    bg: '#ecf5ff',
    font: '#67afff',
  },
  {
    // 红色
    bg: '#fef0ef',
    font: '#f88c8b',
  },
];

const RecommendSkill: IRecommendSkill[] = [
  {
    uid: createUID(),
    label: 'Vue.js',
    styles: colors[0],
  },
  {
    uid: createUID(),
    label: '数据双向绑定原理',
    styles: colors[2],
  },
  {
    uid: createUID(),
    label: 'React.js',
    styles: colors[4],
  },
  {
    uid: createUID(),
    label: 'VScode',
    styles: colors[2],
  },
  {
    uid: createUID(),
    label: 'Webpack',
    styles: colors[3],
  },
  {
    uid: createUID(),
    label: 'React Hooks',
    styles: colors[2],
  },
  {
    uid: createUID(),
    label: 'Taro',
    styles: colors[4],
  },
  {
    uid: createUID(),
    label: 'TypeScript',
    styles: colors[4],
  },
  {
    uid: createUID(),
    label: 'Electron',
    styles: colors[2],
  },
  {
    uid: createUID(),
    label: 'Git',
    styles: colors[0],
  },
  {
    uid: createUID(),
    label: '设计模式',
    styles: colors[1],
  },
  {
    uid: createUID(),
    label: '前端工程化',
    styles: colors[2],
  },
  {
    uid: createUID(),
    label: 'Echarts',
    styles: colors[3],
  },
];

export default RecommendSkill;
