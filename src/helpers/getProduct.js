const getProduct = async () => {
    const url = "https://corebiz-test.herokuapp.com/api/v1/products";

    const res = await fetch(url);

    const data = await res.json();

    return data
}

export default getProduct;