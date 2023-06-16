let url = new URL(location.href);

let containerForUserDetails = document.getElementsByClassName(`user-details`)[0];

let {id, name, username, email, address, phone, website, company} = JSON.parse(url.searchParams.get('data'));
let ulInfoPost = document.createElement(`ul`);
containerForUserDetails.appendChild(ulInfoPost);

let idLi = document.createElement(`li`);
idLi.innerText = `id - ` + id;

let nameLi = document.createElement(`li`);
nameLi.innerText = `name - ` + name;

let usernameLi = document.createElement(`li`);
usernameLi.innerText = `username - ` + username;

let emailLi = document.createElement(`li`);
emailLi.innerText = `email - ` + email;

let addressLi = document.createElement(`li`);
addressLi.innerText = `address - ` + address;

let phoneLi = document.createElement(`li`);
phoneLi.innerText = `phone - ` + phone;

let websiteLi = document.createElement(`li`);
websiteLi.innerText = `website - ` + website;

let companyLi = document.createElement(`li`);
companyLi.innerText = `company - ` + company;

ulInfoPost.append(idLi, nameLi, usernameLi, emailLi, addressLi, phoneLi, websiteLi, companyLi);

let containerForPosts = document.getElementsByClassName(`posts`)[0];
let postsDetailsButton = document.getElementsByClassName(`postsDetailsButton`)[0];

postsDetailsButton.onclick = function () {
    this.disabled = true;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json())
        .then(value => {
            console.log(value);
            for (const postItem of value) { //ітеруємо наші пости
                let сontainerForPost = document.createElement(`div`);
                сontainerForPost.classList.add(`post`);
                сontainerForPost.innerText = postItem.title;
                let postDetailsButton = document.createElement('button');
                postDetailsButton.innerText = 'post details';
                postDetailsButton.onclick = function () {
                    location.href = `./post-details.html?data=${JSON.stringify(postItem)}`;
                };

                сontainerForPost.appendChild(postDetailsButton);
                containerForPosts.appendChild(сontainerForPost);
            }
        });
};

containerForUserDetails.appendChild(postsDetailsButton);
