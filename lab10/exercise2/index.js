(function () {
    window.onload = function () {
        document.getElementById("checkUserBtn").onclick = clickHandler;
    };

    function clickHandler() {
        fetch("http://jsonplaceholder.typicode.com/users/" + document.getElementById("userIdInput").value)
            .then(function (response) {
                return response.json(); // response.json() returns Promise as well
            })
            .then(function (myJson) {
                // console.log(myJson);
                document.getElementById("userInfo").innerHTML = `
                <h1 id="username">User Info (ID: ${myJson.id})</h1>
                <strong>Username</strong>: ${myJson.username} <br/>
                <strong>Email</strong>: ${myJson.email} <br/>
                <strong>Address</strong>: ${JSON.stringify(myJson.address)}
            `;
            });

        fetch("https://jsonplaceholder.typicode.com/posts?userId=" + document.getElementById("userIdInput").value)
            .then(function (response) {
                return response.json(); // response.json() returns Promise as well
            })
            .then(function (myJson) {
                // all posts of this user
                document.getElementById("userPosts").innerHTML = `
                    <h1 class="userPosts">User Posts</h1>
                    ${myJson.map(postTemplate).join("")}
                `;
            })
            .then(function () {
                function attachHandler() {
                    showComments(this.id);
                }

                for (let i = 0; i < document.getElementsByClassName("showComment").length; i++) {
                    document.getElementsByClassName("showComment")[i].onclick = attachHandler;
                }
            });
    }

    function postTemplate(post) {
        // console.log(`post${post.id}`)
        return `
            <div id="userPostId${post.id}">
                <p class="postTitle"><strong>Post title:</strong> ${post.title}<br>
                <strong>post body:</strong> ${post.body}<br>
                </p>
                <input type="button" class="showComment" value="Show comments" id="${post.id}">
                <div id=comment${post.id}></div>
            </div>
            `;
    }

    function showComments(postId) {
        fetch("https://jsonplaceholder.typicode.com/comments?postId=" + postId)
            .then(function (response) {
                return response.json(); // response.json() returns Promise as well
            })
            .then(function (myJson) {
                // all comments of this post

                document.getElementById(`comment${postId}`).innerHTML = `
                    ${myJson.map(commentTemplate).join("")}
                `;
            });
    }

    function commentTemplate(comment) {
        return `
            <div class="comments">
                <p class="comment"><strong>comment title:</strong> ${comment.name}<br>
                <strong>comment body:</strong> ${comment.body}<br>
                <strong>comment email:</strong> ${comment.email}>
                </p>
            </div>
        `;
    }
})();
