async function fetchData(){
    const product = await fetch('https://fakestoreapi.com/products');
    const data =  await product.json();
    console.log(data);
}