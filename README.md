# 后端部分



在线（题库/考试/答题）（平台/系统）专科简易个人毕业设计



```bash
# 安装yarn和pnpm
npm install -g yarn pnpm
# 安装依赖
yarn install
# 连接docker
yarn docker
# 另开终端执行seed脚本
yarn seed
# 执行完毕之后开启服务
yarn dev

# 打包
yarn build
```



使用了那些库和工具： 

nestjs(express)、passport、prisma、jwt、yarn、nodejs

数据库使用docker + postgresql



目录结构：

/prisma---prisma文件用于实体和seed脚本执行

/src

    |------auth---权限管理

    |------category---题库格式

    |------common---过滤和请求格式

    |------npx---prisma服务

    |------question---问题模块

    |------users---用户模块

    |------app.module.ts---总模块

    |------main.ts---入口文件

/.env---全局变量

/docker-compose---docker运行配置文件

/package.json

/nest-cli.json---脚手架配置

/.eslintrc.js---代码规范

/.prettierrc---格式化规范

/tsconfig.json---ts配置文件



开发流程

开发工具：最新版vscode，chrome或者edge浏览器

nodejs版本要在16以上

数据库链接文件在docker-compose，可以去.env文件设置配置参数，也可以默认执行，执行yarn docker会在你的docker客户端开启一个postgresql服务，会自动配置用户和密码和数据库。



推荐vscode插件：

    zheqi-theme：在one dark pro的基础上增加了高对比度，我个人非常喜欢one dark代码颜色，可惜并没有提供高对比度，可以再装个background-cover插件给个图片，具体查看插件文档

    prisma：prisma的高亮插件






