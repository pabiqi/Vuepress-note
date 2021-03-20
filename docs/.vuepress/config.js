module.exports = {
  title: "My Note",
  description: "This is a note.",
  base: '/note/' ,
  head: [
    ['meta', { name: 'Keywords', content: 'java日记,java笔记,java面试' }],
    ['meta', { name: 'description', content: 'java日记用心分享' }],
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }]
],
  plugins: {
    "vuepress-plugin-auto-sidebar": {}
  
      [
          '@vuepress/last-updated',
          {
              transformer: (timestamp) => {
                  moment.locale("zh-cn");
                  return moment(timestamp).fromNow("LLLL")
              }
          }
      ],

      '@vuepress/back-to-top':true,
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',
            // 其他的 Vssue 配置
            owner: 'pabiqi',//github用户名
            repo: 'note',//需要评论的仓库
            clientId: '3799a5a727218ce85075',
            clientSecret: 'f2c4fe49bb6a56fd86116caa71b1a37d793e56a2',
            autoCreateIssue:true //自动初始化仓库
        },
        
        "cursor-effects":
      {
        size: 3,                    // size of the particle, default: 2
        shape: ['circle'],  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      },

      ['copyright',
    	{
            minLength: 10,
            noCopy: true,
    	},
    ],

    "dynamic-title": {
      showIcon: "/assets/img/logo.png",
      showText: "(/≧▽≦/)你来啦！",
      hideIcon: "/assets/img/favicon.ico",
      hideText: "(●—●)喔哟，崩溃啦！",
      recoverTime: 2000
  },
        






  
  },

    

	themeConfig: {
    	logo: '/assets/img/logo.png',
	nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],

    sidebar: 'auto',

    sidebar: [
      '',
      'about',
      {
          title: '测边框分层',   // 必要的
          path: '/morethread/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
              '/morethread/bf',
              '/morethread/test1',
          ]
      }
  ],


  sidebar: {
    '/foo/': [
      '',     /* /foo/ */
      'one',  /* /foo/one.html */
      'two'   /* /foo/two.html */
    ],

    '/bar/': [
      '',      /* /bar/ */
      'three', /* /bar/three.html */
      'four'   /* /bar/four.html */
    ],

    // fallback
    '/': [
      '',        /* / */
      'contact', /* /contact.html */
      'about'    /* /about.html */
    ]
  },




 

	}
}
