import React from 'react';
import { Fstname } from '../App.jsx';
import withColor from '../HOC/withColor.jsx';

const Child3 = () => {
    return (
        <>
            <Fstname.Consumer>
                {(fname)=>{
                    return <h1>in child 3 name {fname}</h1>
                }}
            </Fstname.Consumer>
            
        </>
    )
}

export default withColor(Child3)