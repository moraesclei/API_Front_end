const apiUrl = 'https://jsonplaceholder.typicode.com';

async function fetchPosts(){
    try{
        const response = await fetch(`${apiUrl}/posts`);

        if(!response.ok){
        throw new Error(`Falha na procura do posts:${response.status}`);
        }

        return await response.json();
    }   catch (e){
        console.log(e);
    }
}

function listsPosts(postContainerElementId){
    const postContainerElement = document.getElementById
    (postContainerElementId);

    if(!postContainerElement){
        return;
    }

    fetchPosts()
        .then((posts) => {
            if(!posts){
                postContainerElement.innerHTML = 'Nenhuma postagem';
                return;
            }

            for (const post of posts){
                postContainerElement.appendChild(postElement(post));
            }
        })
        .catch((e) => {
            console.log(e);
    });
}

function postElement(post){
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('href',`${apiUrl}/posts`);
    anchorElement.setAttribute('target','_blank');
    anchorElement.innerText = post.title;

    const postTitleElement = document.createElement('h3');
    postTitleElement.appendChild(anchorElement);

    return postTitleElement;
}