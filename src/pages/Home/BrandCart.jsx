import Brand from "./Brand";


const BrandCart = () => {

    const brands = [
        {
            brand_name: "Samsung",
            brand_image: "https://i.ibb.co/8x2wChV/samsung.png"
        },
        {
            brand_name: "Apple",
            brand_image: "https://i.ibb.co/q9ghB34/apple.png"
        },
        {
            brand_name: "Sony",
            brand_image: "https://i.ibb.co/gy0QxbC/sony.png"
        },
        {
            brand_name: "HP",
            brand_image: "https://i.ibb.co/GF90mhr/hp.png"
        },
        {
            brand_name: "Lenovo",
            brand_image: "https://i.ibb.co/PZDxCfq/lenovo.png"
        },
        {
            brand_name: "Microsoft",
            brand_image: "https://i.ibb.co/hFf3r1B/microsoft.png"
        },
        {
            brand_name: "Google",
            brand_image: "https://i.ibb.co/yBPKg5c/google.png"
        },
        {
            brand_name: "Asus",
            brand_image: "https://i.ibb.co/RpHJX3F/asus.png"
        }
    ]

    return (
        <div className="grid grid-cols-4 gap-5 max-w-6xl mx-auto my-20">
            {brands.map(brand =><Brand brand={brand} key={brand.idx}></Brand>)}
        </div>
    );
};

export default BrandCart;