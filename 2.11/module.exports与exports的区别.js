//不是重点,是难点
//调用时以module.exports的指向为准


// module.exports = {
//     a:1
// }


module.exports.a = 1


// exports = {
//     a:1
// }


// const get = () => console.log(1)

if(module.exports === exports)console.log(2);
