
var vAppHeader = new Vue({
    el: '#header',
    data: {
        search_str: "",
    },
    methods:{
        clickSearch: function(){
            var that = this,
                ss = that.search_str.replace(/\s+/i,'')
            if (ss) {
                if (ss.length>=31&&ss.length<=34) {
                    // alert("账户地址")
                    window.open('/address/'+ss)
                }else if (ss.length==64&&ss.replace(/[0-9a-f]+/gi,'')=='') {
                    if(ss.substr(0,4)=='0000'){
                        // alert("区块哈希")
                        window.open('/block/'+ss)
                    }else{
                        // alert("交易hx")
                        window.open('/tx/'+ss)
                    }
                }else if (parseInt(ss) > 0 && ss.replace(/[0-9]+/,'')=='') {
                    // alert("区块高度")
                    window.open('/block/'+ss)
                }else{
                    alert("未识别的查询内容")
                }
                
            }
        }
    },
})
