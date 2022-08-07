module.exports = {
  title: 'Cloud9的空间',
  description: 'Just playing around',
  "dest": "public",
  "locales": {
    '/': {
      "lang": 'zh-CN'
    }
  },
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "locales": {
      '/': {
        "recoLocales": {
          "homeBlog": {
            "article": '文章', // 默认 文章
            "tag": '标签', // 默认 标签
            "category": '分类', // 默认 分类
            "friendLink": '友情链接' // 默认 友情链接
          },
          "pagation": {
            prev: '上一页',
            next: '下一页',
            go: '前往',
            jump: '跳转至'
          }
        }
      }
    },
    "subSidebar": "auto",
    "valineConfig": {
      "appId": 'Iobd1dNK8fqC6zIHjKgqsSfd-gzGzoHsz',// your appId
      "appKey": 'oTK7ws7zd4kDTtPIKT8uGCtx', // your appKey
    },
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "其他链接",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/daizhizhou",
            "icon": "reco-github"
          },
          {
            "text": "Gitee仓库",
            "link": "https://github.com/daizhizhou",
            "icon": "reco-mayun"
          },
          {
            "text": "博客园",
            "link": "https://www.cnblogs.com/mindzone",
            "icon": "reco-bokeyuan"
          },
          {
            "text": "哔哩哔哩",
            "link": "https://space.bilibili.com/2931347",
            "icon": "reco-bilibili"
          },
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "文章分类"
      },
      "tag": {
        "location": 3,
        "text": "文章标签"
      },
      "socialLinks": [
        { "icon" : "reco-github", "link": 'https://github.com/daizhizhou' },
        { "icon" : "reco-bilibili", "link": 'https://space.bilibili.com/2931347' },
        { "icon" : "reco-bokeyuan", "link": 'https://www.cnblogs.com/mindzone' },
        { "icon" : "reco-mayun", "link": 'https://gitee.com/daizhizhou' }
      ]
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Cloud9",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2022"
  },
  "markdown": {
    "lineNumbers": true
  }
}