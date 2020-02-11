//获取json文件中的内容,并以数组的形式显示出来
const fs = require('fs');

const path = require('path')

const FILEPATH = path.join(__dirname, 'massage.json')

const getMsg = ()=>{
    // 使用 同步 的方式读
    let rs = fs.readFileSync(FILEPATH,'utf8')  
    // rs数据 是什么格式的？ string
    // json是一种特殊格式的字符串
    let arr = JSON.parse(rs) 
    // 把JSON字符串  ===》 JS中的数据-数组
    
    // console.log( typeof rs)
    console.log( arr )
    // console.log(rs)
    return arr;

}
getMsg();