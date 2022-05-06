import React, {Component} from "react";
import {Link} from "react-router-dom";
class Box extends React.Component
{
    constructor(props) {
        super(props);
        this.state=[
            {
                aid:'11',
                title:'我是新闻页'
            },
            {
                aid:'11',
                title:'我是新闻页'
            }
        ]
    }
    render() {
        return(
            <div>
                <h1>我是新闻组件</h1>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                    })
                    }
                </ul>
            </div>
        )
    }
}
export default Box
