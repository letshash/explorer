/**
 * 
 */

const http_tool = appload('tool/http')
const config = appload('config')


exports.components = [
    'header',

    'address',

    'footer',
]



exports.datas = async function(query, callback, req, res)
{
    // console.log(query)
    // console.log(req.params)
    // 查询余额
    let amount = "ㄜ0:0"
    try{
        let jsonobj = await http_tool.json(config.miner_api_url+"/query", {
            action: "balance",
            address: req.params.address,
        })
        // let datas = jsonobj.datas
        // console.log(jsonobj)
        amount = jsonobj.total
    }catch(e){
        console.log(e)
        amount = "[error]"
    }
    // 返回
    callback(null, {
        pagetitle: "Hacash 地址 " + req.params.address,
        address: req.params.address,
        amount: amount,
    }, req, res)
}


