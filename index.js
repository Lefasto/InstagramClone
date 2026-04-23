const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let mainSection = document.getElementById("main-section");

function renderPosts() {
    for(let i = 0; i < posts.length; i++){
        mainSection.innerHTML += `
            <article class="post" id="post-section">
                <div class="userinfo-container">

                    <div class="img-container">
                        <img class="avatar" src="${posts[i].avatar}" alt="Avatar of ${posts[i].name}.">
                    </div>

                    <div class="user-text-container">
                        <p class="name">${posts[i].name}</p>
                        <p class="location">${posts[i].location}</p>
                    </div>

                </div>

                <img class="post-img" src="${posts[i].post}" alt="a portrait of ${posts[i].name}.">

                <div class="icon-container"></div>
                    <img class="icons" id="like-btn" src="images/icon-heart.png" alt="A heart icon.">
                    <img class="icons" src="images/icon-comment.png" alt="A speech bubble icon.">
                    <img class="icons" src="images/icon-dm.png" alt="A message icon.">
                

                <p class="like-txt"><span class="likes" id="like-counter">${posts[i].likes}</span> likes</p>
                <p class="comment"><span class="username">${posts[i].username}</span> ${posts[i].comment}</p>
            </article>` 
    } 
}

renderPosts();
