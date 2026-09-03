import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Total number of plants in the cart
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total amount of all items in the cart
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Increase product quantity
  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  // Decrease product quantity
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  // Delete product from cart
  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  // Checkout functionality
  const handleCheckout = () => {
    alert(
      "Coming Soon! Checkout functionality will be available soon."
    );
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <Link to="/">Paradise Nursery</Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>

          <Link to="/cart" className="cart-link">
            🛒 Cart ({totalItems})
          </Link>
        </div>
      </nav>

      {/* Shopping Cart */}
      <div className="cart-page">
        <h1>Shopping Cart</h1>

        <h2>
          Total Cart Amount: ${totalAmount.toFixed(2)}
        </h2>

        {cartItems.length === 0 ? (
          <p>Your shopping cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80";
                }}
              />

              <div className="cart-item-details">
                <h3>{item.name}</h3>

                <p>
                  Unit Price: ${item.price.toFixed(2)}
                </p>

                <p>
                  Quantity: {item.quantity}
                </p>

                <p>
                  Total Cost: $
                  {(item.price * item.quantity).toFixed(2)}
                </p>

                <div className="quantity-controls">
                  <button
                    onClick={() => handleDecrease(item)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </button>

                  <button
                    className="delete-button"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}

        <div className="cart-actions">
          <Link to="/plants">
            <button className="continue-shopping">
              Continue Shopping
            </button>
          </Link>

          <button
            className="checkout-button"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;