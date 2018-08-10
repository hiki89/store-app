const customers = [
    {id: 1, firstName:"Marko", lastName:"Markovic", email:"mm@gmail.com", products: []},
    {id: 2, firstName:"Nikola", lastName:"Nikolic", email:"nn@gmail.com", products: []},
    {id: 3, firstName:"Filip", lastName:"Filipovic", email:"ff@gmail.com", products: []}
]

class CustomerService {
    
    list() {
        return customers;
    }

    remove(customer) {
        let indexOfCustomerToDelete = customers.indexOf(customer);
        customers.splice(indexOfCustomerToDelete, 1);
    }

    add(newCustomer) {
        customers.push(newCustomer);
    }
}

export const customerService = new CustomerService();