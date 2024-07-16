const ROUTER = {
  root: '/',
  resume: '/resume',
};

export default ROUTER;

export const ROUTER_KEY = {
  root: 'root',
  resume: 'resume',
};

export const ROUTER_ENTRY: TSRouter.Item[] = [
  {
    url: 'https://github.com/XwenHaHa/sparke-resume.git',
    key: 'intro',
    text: '介绍',
  },
  {
    url: ROUTER.resume,
    key: ROUTER_KEY.resume,
    text: '简历',
  },
  {
    url: 'https://github.com/XwenHaHa/sparke-resume.git',
    key: 'code',
    text: '源码',
  },
];
