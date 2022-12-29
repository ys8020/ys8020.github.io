// 模拟服务器上的传递过来的数据
// 这个是用来填充里面的数据的
let apiTypeData = [
    { name: "全部", keyword: "身份证实名", isnew: false },
    { name: "生活服务", keyword: "银行卡", isnew: false },
    { name: "金融科技", keyword: "短信", isnew: false },
    { name: "交通地理", keyword: "天气", isnew: false },
    { name: "充值缴费", keyword: "短信", isnew: false },
    { name: "数据智能", keyword: "手机归属地", isnew: false },
    { name: "企业工商", keyword: "IP", isnew: false },
    { name: "应用开发", keyword: "手机归属地", isnew: false },
    { name: "电子商务", keyword: "IP", isnew: false },
    { name: "吃喝玩乐", keyword: "视频", isnew: false },
    { name: "文娱视频", keyword: "视频", isnew: false },
    { name: "免费接口大全", keyword: "短信", isnew: true },
    { name: "短信", keyword: "身份证实名", isnew: false },
    { name: "汽车", keyword: "银行卡", isnew: false },
    { name: "核验", keyword: "银行卡", isnew: false },
    { name: "最新发布", keyword: "银行卡", isnew: true },
    { name: "API私有化部署", keyword: "身份证实名", isnew: true },
]
//先便利获取到里面的所有值
//先在外面弄一个空数组,因为不只有一个a数据,要装好多个
let html = ''
apiTypeData.forEach(function (v) {
    // console.log(v.name)
    //因为有一些是加粗的,利用isnew来判断是否需要加粗
    if (v.isnew) {
        //注意这里把keyword的值添加进a标签里面需要用到模板字符串,注意这里是需要用到反引号的
        html += `<a href="#" class="bold" data-keyword=${v.keyword}> ${v.name}</a>`
    } else {
        html += `<a href="#" data-keyword=${v.keyword}>${v.name}</a>`
    }
})
//现在得到的就是一个字符串样式的html
//   console.log(html)
//下一步就是带格式的把内容装进去

get('.apiList').innerHTML = html

//然后接下来就是把值装进去
get(".apiList").onclick = function (e) {
    if (e.target.tagName === 'A') {
        let a = e.target
        get('.api-font').innerHTML = a.innerHTML
        get("#api-input").placeholder = a.dataset.keyword
    }
}
// console.log( getAll(".apiList a"))
getAll(".apiList a").forEach(function(v,i){
    v.onclick=function(){
        getAll(".apiList a").forEach(function(v2){
            v2.className=''
        })
        v.className='on'
    }
   
})


//下面那个项目部分的数据渲染
//API列表区域 模拟服务器返回的数据
let listDataArr = [
    //第一行
    { img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false },
    { img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true },
    { img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false },
    { img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true },
    { img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true },

    //第二行
    { img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false },
    { img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true },
    { img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false },
    { img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true },
    { img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true },
    //第三行
    { img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false },
    { img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true },
    { img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false },
    { img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true },
    { img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true },
    //第四行
    { img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false },
    { img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true },
    { img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false },
    { img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true },
    { img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true },
]
let itemHTML = ''
listDataArr.forEach(function (v) {
    // console.log(v)
    itemHTML+=`<a class="item" href="${v.name==="身份证实名认证"? './apidetails.html':'#'}">
                <div class="show">
                    <span class="${v.isSpecial? 'active': ''}">企业专用</span>
                    <img src=./images/${v.img} alt="">
                    <p class="item-name">${v.name}</p>
                    <p class="${v.price==="免费"? 'item-green':'item-red'}">${v.price}</p>
                </div>
                <div class="hide" onclick=show()>
                    申请数据
                </div>
            </a>
            `;
})
get('.api-item .container').innerHTML=itemHTML




//接下来就是写模态框的了
// 最简单的方式就是直接在标签上面加上点击出现事件
//编写函数
function show(){
    get('.mask').style.display='block'
    get('.login-box').style.display='block'
}
//再写一个点击外面的遮罩让其消失的
get('.mask').onclick=function(){
    get('.mask').style.display='none'
    get('.login-box').style.display='none'
}

//下面就是编写函数点击扫码登录和账号登录的了
tab(getAll('.login-sign>span'),items=getAll('.item-all>div'),'blue')
// let btns=getAll('.login-sign>span')
// let items=getAll('.item-all>div')
// console.log(btns[0],items[0])
// btns.forEach(function(v, i){
//     //要先把之前的颜色消除掉,达到点谁谁变颜色的效果
//     v.onclick=function(){
//         btns.forEach(function(v1){
//             v1.className=''
//         });
//         btns[i].className='blue'
//         items.forEach(function(v2){
//             v2.style.display='none'
//         });
//         items[i].style.display='block'
//     }
// });

//密码眼镜的代码
//查看密码就是看的见的眼睛,否则就是看不见的眼睛
let pwd=get('.pwd-input input')
get('.pwd-btn').onclick=function(){
    if(pwd.type==='password'){
        pwd.type='text'
        get('.pwd-btn').className="iconfont icon-yanjing_xianshi_o pwd-btn"
    }else if(pwd.type==='text'){
        pwd.type='password'
        get('.pwd-btn').className="iconfont icon-yanjing_yincang_o pwd-btn"
    }
};

// 执行页尾的函数
footer()

//先弄一个输入事件,输入的时候这个叉叉出现
get('.name-input input').oninput=function(){
    get('.name-input i').style.display='block'
}

//点击叉叉删除里面的值事件
get('.name-input i').onclick=function(){
    get('.name-input input').value=''
    get('.name-input i').style.display=''
}

//再来一个表单提交事件
//老计划,主要提交的是表单,而不是按钮
get('form').onsubmit=function(){
    if(get('.name-input input').value.length>=3 && get('.name-input input').value.length<=6){
        get('.name-tips').style.display='none'
    }else {
        get('.name-tips').style.display='block'
        return false;
    }
    if(get('.pwd-input input').value.length>=6 && get('.name-input input').value.length<=12){
        get('.pwd-tips').style.display='none'
    }else {
        get('.pwd-tips').style.display='block'
        return false;
    }
    return true;
}

