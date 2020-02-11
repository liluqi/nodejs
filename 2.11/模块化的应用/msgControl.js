//获取json文件中的内容,并以数组的形式显示出来
const fs = require('fs');

const path = require('path')

const FILENAME = 'massage.json';
//消除魔术数

const FILEPATH = path.join(__dirname,FILENAME)

//显示
const getMsg = ()=>{
    // 使用 同步 的方式读
    let rs = fs.readFileSync(FILEPATH,'utf8')  
    // rs数据 是什么格式的？ string
    // json是一种特殊格式的字符串
    let arr = JSON.parse(rs) 
    // 把JSON字符串  ===》 JS中的数据-数组
    
    // console.log( typeof rs)
    // console.log( arr )
    // console.log(rs)
    return arr;

}

//新增
const addMsg = (name, content) => {
    var arr = getMsg();
    // let id = arr.length + 1;
    //优化: 解决删除元素后,后者id与前者重复的问题
    let id = 1;
    // 现在数组中有元素，则length肯定是大于0
    if(arr.length) {
        // 在最后一个元素的id的基础上加1
        id = arr[arr.length-1].id + 1
    }
    console.log(id);
    
    let obj = {
        id,
        name,
        content,
        dt: Date.now()
    }
    arr.push(obj);
    var Str = JSON.stringify(arr);
    fs.writeFileSync(FILEPATH, Str, "utf8")
}

//删除
const delMsg = id => {
    let arr = getMsg();
    let idx = arr.findIndex(item => item.id === id)
    arr.splice(idx, 1);
    var Str = JSON.stringify(arr);
    fs.writeFileSync(FILEPATH, Str, "utf8")
}

module.exports = {
    getMsg,
    addMsg,
    delMsg
}