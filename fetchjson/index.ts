import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(URL).then((response) => {
    console.log(response.data);
})