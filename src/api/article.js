/**
 * article模块接口列表
 */

 import base from './base'; // 导入接口域名列表
 import axios from '@/http.js'; // 导入http中创建的axios实例
//  import qs from 'qs'; // 根据需求是否导入qs模块
 
 const article = {    
     // 新闻列表    
     articleList () {        
         return axios.get(`${base.sq}`);    
     },    
     // 新闻详情,演示    
     articleDetail (id, params) {        
         return axios.get(`${base.bd}`, {            
             params: params        
         });    
     },
     // post提交    
    //  login (params) {        
    //      return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));    
    //  }
     // 其他接口…………
 }
 
 export default article;
 