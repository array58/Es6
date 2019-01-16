<template>
  <div>{{test}}</div>
</template>

<script>
export default {
  data () {
    return {
      test:"es6 study"
    }
  },
  created(){
    {
      let a,b,rest;
      [a,b]=[1,2]
      console.log(a,b);
      [a,b]=[b,a];
      console.log(a,b);
      [a,b,...rest]=[11,12,15,16,17,18,19];
      console.log(a,b,rest)
    }
    {
     let a,b,c;
      [a,b,c]=[1,2,'fuck you'];
      console.log(a,b,c);
      let r =()=> ["fuckyou1","fuckyou2"];
      [a,b]=r();
      console.log(a,b)
    }
    {
      let f = ()=>[1,2,3,4,5];
      let a,b,c;
      [a,b,...c]=f();
      console.log(a,b,c)
    }
    {
      let a={c:"c",b:"b"};
      let {c,b}=a;
      console.log(c,b)
    }
    {
      let serverData = {
        name:"邹锐",
        list:[
          {
            title:"zr_title",
            content:"zr_content"
          }
        ]
      }
      let {name:takename,list:[{title:taketitle}]}=serverData;
      console.log(takename,taketitle);//对象解构赋值
    }
    {
      let regex = new RegExp("abc","i");//i 是忽略大小写
      let regex2 = new RegExp(/abc/i);
      console.log(regex.test("abcfuckyou"),regex2.test("abcfuckyuou2"));
      //es6
      let regex3 = new RegExp(/abc/ig,"i");//es6 正则创建对象写法
      console.log(regex3.flags);//regex.flags 显示正则对象的修饰符
    }
    {
      console.log("a",`\u0061`);
      console.log("s",`\u{20bb7}`);
    }
    {
      let s = "𠮷";
      let s2 = "我们";

      console.log("length",s.length);
      console.log(s2.length);
    }


    
  }
}
</script>
<style scoped>
</style>