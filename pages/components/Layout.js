import React, {
    Component
} from "react";
import  Head from "next/head"

export default ({children}) => 
    <div>
        <Head>
            <title>Next-study-demo</title>
        </Head>
        {children}
        <footer>
            版权
        </footer>
    </div>
