//尾部公共html模块代码
function get(s) {
    return document.querySelector(s);
}
console.log(get('.footer'))
//获取所有元素
function getAll(s) {
    return document.querySelectorAll(s);
}
//抽取尾部的html代码
function footer() {
    //注意这个地方用反引号,才能换行搞代码
    let html = `
                <ul>
                    <li>
                        <p>联系与支持</p>
                        <a href="#">400-882-7715</a>
                        <a href="#">售前咨询</a>
                        <a href="#">客服&售后</a>
                        <a href="#">常见问题</a>
                        <a href="#">急速工单</a>
                        <a href="#">投诉与建议</a>
                    </li>
                    <li>
                        <p>关于源码</p>
                        <a href="#">400-882-7715</a>
                        <a href="#">售前咨询</a>
                        <a href="#">客服&售后</a>
                        <a href="#">常见问题</a>
                        <a href="#">急速工单</a>
                        <a href="#">投诉与建议</a>
                    </li>
                    <li>
                        <p>快速入口</p>
                        <a href="#">400-882-7715</a>
                        <a href="#">售前咨询</a>
                        <a href="#">客服&售后</a>
                        <a href="#">常见问题</a>
                        <a href="#">急速工单</a>
                        <a href="#">投诉与建议</a>
                    </li>
                    <li>
                        <p>产品服务</p>
                        <a href="#">400-882-7715</a>
                        <a href="#">售前咨询</a>
                        <a href="#">客服&售后</a>
                        <a href="#">常见问题</a>
                        <a href="#">急速工单</a>
                        <a href="#">投诉与建议</a>
                    </li>
                    <li>
                        <p>解决方案</p>
                        <a href="#">400-882-7715</a>
                        <a href="#">售前咨询</a>
                        <a href="#">客服&售后</a>
                        <a href="#">常见问题</a>
                        <a href="#">急速工单</a>
                        <a href="#">投诉与建议</a>
                    </li>
                    <li class="container-right">
                        <span>微信公众号</span>
                        <span class="small">源码时代</span>
                        <img src="./images/wechat-white.png" alt="">
                    </li>
                </ul>
                <div class="container-bottom">
                    <p>
                        <img src="./images/bei2.png" alt="">
                        <img src="./images/bei1.png" alt="">
                        <a href="#">增值电信业务经营许可证：蜀B2-20180596 </a>
                        <a href="#"> 蜀ICP备15006450号-3</a>
                        <a href="#"> 营业执照</a>
                    </p>
                    <span>源码大数据股份有限公司©版权所有</span>
                </div>
        `;
        get('.footer').innerHTML=html
}


//下面就是封装选项卡的模板函数
//注意参数的位置就可以的了
function tab(buttons,contents,a) {
    // let btnS = getAll('.details-nav span')
    // let divS = getAll('.details-content .container div')
    // console.log(btnS, divS)
    buttons.forEach(function (v, i) {
        //都是先一刀切
        v.onclick = function () {
            buttons.forEach(function (v2) {
                v2.className = ''
            })
            buttons[i].className =a
            // console.log(buttons[i].className)
            //还是要先一刀切
            contents.forEach(function (v2) {
                v2.style.display = 'none'
            })
            contents[i].style.display = 'block'
        }
    })
}
