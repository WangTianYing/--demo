export function randomStr(n) {
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ9876543210';
  let tmp = '',
    i = 0,
    l = str.length;
  for (i = 0; i < n; i++) {
    tmp += str.charAt(Math.floor(Math.random() * l));
  }
  return tmp;
}
//获取url 后参数
export function getUrlQueryString(key){
  var url =window.location.hash.split("?")[1];
  if (url) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var r = url.match(reg);
    if (r != null) {
      return decodeURIComponent(r[2]);
    }else {
      return null;
    }
  }
}

// export function getLocalUser(){
//   let userInfo = localStorage.getItem('userInfo') || '{}';
//   let user = JSON.parse(userInfo);
//   if(user.userId){
//     return user;
//   }else{
//     return ''
//   }
// };

//对字符串进行加密       
export function compileStr(str){
  return str&&window.btoa(window.encodeURIComponent(str))//编码;
 }

//字符串进行解密 
export function uncompileStr(str){      
 return str&&window.decodeURIComponent(window.atob(str))//解码。
 }