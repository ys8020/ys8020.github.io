
//接下来就是写模态框的了
// 最简单的方式就是直接在标签上面加上点击出现事件
//编写函数
function show() {
    get('.mask').style.display = 'block'
    get('.login-box').style.display = 'block'
}
//再写一个点击外面的遮罩让其消失的
// get('.mask').onclick=function(){
//     get('.mask').style.display='none'
//     get('.login-box').style.display='none'
// }
console.log(1111)
//下面就是编写函数点击扫码登录和账号登录的了
// tab(getAll('.login-sign>span'),items=getAll('.item-all>div'),'blue')
let btns = getAll('.login-sign>span')
let items = getAll('.item-all>div')
console.log(btns[0], items[0])
btns.forEach(function (v, i) {
    //要先把之前的颜色消除掉,达到点谁谁变颜色的效果
    v.onclick = function () {
        btns.forEach(function (v1) {
            v1.className = ''
        });
        btns[i].className = 'blue'
        items.forEach(function (v2) {
            v2.style.display = 'none'
        });
        items[i].style.display = 'block'
    }
});

//密码眼镜的代码
//查看密码就是看的见的眼睛,否则就是看不见的眼睛
let pwd = get('.pwd-input input')
get('.pwd-btn').onclick = function () {
    if (pwd.type === 'password') {
        pwd.type = 'text'
        get('.pwd-btn').className = "iconfont icon-yanjing_xianshi_o pwd-btn"
    } else if (pwd.type === 'text') {
        pwd.type = 'password'
        get('.pwd-btn').className = "iconfont icon-yanjing_yincang_o pwd-btn"
    }
};


//下面写一个输入事件
get('.name-input input').oninput = function () {
    get('.name-input .clear').style.display = 'block'
}
// 再写一个点击删除数据事件
get('.name-input .clear').onclick = function () {
    this.style.display = 'none'
    get('.name-input input').value = ''
}


// 下面就是表单验证提示按键了
//这里要注意的是提交事件是谁提交,是表单提交而不是按钮提交
get('.login-form').onsubmit = function () {
    //下一步判断在上面时候提交什么时候不提交
     // 这里要清楚一件事情就是如果return 后面就不会执行了

    if (get('.name-input input').value.length >= 3 && get('.name-input input').value.length <= 6) {
        get('.tips-name').style.display = 'none'
    }else {
        get('.tips-name').style.display = 'block'
        return false;
        
    }

    if (get('.pwd-input input').value.length >= 6 && get('.pwd-input input').value.length <= 12) {
        get('.tips-pwd').style.display = 'none'
    }else {
        get('.tips-pwd').style.display = 'block'
        return false;
    }

    return true;
}