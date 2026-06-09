import { useState } from "react";
import styled from "styled-components";
import { useCart } from "../context/CartContext";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const CkechoutPage = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) return;

    try {
      setLoading(true);

      const orderData = {
        customerName,
        customerEmail,
        items: items.map((item) => ({
          productId: item.product.id,
          quantity: item.quantity,
          price: item.product.price,
        })),
      };

      // CHAMADA PARA O BACK-END
      await api.post("/orders", orderData);

      // SE DEU CERTO:
      alert("Pedido realizado com sucesso!");
      clearCart(); // LIMPA O CARRINHO
      navigate("/orders"); // REDIRECIONA PARA A TELA DE PEDIDOS
    } catch (error) {
      console.error("Erro ao finalizar pedido:", error);
      alert("Houve um erro ao processar seu pedido. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Title>Finalizar Compra</Title>

        <Content>
          {/* FORMULARIO */}
          <FormContainer onSubmit={handleSubmit}>
            <h3>Dados de Entrega</h3>
            <InputGroup>
              <label>Nome Completo</label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Ex: João Silva"
              />
            </InputGroup>

            <InputGroup>
              <label>E-mail</label>
              <input
                type="text"
                required
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                placeholder="joao@exemplo.com"
              />
            </InputGroup>

            <SubmitButton
              type="submit"
              disabled={loading || items.length === 0}>
              {loading
                ? "Processando..."
                : `Confirmar Pedido - R$ ${total.toFixed(2)}`}
            </SubmitButton>
          </FormContainer>

          {/* RESUMO RÁPIDO LATERAL */}
          <OrderSummary>
            <h3>Seu Pedido</h3>
            {items.map((item) => (
              <SummaryItem key={item.product.id}>
                <span>
                  {item.quantity}x {item.product.name}
                </span>
                <span>
                  R$ {(Number(item.product.price) * item.quantity).toFixed(2)}
                </span>
              </SummaryItem>
            ))}

            <hr />
            <div className="total">
              <span>Total a pagar:</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
          </OrderSummary>
        </Content>
      </Container>
    </>
  );
};

// STYLED COMPONENTS
const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;

`

const Title = styled.h1`
  margin-bottom: 2rem;
  color: #1a1a2e;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;

  @media (max-width: 768px){
    grid-template-columns: 1fr;
  }
`

const FormContainer = styled.form`
 background: white;
 padding: 2rem;
 border-radius: 12px;
 box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

 h3{
  margin-bottom: 1.5rem;
  color: #1a1a2e;
 }
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.2rem;

  label {
    font-size: 0.9rem;
    font-weight: 600;
    color: #555;
  }

  input{
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;

    &:focus{
      border-color: #1a1a2e;
      outline: none;

    }
  }
`

const SubmitButton = styled.button`
  width: 100%;
  background: #00b894;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s;

  &:hover{
    background: #009476;
  }

  &:disabled{
    background: #ccc;
    cursor: not-allowed;
  }
`

const OrderSummary = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  height: fit-content;

  h3{
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  hr{
    margin: 1rem 0;
    border: 0;
    border-top: 1px solid #ddd;
  }

  .total{
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    color: #1a1a2e;
  }
`

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  color: #666;
`