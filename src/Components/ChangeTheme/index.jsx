import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../context-api/ThemeContext'

const ChangeTheme = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    const handleChange = () => {
        if(theme === 'dark'){
            setTheme('light')
        }else{
            setTheme('dark')
        }
    }
    return (
        <button onClick={handleChange}>Change Theme</button>
    )
}

export default ChangeTheme