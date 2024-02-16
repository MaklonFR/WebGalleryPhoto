function likeButton() {
    let heart = document.querySelector('.heart');
    let likes = document.querySelector('.likes');
    if (heart.src.match("heart.png")) {
        heart.src = "image/heart_red.png";
        likes.innerHTML = "3.685 likes";
    } else {
        heart.src = "image/heart.png";
        likes.innerHTML = "3.684 likes";
    }
}
