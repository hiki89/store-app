const products = [
    {id: 1, title:"Bicikl", quantity:5},
    {id: 2, title:"Mobilni telefon", quantity:25},
    {id: 3, title:"Sat", quantity:100}
]

class ProductService {
    list() {
        return products;
    }
    
}

export const productService = new ProductService();