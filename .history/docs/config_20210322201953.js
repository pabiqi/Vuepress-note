module.exports = {
  title: '法号王也',
  description: '挖坑填宝姐',
 themeConfig: {

sidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/fontend/' },
      { text: '小程序', link: '/wechat/' },
      { text: '面试', link: '/interview/' },
      { text: '关于', link: '/about/' },
    ],
    

sidebar:{
          
           title: "JavaScript",
           collapsable: true,
           children: [
             ["js/", "目录"],
             ["js/scope", "理解Js中的作用域-作用域链以及闭包"]
           ]
          },
          
            title: "工具",
            collapsable: true,
            children: [
              ["tools/", "目录"],
              ["tools/vuepress-build-blog", "手把手教你用vuepress搭建博客"]
            ]
           
        
    
  }

}