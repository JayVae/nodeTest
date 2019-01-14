1. 直接在该目录下，运行：
node demo.js

2. 参考这个[网站](http://how2j.cn/k/nodejs/nodejs-express-start/1766.html)

3. Express 是一个方便开发者的 web 框架，可以让开发者可以方便地处理路由，Cookie, 静态文件，上传文件， RESTFULL风格等等常见操作。 
感觉步骤和hexo差不多！！

4. 在命令行中vim app.js 即新建了一个js文件。

5. 在mysqltest中，一个js中要调用另一个js文件的函数中，需要在另一个函数中将对应的函数暴露出来。
module.exports = {
 showAll,
 add
}

6. npm一般在哪里安装，在项目下

7. http-server用来启动一个服务器，需要用http方式访问哪个文件夹下的内容就在哪个文件夹下运行http-server即可。
指定端口命令：
http-server -p 8088