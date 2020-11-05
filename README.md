## 根据create-react-app搭建自己的项目

### 公共
1. router ✅
2. antd && theme ✅
3. store && reducer ✅
4. mock ✅
5. proxy ✅
6. request ✅ 
  - request 错误处理, 401、500 跳转 ✅

7. loading  ✅
  - redux-saga 可以脱离业务，更好的控制loading **todo**
8. webpack alias ✅
9. Menu渲染 (selectedKeys, openKeys), 不匹配时跳转404


### 业务组件
1. Filter ✅
2. Table ✅

### 支持ts
1. create-react-app脚手架 支持
https://www.html.cn/create-react-app/docs/adding-typescript/

### 打包
1. 更改包名 ✅ 
- config/paths.js 更改 appBuild

### 启动静态服务器
```js
yarn global add serve // 全局如果安装过，则跳过
serve -s build
```
### webpack
1. loader
2. pluign