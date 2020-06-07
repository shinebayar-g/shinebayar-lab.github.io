fetch("http://jsonplaceholder.typicode.com/users/1")
    .then(function (response) {
        // console.log(response)
        // console.log("----")
        return response.json(); // response.json() returns Promise as well
    })
    .then(function (myJson) {
        document.getElementById("userInfo").innerText = JSON.stringify(myJson);
    });

fetch("http://jsonplaceholder.typicode.com/posts?userId=1")
    .then(function (response) {
        return response.json(); // response.json() returns Promise as well
    })
    .then(function (myJson) {
        document.getElementById("post").innerText = JSON.stringify(myJson);
    });

fetch("http://jsonplaceholder.typicode.com/comments?postId=1")
    .then(function (response) {
        return response.json(); // response.json() returns Promise as well
    })
    .then(function (myJson) {
        document.getElementById("comments").innerText = JSON.stringify(myJson);
    });
