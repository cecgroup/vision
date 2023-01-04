export default {
    title: '工一数智',
    description: 'CEC',
    base: '/vision/',

    lastUpdated: true,
    // outlineTitle: '大纲',
    aside: true,
    
    themeConfig: {
        logo: '/logo.svg',
        // siteTitle: false,

        outlineTitle: '本页目录',
        // outline:2,
        
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
                  { text: '关于我们', link: '/index#关于我们' },
                  { text: '我们的使命', link: '/index#我们的使命' },
                  { text: '我们的愿景', link: '/index#我们的愿景' },
                ]
              },
            {
              text: '我的思考',
              items: [
                { text: '前言', link: '/suggestion' },
                { text: '想清楚', link: '/suggestion#' },
              ]
            },
            {
              text: '我的提案',
              items: [
                { text: 'Item C', link: '/item-c' },
                { text: 'Item D', link: '/item-d' },
              ]
            }
          ],
        // sidebar: getSideBar("./docs"),

        editLink: {
        pattern: 'https://github.com/cecgroup/vision/edit/main/docs/:path',
        text: 'Edit this page on GitHub'
        },
        //   footer: {
        //     // message: 'Released under the MIT License.',
        //     copyright: 'Copyright © 工一数智'
        //     }
    }

    
}