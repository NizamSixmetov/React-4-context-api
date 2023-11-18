import { createContext, useState } from "react";

export const BoxColorContext = createContext('');
const BoxColorContextProvider = ({ children }) => {
    const [color, setColor] = useState('red')
    return (
        <BoxColorContext.Provider value={[color, setColor]}>
            {children}
        </BoxColorContext.Provider>
    )
}
export default BoxColorContextProvider;