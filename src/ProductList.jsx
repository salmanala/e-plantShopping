import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import { Link } from "react-router-dom";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 18,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2bb1",
  },
  {
    id: 3,
    name: "Spider Plant",
    price: 12,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1614594575810-7e0d7c72cbd5",
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 14,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921",
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 22,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1597055181300-e3633a207517",
  },
  {
    id: 6,
    name: "Boston Fern",
    price: 17,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1614594805320-e6a5549d7f9c",
  },

  {
    id: 7,
    name: "Lavender",
    price: 16,
    category: "Aromatic Plants",
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec",
  },
  {
    id: 8,
    name: "Rosemary",
    price: 13,
    category: "Aromatic Plants",
    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662",
  },
  {
    id: 9,
    name: "Mint",
    price: 10,
    category: "Aromatic Plants",
    image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1",
  },
  {
    id: 10,
    name: "Basil",
    price: 11,
    category: "Aromatic Plants",
    image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c",
  },
  {
    id: 11,
    name: "Jasmine",
    price: 20,
    category: "Aromatic Plants",
    image: "https://images.unsplash.com/photo-1595150358733-9a4b5d0d5f62",
  },
  {
    id: 12,
    name: "Lemon Balm",
    price: 12,
    category: "Aromatic Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },

  {
    id: 13,
    name: "Golden Pothos",
    price: 14,
    category: "Low Maintenance Plants",
    image: "https://images.unsplash.com/photo-1596724878582-76f1a8fdc8b1",
  },
  {
    id: 14,
    name: "ZZ Plant",
    price: 21,
    category: "Low Maintenance Plants",
    image: "https://images.unsplash.com/photo-1614594575810-7e0d7c72cbd5",
  },
  {
    id: 15,
    name: "Jade Plant",
    price: 16,
    category: "Low Maintenance Plants",
    image: "https://images.unsplash.com/photo-1509423350716-97f2360af8e4",
  },
  {
    id: 16,
    name: "Monstera",
    price: 25,
    category: "Low Maintenance Plants",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
  },
  {
    id: 17,
    name: "Chinese Evergreen",
    price: 19,
    category: "Low Maintenance Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 18,
    name: "Philodendron",
    price: 20,
    category: "Low Maintenance Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div>
      <nav className="navbar">
        <Link to="/">Paradise Nursery</Link>

        <div>
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            🛒 Cart ({totalItems})
          </Link>
        </div>
      </nav>

      <div className="products-page">
        <h1>Our Plants</h1>

        {categories.map((category) => (
          <section key={category}>
            <h2>{category}</h2>

            <div className="product-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => {
                  const added = cartItems.some(
                    (item) => item.id === plant.id
                  );

                  return (
                    <div className="product-card" key={plant.id}>
                      <img
  src={plant.image}
  alt={plant.name}
  onError={(e) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80";
  }}
/>

                      <h3>{plant.name}</h3>

                      <p>${plant.price}</p>

                      <button
                        disabled={added}
                        onClick={() => dispatch(addItem(plant))}
                      >
                        {added ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  );
                })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;