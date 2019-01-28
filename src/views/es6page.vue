<template>
  <div>
      <h1>es6 page</h1>
      <div class="set"></div>
      <div class="set"></div>
      <div class="set"></div>
      <div class="set"></div>
      <div class="set"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
      objectOf(){
          {
              let test = {name:"zourui",age:27}
              for (let [key,value] of Object.entries(test)){
                  console.log(key+":"+value)
              }
              
          }
      },
      es6Set(){
          {
              const s = new Set();
              let arr = [2,3,5,4,5,2,2];
              arr.forEach(x=>s.add(x));
            //  console.log(s);
              for(let i of s){
              //    console.log(i)
              }
          }
          {
              let arr = [2,3,5,4,5,2,2];
              const set = new Set(arr);
              //console.log(typeof set)
              //console.log(set.size)
              let arr2 = [...set];
            //  console.log(arr2)
              let eles = document.getElementsByClassName("set");
              
          //    console.log(eles);
              let eleset = new Set(eles);
          //    console.log(eleset)
              let arrset = [...eleset];
          //    console.log(arrset);
           //   console.log(arrset[0]==eleset[0])
             // console.log(arrset[0]==eles[0])
          }
          {
              //new Set()的用法
              //1.数组去重
              let array = [1,3,3,25];
              [...new Set(array)]
              //2.字符串去重
              let str = "ababc";
          //    console.log(...new Set( str ));
             // console.log( [...new Set( str )].join("") )
          }
          {
              let set = new Set();
              let a = NaN;
              let b = NaN;
              set.add(a);
              set.add(b);
             // console.log(set)
          }
          {
              let set = new Set();
              set.add({});
              set.add({});
             // console.log(set)
              //console.log([...set])
          }
          {
              console.log(Set.prototype.constructor)
          }
      }
  },
  mounted(){
    // console.log("c_mounted")
      //this.objectOf()
      this.es6Set()
  }
}
</script>
<style scoped>
</style>