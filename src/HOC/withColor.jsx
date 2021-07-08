import React from 'react';

const withColor = (Wcomponent) => {
    const newComponent = () => {
        return (
            <div style={{backgroundColor:"violet"}}>
                <Wcomponent/>
            </div>
        )
    }
    return newComponent
}
export default withColor