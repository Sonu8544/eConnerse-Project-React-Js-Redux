const fakeStoreApi = {
    fetchAllProducts: async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const result = await res.json(); // Add await here
        return result;
    },

    fetchProductById: async (productId) => {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const result = await res.json(); // Add await here
        return result;
    },

    fetchProductByQuery: async (query) => {
        const res = await fetch(`https://fakestoreapi.com/products`);
        const result = await res.json(); // Add await here
        return result.filter((pro) => pro.title.toLowerCase().includes(query));
    }
}

export default fakeStoreApi;
