//这个是api分类部分的js代码


//这个是页头的轮播图效果
 //这个是轮播图的代码
 var mySwiper = new Swiper('.swiper', {
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    // 我们不需要垂直的,所有直接注释掉
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})


//这个办法是替换图片的src
let as=document.querySelectorAll('.modular li a')
as.forEach(function(v,i){
    // console.log(v.firstElementChild.src)
    //这个是原来的图片路径
    let src1=v.firstElementChild.src
    //这个是移出之后的图片路径
    let src2=src1.replace(".","-c.")
    //移入的效果
    v.onmouseover=function(){
        // console.log(src1)
        // console.log(src2)
        v.firstElementChild.src=src2
    }
    //移出的效果
    v.onmouseout=function(){
        v.firstElementChild.src=src1
    }
})


//这个是中间那个企业示例的轮播图
let item=document.querySelectorAll('.swiper-case .container .item')
let n=0
setInterval(function(){
    // 为了让他循环
    n++
    if(n===item.length){
        n=0
    }

    // n=++n%item.length  这个是余数的高级点的办法
    //这个是图片的轮播图
    item.forEach(function(v,i){
        //先一刀切
        v.className='item'
    })
    item[n].className='active item'
},2000)










//下面写一个滚动条事件
let roll=document.querySelector('.roll')
// console.log(document.documentElement.scrollTop)
//这个是到达某个位置的时候隐藏
window.onscroll = function () {
    if(scrollY > 500){
        roll.style.display='block'
    }else{
        roll.style.display='none'
    }
}
//点击回到顶部
roll.onclick=function(){
    scrollTo({
        top:0,
        behavior:"smooth"
    })
}

// 调用尾部函数
footer()