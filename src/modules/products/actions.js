export async function fetchProducts({state, commit, dispatch, rootState}) {
    const data = await fetch('/fixtues/products.json')
    const products = await data.json()
    commit('products/setProducts', products, { root: true})
}