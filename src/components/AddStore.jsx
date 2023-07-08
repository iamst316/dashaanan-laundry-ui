import '../css/AddStore.css';

export default function(){
    return(
        <div id="add-s-main">
            <input type="text" placeholder="Store Name" />
            <input type="text" placeholder="Store Description" />
            <input type="number" placeholder="Enter Price of the Item" />
            
            <button>Add Store</button>
        </div>
    )
}