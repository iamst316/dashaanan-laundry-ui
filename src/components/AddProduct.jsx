import '../css/AddProduct.css'

export default function(){
    return (
        <div id="add-p-main">
            <input type="text" placeholder="Product Name" />
            <input type="text" placeholder="Product Description" />
            <input type="number" placeholder="Enter Price of the Item" />
            <input type="number" placeholder="Enter Price of Deep Washing" />
            <input type="number" placeholder="Enter Price of Ironing" />
            <input type="number" placeholder="Enter Price of Bleaching" />
            <input type="number" placeholder="Enter Price of Crisp Folding" />
            <button>Add Product</button>
        </div>
    )
}