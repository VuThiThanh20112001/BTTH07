var user_id = document.getElementById('user_id')

user_id.addEventListener('change',function(e){
    let a = user_id.value;
    console.log(a);
    let b = Array.from(a)
    // console.log(typeof(a))
    console.log(b.length)
    let c = b.length;
    // console.log(c);
    if(c>=5&&c<=12){
        let d = document.querySelector('.row+.check1');
        d.innerText="*Hợp lệ*";
        d.style.color='green'
    }
    else
    {
        let d = document.querySelector('.row+.check1');
        d.innerText="*Nhập mật khẩu 5-12 kí tự*";
        d.style.color='red'
    }
})
// ------------------------------------------------------------------------------------------------
var pass_word = document.getElementById('pass_word')

pass_word.addEventListener('change',function(e){
    let a = pass_word.value;
    console.log(a);
    let b = Array.from(a)
    // console.log(typeof(a))
    console.log(b.length)
    let c = b.length;
    // console.log(c);
    if(c>=7&&c<=12){
        let d = document.querySelector('.row+.check2');
        d.innerText="*Hợp lệ*";
        d.style.color='green'
    }
    else
    {
        let d = document.querySelector('.row+.check2');
        d.innerText="*Nhập mật khẩu 7-12 kí tự*";
        d.style.color='red'
    }
})
// -----------------------------------------------------------------------------------------------------------
var Name_ip = document.getElementById('Name')
Name_ip.onchange=function(event){
    let textInput = Name_ip.value;
    console.log(typeof(textInput))
    let a = /[^a-z]/igm;
    let b = a.test(textInput)
    if(b==1){
        let d = document.querySelector('.row+.check3');
        d.innerText="*Mật khẩu phải là chữ*";
        d.style.color='red'
        
    }
    else{
        let d = document.querySelector('.row+.check3');
        d.innerText="*Hợp lệ*";
        d.style.color='green'
    }
}
// -----------------------------------------------------------------------------------------------------------
var country = document.getElementById('country')
country.addEventListener('change',function(){
    let a = country.value;
    if(a>1)
    {
        let d = document.querySelector('.row+.check4');
        d.innerText="*Hợp lệ*";
        d.style.color='green'
    }
    else{
        let d = document.querySelector('.row+.check4');
        d.innerText="*zui nòng chọn lại*";
        d.style.color='red'
    }
})
// -----------------------------------------------------------------------------------------------------------
var ZIP_code = document.getElementById('ZIP_code')
ZIP_code.onchange=function(event){
    let textInput = ZIP_code.value;
    console.log(typeof(textInput))
    let a = /[^0-9]/;
    let b = a.test(textInput)
    if(b==1){
        let d = document.querySelector('.row+.check5');
        d.innerText="*Quí zị nhập k phải là số*";
        d.style.color='red'
    }
    else{
        let d = document.querySelector('.row+.check5');
        d.innerText="*Hợp lệ*";
        d.style.color='green'
    }
}
// -----------------------------------------------------------------------------------------------------------
var Email = document.getElementById('Email')
Email.onchange=function(event){
    let abc = Email.value;
    let a = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    let b = a.test(abc)
    console.log(b)
    if(b)
    {
        let d = document.querySelector('.row+.check6');
        d.innerText="*Hợp lệ*";
        d.style.color='green'
    }
    else{
        let d = document.querySelector('.row+.check6');
        d.innerText="*Email khum hợp lệ*";
        d.style.color='red'
    }
}
// -----------------------------------------------------------------------------------------------------------
var sex = document.querySelector('.abc')
var Male = document.querySelector('#Male')
var Female = document.querySelector('#Female')
sex.addEventListener('change',function(){
    let a = Male.value;
    let b = Female.value;
    if(a>0||b>0)
    {
        let d = document.querySelector('.row+.check7');
        d.innerText="*Hợp lệ*";
        d.style.color='green'
    }
    else{
        let d = document.querySelector('.row+.check7');
        d.innerText="*zui nòng chọn*";
        d.style.color='red'
    }
})
// -----------------------------------------------------------------------------------------------------------
var Language = document.querySelector('.abc1')
var English = document.getElementById('English')
var Non_English = document.getElementById('Non_English')
English.value=0;
Non_English.value=0;
var E;
var NE;
English.addEventListener('click',function(){
    if(English.value==0){
        English.value=1;
    }
    else{
        English.value=0;
    }
    
})
Non_English.addEventListener('click',function(){
    if(Non_English.value==0){
        Non_English.value=1;
    }
    else{
        Non_English.value=0;
    }
})
Language.addEventListener('change',function(){
    E = Number(English.value);
    console.log((E))
    NE = Number(Non_English.value);
    console.log((NE))
    if((E==1&&NE==0)||(E==0&&NE==1)){
        let d = document.querySelector('.row+.check8');
        d.innerText="*Hợp lệ*";
        d.style.color='green'
    }
    else{
        let d = document.querySelector('.row+.check8');
        d.innerText="*zui nòng chọn một*";
        d.style.color='red'
    }
})
// ---------------------------------------------------------------------------------------------------
var formm = document.querySelector('#form');
console.log(formm.value)