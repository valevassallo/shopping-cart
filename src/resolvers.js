module.exports = {
  Query: {
    product: (_parent, { name }, { models }, _info) =>
      models.Product.findOne({
        where: { name: name }
      }),
    cart: (_parent, { id }, { models }, _info) => models.cart.findByPk(id),
    order: (_parent, { id }, { models }, _info) => models.order.findByPk(id)
  },
  Mutation: {
    updateProduct: (_parent, { quantity, cartId, id }, { models }, _info) =>
      models.product.update(
        {
          quantity: quantity,
          cartId: cartId
        },
        {
          where: {
            id: id
          }
        }
      ),
    createCart: (_parent, args, { models }, _info) => models.cart.create(),
    updateCart: (_parent, { orderId, id }, { models }, _info) =>
      models.cart.update(
        {
          orderId: orderId
        },
        {
          where: {
            id: id
          }
        }
      ),
    createOrder: (_parent, { code }, { models }, _info) =>
      models.order.create({
        code: code
      })
  }
};
