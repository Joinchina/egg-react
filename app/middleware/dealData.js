module.exports=function(code,data){
    let obj={};
    switch (code) {
        case 0:
            obj={
                code:0,
                msg:'成功',
                data:data
            }
            break;
        case -1:
            obj={
                code:-1,
                msg:'失败',
                why:data,
            }
            break;
        default:
            obj={
                code:1,
                msg:'未知',
                why:data,
            }
            break;
    }
    return obj
}
