import React from 'react';
import {
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
            style={{ borderBottom: match ? "3px solid red" : "3px solid gray", transition: "all 1s linear" }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;