$(document).ready(function() {
    $.shuicheMouse({
        type: 11,
        color: "rgba(187,67,128,1)"
    });
});
//type:int,鼠标类型, 赋值1 ~ 12任意一个数字,分别代表12种类型
//color:string/false,特效颜色,如果赋值false(这里的false是布尔类型),则会随机一种颜色。
//如果是string,支持类型(css颜色赋值类型都支持) 1. "#ffffff" 类型 2: rgb(255,255,255) 3: rgba(255,255,255, 0.8)