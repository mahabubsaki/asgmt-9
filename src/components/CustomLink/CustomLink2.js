import React from 'react';
import {
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";

const CustomLink2 = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
            style={{ backgroundColor: match ? "yellow" : "transparent", transition: "all 0.8s linear" }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink2;