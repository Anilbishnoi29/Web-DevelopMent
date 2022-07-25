'use strict';
const url = "https://jsonplaceholder.typicode.com/users";

const xhr = new XMLHttpRequest();
xhr.open('GET',url);
xhr.responseType = 'json';
xhr.onload = () => {
    console.log(xhr.response);
};
xhr.send();