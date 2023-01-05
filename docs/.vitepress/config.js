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
                { text: '前言', link: '/consideration#前言' },
                { text: '想清楚', link: '/consideration#想清楚' },
                { text: '说明白', link: '/consideration#说明白' },
              ]
            },
            {
              text: '我的提案',
              items: [
                { text: '分阶段目标', link: '/plan#分阶段目标' },
                { text: '实现步骤', link: '/plan#实现步骤' },
                { text: '云办公&私有云方案', link: '/plan#云办公&私有云方案' },
                { text: '数字化核心团队建设方案', link: '/plan#数字化核心团队建设方案' },
              ]
            },
            // {
            //     text: 'BP',
            //     items: [
            //       { text: '我的BP', link: '/bp#我的BP' },
            //     //   { text: '实现步骤', link: '/plan#实现步骤' },
            //     //   { text: '云办公&私有云方案', link: '/plan#云办公&私有云方案' },
            //     //   { text: '核心数字化团队建设方案', link: '/plan#核心数字化团队建设方案&私有云' },
            //     ]
            //   }
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