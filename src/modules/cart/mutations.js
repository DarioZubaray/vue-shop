import {find, filter} from 'lodash'

export function addProduct(state, product) {
    const productInCart = find(state.cart, {id: product.id})
    if(!productInCart) {
        const copyProduct = Object.assign({}, product)
        copyProduct.qty = 1
        state.cart.push(copyProduct)
    } else {
        productInCart.qty += 1
    }

}

export function removeProductFromCart(state, product) {
    state.cart = filter(state.cart, ({id}) => id !== product.id)
}