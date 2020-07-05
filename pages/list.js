import React, {
    Component
} from "react";
import "../styles/list.css";
import Layout from "./components/Layout.js"

export default class List extends Component {
    state = {
        list: [1,2,3],
    };
    render(){
        return (
            <Layout>
                <div>
                    {
                        this.state.list.map(item => {
                            return <li key={item}>{item}</li>
                        })
                    }
                </div>
            </Layout>
            
        )
    }
}