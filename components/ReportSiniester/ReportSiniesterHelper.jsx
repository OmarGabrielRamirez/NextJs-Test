
import { useState } from "react";


const ReportSiniesterHelper = () => {
    const [value, setValue] = useState(false);

    const onClickBtn = () => {
        setValue(!value);
    };

    const getPostsTest = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await data.json();

        return posts;
    };

    return { onClickBtn, getPostsTest, value };
}

export default ReportSiniesterHelper;