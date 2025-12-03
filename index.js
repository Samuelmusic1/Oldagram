const contentEl = document.getElementById("content")

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

for (let i = 0 ; i < posts.length; i++) {
    contentEl.innerHTML += 
`
<section>
    <div>
        <div>
            <div class="user1">
                <img class="user1Avatar" src="${posts[i].avatar}" alt="${posts[i].name}">
                <p>${posts[i].name}<span>${posts[i].location}</span></p>
            </div>
            <img id="clicklike${i}" class="user1Post" src="${posts[i].post}" alt="${posts[i].name}">
            <div>
                <img id="postlike${i}" class="logosize" src="images/icon-heart.png" alt="hear icon">
                <img class="logosize" src="images/icon-comment.png" alt="comment icon">
                <img class="logosize" src="images/icon-dm.png" alt="dm icon">
            </div>
            <p class="like"><span id="increaseLikes${i}">${posts[i].likes}</span> likes</p>
            <p class="post" >${posts[i].username}<span>${posts[i].comment}</span></p>
        </div>
    </div>
</section>
`   
}

for(let i = 0; i < posts.length; i++) {
    const clickEl = document.getElementById(`clicklike${i}`)
    const increaseEl = document.getElementById(`increaseLikes${i}`)
    const postEl = document.getElementById(`postlike${i}`)

    function postLikeIncrease() {
        increaseEl.innerText = Number(increaseEl.innerText) + 1 
    }

    clickEl.addEventListener("dblclick", postLikeIncrease)
    postEl.addEventListener("click", postLikeIncrease)
}





