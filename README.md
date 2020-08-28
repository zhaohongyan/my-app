## 根据create-react-app搭建自己的项目

### 公共
1. router ✅
2. antd && theme ✅
3. model ✅
4. mock ✅
5. proxy ✅
6. request ✅ 可以使用 async await 代替 generator函数(redux-saga)
7. request 错误处理 ✅
8. loading  ✅
9. webpack alias ✅

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
```
yarn global add serve
serve -s build
```
### webpack
1. loader
2. pluign