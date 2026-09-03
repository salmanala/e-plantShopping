import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

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

      <div className="cart-page">
        <h1>Shopping Cart</h1>

        <h2>Total Cart Amount: ${totalAmount.toFixed(2)}</h2>

        {cartItems.length === 0 && (
          <p>Your shopping cart is empty.</p>
        )}

        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
  src={item.image}
  alt={item.name}
  onError={(e) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80";
  }}
/>

            <div>
              <h3>{item.name}</h3>

              <p>Unit Price: ${item.price.toFixed(2)}</p>

              <p>Quantity: {item.quantity}</p>

              <p>
                Total Cost: ${(item.price * item.quantity).toFixed(2)}
              </p>

              <div className="quantity-controls">
                <button
                  onClick={() =>
                    dispatch(decreaseQuantity(item.id))
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch(increaseQuantity(item.id))
                  }
                >
                  +
                </button>
              </div>

              <button
                className="delete-button"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        <div className="cart-actions">
          <Link to="/plants">
            <button>Continue Shopping</button>
          </Link>

          <button onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;