

//导入module.js文件
/*
    *代表module.js的所有成员
    无论何种方式导入，导入的内容都会被当作一个对象处理
    使用一个对象来接收所有成员
*/

//import * as m1 from './module.js' 
//统一导出还可以用如下方法
//import {PI,PI as pi,sum,Person} from './module.js'//还可以起别名 as pi

//import * as m1 from './module.js'
//console.log(m1.default(10,20))
//还可以这样写
import {default as add} from ".module.js"
console.log(m1.add(10,20))


