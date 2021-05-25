
let links = document.getElementsByClassName('contact-item cf');
//hiding all the contacts
function onPageLoad(){
    for (let i=0;i<links.length;i++){
        links[i].style.display='none';
    }
}

let list = Array.from(document.querySelectorAll('li'));

let contactsPerPage = 10;
numOfPages = Math.ceil(list.length/contactsPerPage);


for(let i=contactsPerPage;i<links.length;i++){
    links[i].style.display='none';
}

// storing buttons div in a variable 
let button = document.querySelector('.buttons')
for(let i=0; i<numOfPages; i++){
    button.innerHTML += "<button class='page_button'>"+(i+1)+"</button>";
}

var pageButtons = document.querySelectorAll('.page_button');
for(let i=0;i<pageButtons.length;i++){
    pageButtons[i].addEventListener('click',pagination);

}

function pagination(){
    onPageLoad();

    let contact = (this.innerHTML * contactsPerPage) - contactsPerPage;
    for(let i=0;i<contactsPerPage;i++){
        links[contact+i].style.display="block";
    }

}

