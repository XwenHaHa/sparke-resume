export const RESUME_TOOLBAR_MAPS = {
  personal: 'personal', // 个人信息
  contact: 'contact', // 联系方式
  education: 'education', // 教育经历
  workPrefer: 'workPrefer', // 工作期望
  schoolExperience: 'schoolExperience', // 在校经历
  ProjectExperience: 'projectExperience', // 项目经验
  WorkExperience: 'workExperience', // 工作经历
  certificate: 'certificate', // 获奖证书
  evaluation: 'evaluation', // 自我评价
  skill: 'skill', // 技能清单
};

const RESUME_TOOLBAR_LIST: TSResume.SliderItem[] = [
  {
    key: RESUME_TOOLBAR_MAPS.personal,
    name: '个人信息',
    summary: '好好介绍自己，让对方了解你',
    require: true,
  },
  {
    key: RESUME_TOOLBAR_MAPS.education,
    name: '教育信息',
    summary: '介绍你的毕业院校和专业信息',
    require: false,
  },
  {
    key: RESUME_TOOLBAR_MAPS.contact,
    name: '联系方式',
    summary: '填写你的联系方式，让对方联系你',
    require: false,
  },
  {
    key: RESUME_TOOLBAR_MAPS.workPrefer,
    name: '工作期望',
    summary: '填写你期望的工作base地',
    require: false,
  },
  {
    key: RESUME_TOOLBAR_MAPS.schoolExperience,
    name: '在校经历',
    summary: '展示你的在校经历和人际关系',
    require: false,
  },
  {
    key: RESUME_TOOLBAR_MAPS.ProjectExperience,
    name: '项目经历',
    summary: '展示你的项目经历和对应的成果',
    require: false,
  },
  {
    key: RESUME_TOOLBAR_MAPS.WorkExperience,
    name: '工作经历',
    summary: '申请岗位相关的经验和能力',
    require: false,
  },
  {
    key: RESUME_TOOLBAR_MAPS.certificate,
    name: '获奖证书',
    summary: '得到过哪些奖项',
    require: false,
  },
  {
    key: RESUME_TOOLBAR_MAPS.evaluation,
    name: '自我评价',
    summary: '对自己做一个自我评价',
    require: false,
  },
  {
    key: RESUME_TOOLBAR_MAPS.skill,
    name: '技能清单',
    summary: '展示你擅长的技能，凸显你的个人能力',
    require: false,
  },
];

export default RESUME_TOOLBAR_LIST;
