// 这个是那个粒子效果的js代码
//这个就是横幅那个粒子效果的js代码
CanvasParticle({
    vx: 4,	//小球x轴速度,正为右，负为左
    vy: 4,	//小球y轴速度
    height: 2,	//小球高宽，其实为正方形，所以不宜太大
    width: 2,
    count: 100,		//点个数
    color: "0, 0, 0", 	//点颜色
    stroke: "0,0,0", 		//线条颜色
    dist: 6000, 	//点吸附距离
    e_dist: 20000, 	//鼠标吸附加速距离
    max_conn: 10 	//点到点最大连接数
});

console.log('header')


//下面就是扫码测试旁边的那个次数渲染的了
let data = [
    { "times": 4000, "price": 1200, "unitPrice": "0.3000" },
    { "times": 8000, "price": 2000, "unitPrice": "0.2500" },
    { "times": 40000, "price": 8000, "unitPrice": "0.2000" }
];
let html = ''
data.forEach(function (v, i) {
    //这里我们要让第一个默认就是有选中的样式
    // console.log(v)
    //用反引号方便使用模板字符串
    if (i === 0) {
        html += `<span class='active'>${v.times}</span>`
    } else {
        html += `<span>${v.times}</span>`
    };
});
get('.quantity .qrcode').innerHTML = html

//下面再写点击事件
// 注意是通过数据渲染出来的数据不能直接使用之前获取节点的函数
let spanS = document.querySelectorAll('.qrcode span')
// console.log(spanS)
spanS.forEach(function (v, i) {
    //先一刀切
    v.onclick = function () {
        spanS.forEach(function (v2) {
            v2.className = ''
        })
        v.className='active'
        get('.price').innerHTML=`<span>¥${data[i].price}</span>(约 ${data[i].unitPrice}元/次),仅限企业实名购买;</p>`
    }
    
})

//下面就是选项卡的代码了
tab(getAll('.details-nav .container>span'),getAll('.details-content .container>div'),'on')
// 调用尾部函数
footer()