import styled from "styled-components";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const CartPage = () => {
  const { items, total, removeFromCart, updateQuantity } = useCart();

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <EmptyCart>
          <h2>Seu carrinho está vazio</h2>
          <p>Que tal dar uma olhada nos produtos?</p>
          <Link to="/">Voltar para a loja</Link>
        </EmptyCart>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Container>
        <Title>Seu carrinho</Title>
        <Content>
          {/* LISTA DE PRODUTOS */}
          <ItemsList>
            {items.map((item) => (
              <CartItem key={item.product.id}>
                <ItemImage />
                <ItemInfo>
                  <h3>{item.product.name}</h3>
                  <Category>{item.product.category}</Category>
                  <Price>R$ {Number(item.product.price).toFixed(2)}</Price>

                  <QuantityControl>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }>
                      +
                    </button>
                  </QuantityControl>
                </ItemInfo>

                <Actions>
                  <Subtotal>
                    R$ {(Number(item.product.price) * item.quantity).toFixed(2)}
                  </Subtotal>
                  <RemoveButton onClick={() => removeFromCart(item.product.id)}>
                    Remover
                  </RemoveButton>
                </Actions>
              </CartItem>
            ))}
          </ItemsList>

          {/* RESUMO DO PEDIDO */}
          <Summary>
            <h3>Resumo do Pedido</h3>
            <SummaryRow>
              <span>Subtotal</span>
              <span>R$ {total.toFixed(2)}</span>
            </SummaryRow>

            <SummaryRow>
              <span>Frete</span>
              <span style={{ color: "#00b894" }}>Grátis</span>
            </SummaryRow>
            <Divider />
            <TotalRow>
              <span>Total</span>
              <span>R$ {total.toFixed(2)}</span>
            </TotalRow>
            <CheckoutButton to="/checkout">Finalizar Compra</CheckoutButton>
            <ContinueShopping to="/">Continuar Comprando</ContinueShopping>
          </Summary>
        </Content>
      </Container>
    </>
  );
};

// STYLED COMPONENTS
const Container = styled.div`
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: #1a1a2e;
  font-size: 2rem;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  gap: 1.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

const ItemInfo = styled.div`
  flex: 1;
  h3 {
    margin-bottom: 0.2rem;
    font-size: 1.1rem;
  }
`;

const Category = styled.p`
  font-size: 0.8rem;
  color: #888;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const Price = styled.p`
  font-weight: bold;
  color: #1a1a2e;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  button {
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      border-color: #e94560;
      color: #e94560;
    }
  }
`;

const Actions = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Subtotal = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  color: #e94560;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ff4757;
  cursor: pointer;
  font-size: 0.85rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Summary = styled.div`
  background: #1a1a2e;
  color: white;
  padding: 2rem;
  border-radius: 12px;
  height: fit-content;
  position: sticky;
  top: 100px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: #ccc;
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #333;
  margin: 1.5rem 0;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const CheckoutButton = styled(Link)`
  display: block;
  background: #e94560;
  color: white;
  text-align: center;
  padding: 1rem;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  margin-bottom: 1rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const ContinueShopping = styled(Link)`
  display: block;
  text-align: center;
  color: #ccc;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    color: white;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  margin-top: 5rem;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    margin-bottom: 2rem;
  }

  a {
    background: #1a1a2e;
    color: white;
    padding: 1rem 2rem;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
  }
`;
