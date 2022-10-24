

 let inputs = document.getElementById('item')
 let btn = document.getElementById('btn')
 let list = document.getElementById('list')

 btn.onclick = function(){
    let value = inputs.value

    if(value != ""){
        let item = document.createElement('li')
        item.innerHTML = value
        list.appendChild(item)
        inputs.value = ""
    }else {
        alert('Please enter an item')
    }
 }