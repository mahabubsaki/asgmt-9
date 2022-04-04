import React from 'react';

const Blogs = () => {
    return (
        <div className="w-3/4 mx-auto">
            <article className="mt-2">
                <h1 className="text-5xl text-center">What is Context Api?</h1>
                <p className="text-xl text-center">Conext API is a effective method for passing data from one component to another  component without props drilling. Context API helps us to create a global variable which can be pass easily. In easy words Context API acts like Wi-Fi.We can create a context and give it a range. Inside it's range anyone can use the context. It helps us from props drilling which is a very complex way to share data with components.</p>
            </article>
            <article className="mt-2">
                <h1 className="text-5xl text-center">What is Semantic Tags in HTML?</h1>
                <p className="text-xl text-center">Semantic Tags in HTML are important for accessibility. By these tag we can understand the purpose of elements. It's very understandable for browsers , developers and even normal humans.There are many semantic tags like section,article,header,aside,footer etc. One of the best benefits of semantic tags is it helps us to optimize our search engine performance.</p>
            </article>
            <article className="mt-2">
                <h1 className="text-5xl text-center">What is Context Api?</h1>
                <p className="text-xl text-center">Conext API is a effective method for passing data from one component to another  component without props drilling. Context API helps us to create a global variable which can be pass easily. In easy words Context API acts like Wi-Fi.We can create a context and give it a range. Inside it's range anyone can use the context. It helps us from props drilling which is a very complex way to share data with components.</p>
            </article>
        </div>
    );
};

export default Blogs;