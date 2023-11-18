import { useContext, useEffect } from "react";
import { ThemeContext } from "../../Components/context-api/ThemeContext";


const Header = () => {
    const [theme] = useContext(ThemeContext);
    useEffect(()=>{
        document.body.classList = theme;
    }, [theme])
    return (
        <div>
            <h2>Header Page</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam consequatur, tempore veritatis laboriosam, accusamus hic id sint accusantium ipsum molestiae at. Illo sunt quae itaque error excepturi dicta voluptatum quam.</p>
        </div>
    )
};

export default Header