# wecat
- 仿豆瓣的微信小程序
- 通过定位确定城市
- 可以进行搜索，榜单显示

### 项目结构分析
```
    |-- images : 小程序图片存储路径
  	|-- pages: 小程序页面存储路径
  		|-- board 榜单页面
        |-- board.js 榜单页面逻辑
        |-- board.json 榜单页面配置
        |-- board.wxml 榜单页面html架子
        |-- board.wxss 榜单页面样式
      |-- common 公共页面
        |-- movie-list 公共页面html架子
        |-- movie-list 公共页面html样式
      |-- item 单个电影介绍页面
      |-- list 电影列表页面
      |-- search 电影搜索页面
      |-- splash 小程序引导页
  	|-- utils: 所需js文件
      |-- axios: 封装的发送请求的js文件
  	|-- app.json: 小程序配置文件
    |-- app.js: 小程序主页页面逻辑
    |-- app.wxss: 小程序主页面样式
  	|-- README.md: 应用描述说明的readme文件
```

### 项目获取数据接口
- 豆瓣接口
  - ``https://douban.uieee.com``
- 百度地图接口(用来获取城市定位)
  - ``https://api.map.baidu.com``
 
