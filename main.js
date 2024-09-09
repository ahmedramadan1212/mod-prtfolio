// console.log('ahmed')
// let x=4
// console.log(x)

// let y=4
// y=1000.141
// console.log(y)

// const c=5.42
// console.log(c)

// let pe ={
//     a:'2',
//     b:'cd',
//     x:'zz'
// }
// console.log(pe.b)

// let q=40
// q='ahmed'
// q=true
// console.log(q)

// let x=10%5===0? 'a'  : 'b'

// console.log(x)
// console.log(5+ 2)
// console.log(5+ '3')
// console.log('5'- '3')
// console.log('10'+ '3')

// let x=[1,3,4,7,5]
// for(let num of x)
//     console.log(num)


// function add(a,b){
//     return a+b
// }

// const sum=(a,b) => a*b


// console.log(add(5,9))
// console.log(sum(5,9))

// var x=prompt("user")
// if(x==5)
//     console.log('ok')


// var btn=document.getElementById("btn");

// btn.onclick=function(){
//     for(let i=0;i<4;i++){
//         if(i%2==0)
//             btn.style.background="red"
//         else if(i%2!=0)
//             btn.style.background="yellow"
//     }
// }
// var btn1=document.getElementById("btn1");

// btn1.onclick=function(){
//     btn1.style.background="green"
// }
// var btn2=document.getElementById("btn2");

// btn2.onclick=function(){
//     btn2.style.background="green"
// }
// var btn3=document.getElementById("btn3");

// btn3.onclick=function(){
//     btn3.style.background="green"
// }
// var btn4=document.getElementById("btn4");

// btn4.onclick=function(){
//     btn4.style.background="green"
// }
// var btn5=document.getElementById("btn5");

// btn5.onclick=function(){
//     btn5.style.background="green"
// }
// var btn6=document.getElementById("btn6");

// btn6.onclick=function(){
//     btn6.style.background="green"
// }
// var aa1=document.getElementById("aa1");

// aa1.onclick=function(){
//     aa1.style.color="blue"
// }
// var aa2=document.getElementById("aa2");

// aa2.onclick=function(){
//     aa2.style.color="blue"
// }
// var aa3=document.getElementById("aa3");

// aa3.onclick=function(){
//     aa3.style.color="blue"
// }


// // const dom=document.createElementNS(".dom");
// // dom.innerHTML="ahmed dom";
 

// // const dom=document.querySelector(".dom")
// // header.innerHTML="aaaaaaaaaaaaaaaaaa";

// function sum(...number){
//     return number.reduce( (total,current) => total + current );
// }

// console.log(sum(1,1,1,1,1))





// تغيير لون العناصر عند الضغط أو التمرير
const items = document.querySelectorAll('.skill, .experience-item, .project');

items.forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'lightgreen';
    });

    item.addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // العودة إلى اللون الأصلي
    });

    item.addEventListener('click', function() {
        this.style.backgroundColor = 'green';
    });
});

// تغيير لون الروابط عند مرور السهم
const links = document.querySelectorAll('.nav a');

links.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = 'lightgreen'; // تغيير اللون إلى الأخضر الفاتح عند التمرير
    });

    link.addEventListener('mouseout', function() {
        this.style.color = ''; // إعادة اللون الأصلي عند مغادرة الفأرة
    });
});

// معالجة إرسال نموذج الاتصال
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    // رسالة تنبيه عند الضغط على زر الإرسال
    alert('The message was sent successfully');
});


