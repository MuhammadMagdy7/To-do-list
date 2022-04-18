function List(main, category){
    this.main = main;
    this.category = category;
}

function Newitem(){}
Newitem.prototype.addNewItem = (content) => {
    let addNewItem = document.getElementById('addNewItem');
    let trow = document.createElement('tr')

    trow.innerHTML = `
    <td calss = 'tmain'>${content.main}</td>
    <td calss = 'tcategory'>${content.category}</td>
    <td><a href='#'><i class="bi bi-pencil-square"></i></a>
    <a href="#" ><i class="bi bi-x-circle-fill"></i></button></a>`

    addNewItem.appendChild(trow)

}

Newitem.prototype.clearAll = () => {
    document.querySelector('.u-full-width.mt-3.main').value = '';
    document.querySelector('.u-full-width.mt-3.category').value = '';
}

Newitem.prototype.showAlert = (message, alertclass) => {
    let container = document.querySelector('.container');
    let row = document.querySelector('.row');
    let Alert = document.createElement('div');
    Alert.className = `alert alert-${alertclass}`;
    Alert.innerText = `${message}`;
    container.insertBefore(Alert, row);
    setTimeout(()=>{
        document.querySelector('.alert').remove();
    }, 2000)
}
Newitem.prototype.deleteitem = (btntarget) => {
    
    btntarget.parentElement.parentElement.parentElement.remove()
    
}

Newitem.prototype.edititem = (targetbtn) => {
    // let main = document.querySelector('.tmain');
    // let category = document.querySelector('.tcategory');
    let trow = targetbtn.parentElement.parentElement.parentElement;
    main = trow.querySelector('.main')
    console.log(main)
    document.querySelector('.u-full-width.mt-3.main').value  ;
    document.querySelector('.u-full-width.mt-3.category').value ;
    
}



let dataentry = document.querySelector('#dataentry');
dataentry.addEventListener('submit', function(eventTarget){


    let main= document.querySelector('.u-full-width.mt-3.main').value;
    let category = document.querySelector('.u-full-width.mt-3.category').value;
    
    const list1 = new List(main, category);
    const NewItem = new Newitem();

    if (main == '' || category == ''){

        NewItem.showAlert('Please Fill Fields', 'danger');



    }else{
        NewItem.addNewItem(list1);
        NewItem.clearAll();
        NewItem.showAlert('The operation succeeded', 'success');
    }
    
    eventTarget.preventDefault();
})

document.querySelector('#addNewItem').addEventListener('click', function(e){
    const Onenew = new Newitem();
    if (e.target.className == 'bi bi-x-circle-fill'){
        Onenew.deleteitem(e.target);
        Onenew.showAlert('Done Deleted Successfully!', 'success')
    }else if (e.target.className == 'bi bi-pencil-square'){
        Onenew.edititem(e.target);
    }


})
