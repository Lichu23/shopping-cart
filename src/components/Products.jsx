const Products = ({ products }) => {
  return (
    <div>
      <ul>
        {products.slice(0, 12).map((prod) => (
          <li key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} />
            <div>
              <strong>{prod.title}</strong> - ${prod.price}
            </div>
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
