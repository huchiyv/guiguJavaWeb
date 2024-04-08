

//导入module.js文件
/*
    *代表module.js的所有成员
    无论何种方式导入，导入的内容都会被当作一个对象处理
    使用一个对象来接收所有成员
*/
import * as m1 from './module.js' 
console.log(m1.PI)
console.log(m1.PI2)
console.log(m1.sum(10,20))
console.log((new m1.Person("tom",22)).sayHello())