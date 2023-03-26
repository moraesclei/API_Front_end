const apiUrl = 'https://jsonplaceholder.typicode.com';

async function fetchComments(){
    try{
        const response = await fetch(`${apiUrl}/posts/1/comments`);

        if(!response.ok){
        throw new Error(`Falha na procura do comentários:${response.status}`);
        }

        return await response.json();
    }   catch (e){
        console.log(e);
    }
}

function listsComments(commentsContainerElementId){
    const commentsContainerElement = document.getElementById
    (commentsContainerElementId);

    if(!commentsContainerElement){
        return;
    }

    fetchComments()
        .then((comments) => {
            if(!comments){
                commentsContainerElement.innerHTML = 'Nenhum comentário';
                return;
            }

            for (const comment of comments){
                commentsContainerElement.appendChild(commentElement(comment));
            }
        })
        .catch((e) => {
            console.log(e);
    });
}

function commentElement(comment){
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('href',`${apiUrl}/posts/1/comments`);
    anchorElement.setAttribute('target','_blank');
    anchorElement.innerText = comment.title;

    const commenttTitleElement = document.createElement('h3');
    commenttTitleElement.appendChild(anchorElement);

    return commenttTitleElement;
}