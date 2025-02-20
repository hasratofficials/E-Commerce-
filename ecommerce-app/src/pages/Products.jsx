const products = [
  { id: 1, name: "Laptop", price: "$999", img: "/images/laptop.jpg" },
  { id: 2, name: "Smartphone", price: "$699", img: "/images/smartphone.jpg" },
  { id: 3, name: "Headphones", price: "$199", img: "/images/headphones.jpg" },
];

export default function Products() {
  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.img} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
