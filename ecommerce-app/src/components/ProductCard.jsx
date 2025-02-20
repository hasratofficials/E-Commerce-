const products = [
  { id: 1, name: "Laptop", price: "$999", img: "https://www.nytimes.com/wirecutter/reviews/best-laptops//200" },
  { id: 2, name: "Smartphone", price: "$699", img: "https://via.placeholder.com/200" },
  { id: 3, name: "Headphones", price: "$199", img: "https://via.placeholder.com/200" },
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
