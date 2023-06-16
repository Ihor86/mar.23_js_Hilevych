let usersContainer = document.getElementsByClassName(`users`)[0];
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        for (const userItem of value) {
            let userContainer = document.createElement(`div`);
            userContainer.classList.add(`user`);
            userContainer.innerText = `${userItem.id}. ${userItem.name}`;
            let btnUser = document.createElement(`button`);
            btnUser.classList.add(`btnForUserDetails`);
            btnUser.innerText = `user-details`;
            userContainer.appendChild(btnUser);
            btnUser.onclick = function () {

                location.href=`./user-details.html?data=${JSON.stringify(userItem)}`;
            }

            usersContainer.appendChild(userContainer);
        }
    });
