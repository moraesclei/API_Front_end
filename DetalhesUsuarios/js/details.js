const apiUrl = 'https://jsonplaceholder.typicode.com';

async function fetchDetails(){
    try{
        const response = await fetch(`${apiUrl}/comments?postId=1`);

        if(!response.ok){
        throw new Error(`Falha na procura de detalhes de usuários:${response.status}`);
        }

        return await response.json();
    }   catch (e){
        console.log(e);
    }
}

function listsDetails(DetailsUsersContainerElementId){
    const DetailsUsersContainerElement = document.getElementById
    (DetailsUsersContainerElementId);

    if(!DetailsUsersContainerElement){
        return;
    }

    fetchDetails()
        .then((detailUsers) => {
            if(!detailUsers){
                DetailsUsersContainerElement.innerHTML = 'Nenhum detalhe de usuário';
                return;
            }

            for (const detailUser of detailUsers){
                DetailsUsersContainerElement.appendChild(DetailUserElement(detailUser));
            }
        })
        .catch((e) => {
            console.log(e);
    });
}

function DetailUserElement(detailUser){
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('href',`${apiUrl}/comments?postId=1`);
    anchorElement.setAttribute('target','_blank');
    anchorElement.innerText = detailUser.title;

    const DetailUserTitleElement = document.createElement('h3');
    DetailUserTitleElement.appendChild(anchorElement);

    return DetailUserTitleElement;
}