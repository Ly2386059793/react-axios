import React from "react";
import {fetchJson} from "fetch-json";
class FetchJsonp extends React.Component
{
    constructor(props) {
        super(props);
        this.state={
            list:[]
        }
    }
    getDate=()=>{
        let api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'
        fetchJson(api).then(res=>{
            return res.json()
        }).then(json=>{
            console.log(json)
        })
    }
    render() {
        return(
            <div>
                <h1>我是fetchjson数据</h1>
                <button onClick={this.getDate}>点击获取fetchjson</button>

            </div>
        )
    }
}
export default FetchJsonp
