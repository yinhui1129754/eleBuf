import axios from "axios"
/**
* @des 重写axios的一些请求方便后期我们进行相关的管理
* @author 尹辉
* @date 2019-02-28
* @param 无
* @example 无
* @return 无
*/
let ajax ={
    /**
    * @des 发起get请求
    * @author 尹辉
    * @date 2019-02-28
    * @param url:请求地址,config:一些axios的配置项
    * @example 引入对象import {ajax} from '@/../public/common.js'
    * ajax.get("http://localhost/test.php",{'d':20}).then(function(d){
    *    console.log(d);
    * })
    * @return 返回一个promise对象
    */
    get:function(url,config){
       return  new Promise(function(success,fail){
            axios.get(url,config).then(function(d){
                success(d);
            }).catch(function(d){
                fail(d);
            });
        }); 
    },
    /**
    * @des 发起post请求
    * @author 尹辉
    * @date 2019-02-28
    * @param url:请求地址,config:一些axios的配置项
    * @example 引入对象 import {ajax} from '@/../public/common.js'
    * ajax.post("http://localhost/test.php",{'d':20}).then(function(d){
    *    console.log(d);
    * })
    * @return 返回一个promise对象
    */
    post:function(url,config){
        return new Promise(function(success,fail){
            axios.post(url,config).then(function(d){
                success(d);
            }).catch(function(d){
                fail(d);
            });
        }); 
    }
};

export {ajax};