export default {
    title: '工一数智',
    description: 'CEC',
    base: '/vision/',

    
    themeConfig: {
        logo: '/logo.svg',
        // siteTitle: false,

        outlineTitle: '大纲',
        aside: true,
        lastUpdated: true,

        algolia: {
            appId: 'N26XKP71HQ', // 需要替换
            apiKey: 'b68973e86f1cea6fe107eecb587b3d40', // 需要替换
            indexName: 'vision-index', // 需要替换
            placeholder: '请输入关键词',
            buttonText: '搜索'
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/cecgroup/vision' },
        ],

        nav: [
            { text: '工一数智', link: '/cec' }
            // {
            //   text: '工一',
            //   items: [
            //     { text: '关于我们', link: '/aboutus' },
            //     { text: '使命', link: '/mission' },
            //     { text: '愿景', link: '/vision' }
            //   ]
            // }
          ],
          sidebar: [
            {
              text: '工一数智',
              items: [
                { text: 'Introduction', link: '/introduction' },
                { text: 'Getting Started', link: '/getting-started' },
              ]
            }
          ],
          editLink: {
            pattern: 'https://github.com/cecgroup/vision/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
          }
    }

    
}