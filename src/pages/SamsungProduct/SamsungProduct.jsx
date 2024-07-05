import { useState, useEffect } from "react";

const SamsungProduct = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(products => {
                const remainingProduct = products.filter(product => product.brand == 'Samsung')
                setProduct(remainingProduct)
                console.log(remainingProduct)
            })
    }, [])

    return (
        <div>
            <h3>Samsung{product.length}</h3>
        </div>
    );
};

export default SamsungProduct;
