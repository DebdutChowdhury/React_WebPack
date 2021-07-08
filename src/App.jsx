import React, { createContext } from 'react';
import Child1 from "./Components/Child1.jsx"
import PortalsEx from './Components/PortalsEx.jsx';

const Fstname = createContext();

const App = () => {
    return (
        <>
            <Fstname.Provider value = {"Debdut"}>
                <Child1 />
            </Fstname.Provider>
            <PortalsEx/>
        </>
    )
}

export default App;
export {Fstname}