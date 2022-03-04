let submit=document.getElementById('submit');

function change(){
    document.getElementById('email').placeholder = " Thank You For Subscribing!";
    event.preventDefault();
}

submit=addEventListener('click', change);



/* function getPhoto(){
    
    function render() {
        let response=this.responseText;
        let responseData=JSON.parse(response);
        console.log(responseData);

        let img=document.createElement('img' );
        img.src=responseData.data[0].url;

        let album=getElementById('row');
        album.appendChild(img);
    }

    let photos = new XMLHttpRequest();
    photos.addEventListener("load", render);
    photos.open("GET", "https://jsonplaceholder.typicode.com/photos");
    photos.send();
}

getPhoto();
*/