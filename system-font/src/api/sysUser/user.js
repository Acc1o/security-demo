import request from '@/utils/request'

//常量
const api_name='/admin/system/sysUser/'

export default{
    //列表
    getPageList(page,limit,searchObj){
      return request({
        //接口路径
        url: `${api_name}/${page}/${limit}`,
        method: 'get',//提交方式
        //参数
        params: searchObj
      })
    },
    //添加
    save(user){
      return request({
        //接口路径
        url: `${api_name}/save/`,
        method: 'post',//提交方式
        data: user //传递json格式
      })
    },
    //根据id查询
    getRoleById(id){
      return request({
        //接口路径
        url: `${api_name}getUserById/${id}`,
        method: 'get',//提交方式
      })
    },
    //添加
    update(user){
      return request({
        //接口路径
        url: `${api_name}/update/`,
        method: 'post',//提交方式
        data: user //传递json格式
      })
    },
    //根据id删除
    remove(id){
      return request({
        //接口路径
        url: `${api_name}/remove/${id}`,
        method: 'delete',//提交方式
      })
    }
}
