import { createSlice } from '@reduxjs/toolkit';

export interface ResumeState {
  base: {
    avatar: string;
    username: string;
    area: string;
    school: string;
    major: string;
    degree: string;
    hometown: string;
    onSchoolTime: {
      beginTime: string;
      endTime: string;
    };
  };
  contact: {
    phone: string;
    email: string;
    github: string;
    juejin: string;
  };
  work: {
    job: string;
    city: string;
    cityList: string[];
  };
  hobby: string;
  skill: string;
  skillList: string[];
  evaluation: string;
  evaluationList: string[];
  certificate: string;
  certificateList: string[];
  schoolExperience: {
    beginTime: string;
    endTime: string;
    post: string;
    department: string;
    content: string;
    parseContent: string[];
  }[];
  workExperience: {
    beginTime: string;
    endTime: string;
    post: string;
    department: string;
    content: string;
    parseContent: string[];
  }[];
  projectExperience: {
    beginTime: string;
    endTime: string;
    projectName: string;
    post: string;
    content: string;
    parseContent: string[];
    date: number;
  }[];
}
const initialState: ResumeState = {
  base: {
    avatar: '',
    username: 'Xwen',
    area: '广东·深圳',
    school: '门头沟学院',
    major: '软件工程',
    degree: '本科',
    hometown: '揭阳',
    onSchoolTime: {
      beginTime: '2018.09',
      endTime: '2022.06',
    },
  },
  contact: {
    phone: '178****0565',
    email: '929716663@qq.com',
    github: 'https://github.com/XwenHaHa',
    juejin: 'https://juejin.cn/user/2762445644905719',
  },
  work: {
    job: '前端工程师',
    city: '广州｜深圳｜揭阳',
    cityList: ['广州', '深圳', '揭阳'],
  },
  hobby: '羽毛球、爬山、健身、吉他、唱K',
  skill:
    '熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码｜了解 React，了解并使用 Hooks 特性｜阅读过 ElementPlus 部分优秀组件源码，并二次开发组内业务组件库｜了解 Webpack 编译原理，编写过 Webpack 插件｜了解 Electron，了解 Node.js 以及 Git 团队协作开发工具｜了解设计模式，对于特定场景，能采用合适的设计模式进行解决｜了解前端工程化，开发过组内提效脚手架｜了解Taro 开发微信小程序，具备良好的网络基础知识',
  skillList: [
    '熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码',
    '了解 React，了解并使用 Hooks 特性',
    '阅读过 ElementPlus 部分优秀组件源码，并二次开发组内业务组件库',
    '了解 Webpack 编译原理，编写过 Webpack 插件',
    '了解 Electron，了解 Node.js 以及 Git 团队协作开发工具',
    '了解设计模式，对于特定场景，能采用合适的设计模式进行解决',
    '了解前端工程化，开发过组内提效脚手架',
    '了解Taro 开发微信小程序，具备良好的网络基础知识',
  ],
  evaluation:
    '投身开源，sparke-ui 组件库作者| 具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境|具有代码洁癖，前后端分离，自我学习能力强，对新技术具有钻研精神',
  evaluationList: [
    '投身开源，sparke-ui 组件库作者',
    '具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境。',
    '具有代码洁癖，前后端分离，自我学习能力强，对新技术具有钻研精神',
  ],
  certificate: '深圳第一届牛马大赛参与奖',
  certificateList: ['深圳第一届牛马大赛参与奖'],
  schoolExperience: [
    {
      beginTime: '2018.09',
      endTime: '2019.09',
      post: '心理委员',
      department: '计算机1804班',
      content: '计划、组织和协调班级同学的心理健康活动，提供情绪支持与危机干预，以促进学生的心理健康和福祉',
      parseContent: ['计划、组织和协调班级同学的心理健康活动', '提供情绪支持与危机干预，以促进学生的心理健康和福祉'],
    },
  ],
  workExperience: [
    {
      beginTime: '2019.09',
      endTime: '2021.04',
      post: '前端工程师',
      department: '广东某大学计算机协会',
      content:
        '担任Sparke工作室前端工程师，与广东某大学合作，围绕微信小程序开发或主导多个应用｜任职期间基于微信小程序开发开发校内闲余市场，采用Vue.js主导开发，并与广东xxx科技有限公司合作，主导开发该公司官网及后台管理',
      parseContent: [
        '担任Sparke工作室前端工程师，与广东某大学合作，围绕微信小程序开发或主导多个应用',
        '任职期间基于微信企业号开发校内闲余市场，采用Vue.js主导开发，并与广东xxx科技有限公司合作，主导开发该公司官网及后台管理',
      ],
    },
  ],
  projectExperience: [
    {
      beginTime: '2024.07',
      endTime: '至今',
      projectName: 'sparkeResume 可视化简历平台',
      post: '前端工程师',
      content:
        'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版｜通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档｜通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版',
      parseContent: [
        'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版',
        '通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档',
        '通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版',
      ],
      date: 1621145137865,
    },
  ],
};

export const resumeModel = createSlice({
  name: 'resume',
  initialState,
  reducers: {},
});

export default resumeModel.reducer;
