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
            style={{ border: match ? "3px solid red" : "3px solid gray", transition: "all 1s linear", boxShadow: '2px 2px 2px gray' }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;