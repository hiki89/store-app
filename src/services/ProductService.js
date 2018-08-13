const products = [
    {id: 1, title:"Bicikl", quantity:5},
    {id: 2, title:"Mobilni telefon", quantity:25},
    {id: 3, title:"Sat", quantity:100},
    {id: 4, title:"Auto", quantity:0}
]

class ProductService {
    list() {
        return products;
    }

    changeProductsQuantity(product, value) {
        if(value === '+') {
            product.quantity++;
        } else if (value === '-' && product.quantity > 0) {
            product.quantity--;
        }
    }

    singleProduct(id) {
        return products.find(product => product.id == id)    
    }
    
}

export const productService = new ProductService();