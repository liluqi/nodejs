const fs = require('fs');

const path = require('path')

const FILEPATH = path.join(__dirname,'massage.json')

//获取文件内容
const getMsg = () => {
        let data = fs.readFileSync(FILEPATH,'utf8') 
        // if (err) throw err;
        console.log(data);
        // 此时的data是字符串
        // 将字符串转化为数组
        var arr = JSON.parse(data)
        return arr;       
}

function insertMsg(name,content) {
    var arr = getMsg();
    let id = arr.length + 1;
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
