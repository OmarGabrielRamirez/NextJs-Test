
import { useState } from "react";


const FormTestHelper = () => {
    const [value, setValue] = useState(false);

    const handleSubmit = (e) => {

        console.log(e);

    };

    const sendData = async () => {

        fetch('"https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(e)
        }).then((res) => {
            if (res.status === 200) {
                //EXCE
            }
        })
    };

    return { handleSubmit, sendData, value };
}

export default FormTestHelper;