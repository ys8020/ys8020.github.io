// 先把函数获取函数写起来
function get(s){
    return document.querySelector(s)
};
function getAll(s){
    return document.querySelectorAll(s)
};
//输入框失去焦点的时候会验证一下里面的内容
let inputS=getAll('.font-input input')
let spanS=getAll('.font-input span')
// console.log(getAll('.font-input input'))
// console.log(getAll('.font-input span'))


//这个是用户名的输入框
inputS[0].onblur=function(){
    // 接下来就是判断里面的值
    if(inputS[0].value.length>20 || inputS[0].value.length<6){
        spanS[0].style.display='block'
    }else{
        spanS[0].style.display='none'
    }
console.log(inputS[0].value.length)
}

//接下来就是手机号了
inputS[1].onblur=function(){
    // 接下来就是判断里面的值
    if(inputS[1].value.length===11){
        spanS[1].style.display='none'
    }else{
        spanS[1].style.display='block'
    }
console.log(inputS[1].value.length)
}

//接下来就是手机验证码
inputS[2].onblur=function(){
    // 接下来就是判断里面的值
    if(inputS[2].value.length===4){
        spanS[2].style.display='none'
    }else{
        spanS[2].style.display='block'
    }
console.log(inputS[2].value.length)
}

//接下来就是密码框的验证了
inputS[3].onblur=function(){
    // 接下来就是判断里面的值
    if(inputS[3].value.length>12 || inputS[3].value.length<6){
        spanS[3].style.display='block'
    }else{
        spanS[3].style.display='none'
    }
console.log(inputS[3].value.length)
}


//下面就是写多选框和按钮的互动了
// console.log(get('.font input'))
// console.log(get('.register-btn').dataset.name)
//表单提交事件和颜色的改变就写在一起
// 先让他默认是不准提交的
get('.login-form').onsubmit=function(){
    return false;
}

get('.font input').onclick=function(){
    if(get('.register-btn').dataset.name==='pick'){
        get('.register-btn').className='register-btn'
        get('.register-btn').dataset.name='uncheck'
        get('.login-form').onsubmit=function(){
            return false;
        }
    }else if(get('.register-btn').dataset.name==='uncheck'){
        get('.register-btn').className='register-btn active'
        get('.register-btn').dataset.name='pick'
        get('.login-form').onsubmit=function(){
            // 提交时候先验证用户名
            if(inputS[0].value.length<=20 && inputS[0].value.length>=6){
                spanS[0].style.display='none'
            }else{
                spanS[0].style.display='block'
                return false;
            }
            //下面就是验证手机号
            if(inputS[1].value.length===11){
                spanS[1].style.display='none'
            }else{
                spanS[1].style.display='block'
                return false;
            }
            //手机验证码
            if(inputS[2].value.length===4){
                spanS[2].style.display='none'
            }else{
                spanS[2].style.display='block'
                return false;
            }
            //再下面就是密码了
            if(inputS[3].value.length<=20 && inputS[3].value.length>=6){
                spanS[3].style.display='none'
            }else{
                spanS[3].style.display='block'
                return false;
            }
            return true;
        }
    };
}
//获取验证码的定时器
get('.font-btn').onclick=function(){
    get('.font-btn').disabled = true; //按钮禁用
    let n=60
    let time=setInterval(function(){
        get('.font-btn').innerText=n
        n--
        if(n===-1){
            get('.font-btn').innerText='再次获取验证码'
            clearInterval(time)
            get('.font-btn').disabled = false; //按钮开启
        }
    },1000)
}

// // 点击删除按钮的时候消失按钮,并且清楚内容
getAll('.input-x').forEach(function(v,i){
    v.onclick=function(){
        getAll('.input-x')[i].style.display='none'
        inputS[i].value=''
    }
})

//先写输入框输入事件,输入的时候叉叉按钮出现
let xs=getAll('.input-x')
inputS.forEach(function(v,i){
    v.oninput=function(){
        xs[i].style.display='block'
    }
})




