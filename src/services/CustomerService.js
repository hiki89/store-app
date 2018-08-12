const customers = [
    {id: 1, firstName:"Marko", lastName:"Markovic", email:"mm@gmail.com", products: []},
    {id: 2, firstName:"Nikola", lastName:"Nikolic", email:"nn@gmail.com", products: ["a", "b", "c"]},
    {id: 3, firstName:"Filip", lastName:"Filipovic", email:"ff@gmail.com", products: []}
]

let nextId = 4

class CustomerService {
    
    list() {
        return customers;
    }

    remove(customer) {
        let indexOfCustomerToDelete = customers.indexOf(customer);
        customers.splice(indexOfCustomerToDelete, 1);
    }

    add(newCustomer) {
        newCustomer.id = nextId
        customers.push(newCustomer);
        nextId++
    }

    singleCustomer(id) {
        return customers.find(customer => customer.id == id)    
    }
}

export const customerService = new CustomerService();