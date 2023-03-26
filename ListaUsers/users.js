const apiUrl = 'https://jsonplaceholder.typicode.com';

async function fetchUsers(){
    try{
        const response = await fetch(`${apiUrl}/users`);

        if(!response.ok){
        throw new Error(`Falha na procura de usuários:${response.status}`);
        }

        return await response.json();
    }   catch (e){
        console.log(e);
    }
}

function listsUsers(UsersContainerElementId){
    const UsersContainerElement = document.getElementById
    (UsersContainerElementId);

    if(!UsersContainerElement){
        return;
    }

    fetchUsers()
        .then((users) => {
            if(!users){
                UsersContainerElement.innerHTML = 'Nenhum usuário';
                return;
            }

            for (const user of users){
                UsersContainerElement.appendChild(userElement(user));
            }
        })
        .catch((e) => {
            console.log(e);
    });
}

function userElement(user){
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('href',`${apiUrl}/users`);
    anchorElement.setAttribute('target','_blank');
    anchorElement.innerText = user.title;

    const userTitleElement = document.createElement('h3');
    userTitleElement.appendChild(anchorElement);

    return userTitleElement;
}