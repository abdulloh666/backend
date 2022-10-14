const btnEl = document.querySelector('#btn');
const div = document.querySelector('div')

btnEl.addEventListener('click' , () =>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(photo => photo.json())
    .then(data => {
        data.forEach(e => {
            let imgEl = document.createElement("img");
            div.appendChild(imgEl)
            imgEl.src = e.url
            imgEl.className = "photo"
        });
    })
}, )

btn2.addEventListener('click' , () =>{
    div.innerHTML = ''
})