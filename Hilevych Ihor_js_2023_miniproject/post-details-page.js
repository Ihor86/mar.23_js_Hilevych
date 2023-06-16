let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('data'));
console.log(post);
let {userId, id, title, body} = JSON.parse(url.searchParams.get('data'));
let ulInfoPost = document.createElement(`ul`);
let сontainerForPost = document.getElementsByClassName('post')[0];
сontainerForPost.appendChild(ulInfoPost);

let userIdLi = document.createElement(`li`);
userIdLi.innerText = `userId - ` + userId;
let idLi = document.createElement(`li`);
idLi.innerText = `id - ` + id;
let titleLi = document.createElement(`li`);
titleLi.innerText = `title - ` + title;
let bodyLi = document.createElement(`li`);
bodyLi.innerText = `body - ` + body;
ulInfoPost.append(userIdLi, idLi, titleLi, bodyLi);

let containerForComments = document.getElementsByClassName('comments')[0];
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(value => {
        for (const commentItem of value) {
            let containerForComment = document.createElement('div');
            containerForComment.innerText = commentItem.body;
            containerForComments.appendChild(containerForComment);
        }
    });
