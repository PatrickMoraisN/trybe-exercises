const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = () => `Ola ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, endereco: ${order.address.street}, ${order.address.number}, ${order.address.apartment}`

customerInfo();

console.log(customerInfo())

const orderModifier = () => `Ola ${order.order.delivery.deliveryPerson = 'Luiz Silva'}, o total do seu pedido de ${order.order.pizza.muzzarela = 'muzzarela'} eh de ${order.payment.total = 50 }`

orderModifier();


console.log(orderModifier())

console.log(order)