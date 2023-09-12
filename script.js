let mainBx = document.querySelector('#mainBx');
let list = document.querySelector('#list');

mainBx.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        addItem(this.value)
        this.value = ""
    }
})

let addItem = (mainBx) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${mainBx}<i></i>`;

    listItem.addEventListener("click", function(){
        this.classList.toggle('done');
    })

    listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove();
    })

    list.appendChild(listItem);
}