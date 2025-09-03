// selection html object
// const target = document.getElementsByTagName('h1');
// // const target = document.getElementsByClassName('title');
// const target = document.getElementById('title');

// console.log(target)
// target.style.color = 'red';

// const allElement = document.getElementsByClassName('box');
// for(let i = 0; i < allElement.length; i++) {
//     let element = allElement[i];
//     element.style.backgroundColor = 'green';
//     if(i%2) element.style.backgroundColor = 'red';
//     if(element.innerText == 'box-5') element.style.backgroundColor = 'orange';
// }

document.getElementById('my_btn').addEventListener('click', (event) => {
    const inputValue = document.getElementById('inputText').value;
    
    const text = document.getElementById('textArea');

    const p = document.createElement('p');
    p.classList.add('child');
    p.innerText = inputValue;

    text.appendChild(p);

    document.getElementById('inputText').value='';

    const allComments = document.getElementsByClassName('child');

   for(const element of allComments) {
    element.addEventListener('click', (e) => {
        e.target.parentNode.removeChild(element);
    });
   }
});


// API
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>{
    displayData(data);
})
.catch(err=>{
    console.log(err);
});

const displayData = (userData => {
    const container = document.getElementById('userDataContainer');

    userData.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('user');

        div.innerHTML = `
            <h4>Title</h4>
            <p>Description</p>
            <button>Details</button>
        `;
        container.appendChild(div);
    });
})