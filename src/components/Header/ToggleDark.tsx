import React, { useState} from "react";

export const ToggleDark = () => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(!defaultDark ? "dark" : "light");

    const toggleTheme = (event:any) => {
        //document.body.className = (theme === "light" ? "dark" : "light");
        document.body.className = event.target.checked ? 'dark' : 'light';
        setTheme(event.target.checked ? 'dark' : 'light')
    }
    
    return (
    <div className="theme switch">
        <input id="checkbox-toggle" className="theme_toggle" 
            type="checkbox" 
            role="switch"  
            checked={theme === 'dark'}
            onChange = {toggleTheme}/>
    </div>);
}