<template>

  <div>
  <div>arr</div>
    <div>
      <p>邹锐1</p>
      <p>邹锐2</p>
      <p>邹锐3</p>
   
    </div>
     <router-view></router-view>
  </div>
  
</template>

<script>
import es6page from "./views/es6page.vue";
export default {
  components:{
    es6page
  },
  data () {
    return {
      test:"es6 study"
    }
  },
  methods:{
    testApply(){
      let log = (...log)=>console.log(log.join(""));
      log("test apply");

        function add(...args){
        
        if(args.length===0) return;
        let all=0;
        
        for(let item of args){
          all += item;
        }
        log(all)
      }
     
      
      function myAddApply(...args){
      
        add.apply(this,args)
      }
      //let sum2 =  myAddApply(1,2,3);
      //let sum3 =  add(1,2,3);

      var name = "小白";
      let obj = {name:"小红"};
      function sayName(){
        return this.name;
      }
      log(sayName.call(obj));
      {
        log("apply实现js继承");
        
      }


    },
    runEs6(){
        {
          //...扩展运算符
          console.log(...[1,2,3]);
          let add=(x,y)=> x+y;
          let arr = [11,15,888];
          console.log( add(...arr) );
          let p = document.querySelectorAll("p");
          console.log(p[0])
          console.log(...p)

          const arr2 = [
            ...(1<0 ?["a"]:["b","d"]),
            "d"
          ]
          console.log(arr2);
         
          let arr3 = [0,1,2];
          let arr4 = [4,5,6];
          //arr3.push(arr4);
          Array.prototype.push.apply(arr3,arr4)
          console.log( arr3 )
          arr3.push(...[7,8,9])
          console.log(arr3);
          let a1=[1,2];
          let a2 = a1.concat();
          console.log(a2);
          a2[0]="shit"
          console.log(a1)
          console.log(a2);
          let b = [1,2,859]
         // let c = [...b];
         // console.log(c)
          let [...d] = [...b]
          console.log(d)
        }
    },
    runEs6_2(){
      {
        let a = [1,2];
        let b = [2,3];
        let c = [4,5];
        //es5 数组合并
        // a.concat(b,c);
        // console.log(a.concat(b,c))
        let d = [...a,...b,...c];
        console.log(d);
        a[0]=0
        console.log(d)
      }

      {

      }
    },
    runPromise(){
      {
        let ajax = function(){
          console.log("执行");
          let data = "before resolve";
          return new Promise(function(resolve,reject){
            resolve(data)
          })
        }
        ajax().then(function(data){
        //  console.log(data)
        },function(){
      //    console.log("this is promise project")
        })
      }

      {

        let ajax = function(data="data from ajax request"){
          console.log('request ajax data');
          return new Promise(function(resolve,project){
            resolve(data);
          })
        }

        ajax().then(function(data){
          console.log(data);
        }).then(function(){
          let data = "after requested";
          console.log(data);
          let data2 = "after requested 2"
        }).then(function(data2){
          console.log(data2)
        })
      }

      {
        let src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548584797793&di=d823430e903b94cfe52af15e9e99e2a6&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F07%2F66%2F16pic_766111_b.jpg";
        let src2 = "http://img.ivsky.com/img/tupian/pre/201807/31/caodi.jpg";
        let src3 = "http://img.ivsky.com/img/tupian/pre/201807/31/caodi-003.jpg";
       function loadImg(src){
          return new Promise((resolve,project)=>{
            let img = document.createElement("img");
            img.src = src;
            img.onload = function(){
              resolve(img);
            }
          })
        }

        function showImg(img){
          document.body.appendChild(img)
        }

        function showImgs(imgs){
          console.log(imgs)
          imgs.forEach(function(img){
        //    document.body.appendChild(img);
          })
        }

        //loadImg(src).then(showImg);
        Promise.all([
          loadImg(src),
          loadImg(src2),
          loadImg(src3)
        ]).then(showImgs)




      }

    },

    runSymbol(){
      {
        let a1 = Symbol();
        let a2 = Symbol();



      }
    },
    runObject(){
      {
        let o=1;
        let k=2;
        let ot = {o,k};
        console.log(ot)
      }
      {
        let a = {a:"A"}
        let b = {b:"B"}
        let d = {d:"D"}
        let c = Object.assign(a,b,d)
        console.log(c);
        a.a="A2";
        console.log(c);
      }
      {

      }
    }
  },
  mounted(){
  //  this.testApply();
   //   this.runEs6()
  //  this.runEs6_2();
    //  this.runPromise();
    //this.runSymbol();
   // this.runObject();
    /*{
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
    }
    {
       //str.includes()
      let str="abcd";
      log(str.includes("c"));
      log(str.includes("c"));
      log(str.startsWith("a"));
      log(str.endsWith("d"))
      log(str.repeat(2))
    }
    {
      let name="邹锐";
      let age = 27;
      log(`i am ${name},and my age i ${age}`);
    }
   {
     let str = '1';
     log(str.padStart(5,0));//agrs [num string...]
     log(str.padEnd(5,0))
   }
   {
     let user = {
       name:"邹锐",
       info:"fuck you"
     }
     let abc =(s)=>s;
     log(abc`i am ${user.name},${user.info}`)
   }
   {
     log("练习解构");
     let data = {
       name:"zourui",
       list:[
         {
           job:"前端",
           sal:"2000"
         }
       ]
     }
    let {name:fuckyouname,list:[{job:fuckingjob,sal:fuckingsal}]}=data;
    console.log(fuckyouname,fuckingjob,fuckingsal)
   }
   {
       log("数值扩展");
       log(Number.isFinite(15));
       log("25 ",Number.isInteger(25));
       log(Number.isInteger("25"));//参数必须是数字类型
       log("4.4  ",Math.trunc(4.4));
       log("4.6  ",Math.trunc(4.6));
       log(Math.sign(-5))
       log(Math.sign(0));
       log(Math.sign(1))
    }
    {
      log("数组扩展");
      let arr = Array.of(3,4,7,9,11);
      log(arr instanceof Array);
      log(arr);
      let empty = Array.of();
      log(empty);
    }
    {
      //Array.from()
      let p = document.getElementsByTagName('p');
      log(typeof p)
      let arr = Array.from(p,(item)=>{//自带Map遍历功能
        item.textContent += "hero";
        return item;
        }
      );
      log(arr);
      arr.forEach(item=>{
        log(item.textContent);
      })

      let arr2 = [5,6,7];
      log(arr2.fill("dame"));
      log(arr2.fill("shit",1,2));
    }
    {
      for(let index of ['a','b','c'].keys()){
        log(index)
      }
      let keys = ['a','b','c','d'].keys();
      log(keys);
      log(typeof keys);
      log(keys instanceof Array);
      log(keys.prototype)
    }
    {
      let arr = ['a','b','c'];
      for(let item in arr){
        log(item)
      }
    }*/
  }
  
  
}
</script>
<style scoped>
</style>