import React from "react";
import {getDatelist} from "../http/api";
class News extends React.Component
{
    constructor(props) {
        super(props);
        this.state={
            list:[]
        }
    }
getDate=()=>{
   let e={
       a:"getPortalList",
       catid:20
   }
   getDatelist(e).then(res=>{
       if(res.status===200)
       {
           this.setState({
               list:res.data.result
           })
       }
   })
}
    render() {
        return(
            <div>
                <h1>练习获取axios</h1>
                <button onClick={this.getDate}>点击获取axios内容</button>
                <ul>
                    {
                        this.state.list.map((value,index)=>{
                            return <li key={index}>{value.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default News
