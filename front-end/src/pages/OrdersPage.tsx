import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import { api } from "../services/api";

// INTERFACE SIMPLES PARA TIPAR OS DADOS QUE VEM DO BACK-END
interface IOrder {
  id: number;
  customerName: string;
  total: string | number;
  status: string;
  createdAt: string;
  OrderItems: any[]; // ITENS DO PEDIDO
}

export const OrdersPage = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/orders");
      setOrders(data);
    } catch (error) {
      console.error("Erro ao buscar pedidos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Title>Meus Pedidos</Title>

        {loading ? (
          <Message>Carregando...</Message>
        ) : orders.length === 0 ? (
          <Message>Você ainda não realizou nenhum pedido.</Message>
        ) : (
          <OrderList>
            {orders.map((order) => (
              <OrderCard key={order.id}>
                <OrderHeader>
                  <div>
                    <span className="label">PEDIDO</span>

                    <p className="value">#{order.id}</p>
                  </div>

                  <div>
                    <span className="label">DATA</span>
                    <p className="value">
                      {new Date(order.createdAt).toLocaleDateString("pt-BR")}
                    </p>
                  </div>

                  <div>
                    <span className="label">CLIENTE</span>
                    <p className="value">{order.customerName}</p>
                  </div>

                  <div>
                    <span className="label">STATUS</span>
                    <StatusBadge status={order.status}>
                      {order.status === "pending" ? "Pendente" : order.status}
                    </StatusBadge>
                  </div>

                  <div className="total-section">
                    <span className="label">TOTAL</span>
                    <p className="total-price">
                      R${Number(order.total).toFixed(2)}
                    </p>
                  </div>
                </OrderHeader>

                <OrderItems>
                  <h4>Itens do Pedido:</h4>
                  {order.OrderItems?.map((item: any) => (
                    <Item key={item.id}>
                      <span>
                        {item.quantity}x {item.product?.name || "Produto"}
                      </span>
                      <span>R$ {Number(item.price).toFixed(2)}</span>
                    </Item>
                  ))}
                </OrderItems>
              </OrderCard>
            ))}
          </OrderList>
        )}
      </Container>
    </>
  );
};

// STYLED COMPONENTS
const Container = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: #1a1a2e;
`;

const Message = styled.p`
  text-align: center;
  margin-top: 3rem;
  color: #666;
`;

const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const OrderCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #eee;
`;

const OrderHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-bottom: 1px solid #eee;

  .label {
    font-size: 0.7rem;
    color: #888;
    font-weight: bold;
    text-transform: uppercase;
  }

  .value {
    font-size: 0.95rem;
    font-weight: 600;
    color: #333;
    margin-top: 0.3rem;
  }

  .total-price {
    color: #e94560;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  background: ${(props) => (props.status === "pending" ? "#ffeaa7" : "#55efc4")};
  color: ${(props) => (props.status === "pending" ? "#d63031" : "#00b894")};
  margin-top: 0.3rem;
`;

const OrderItems = styled.div`
  padding: 1.5rem;
  h4 {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    color: #1a1a2e;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px dashed #eee;
  font-size: 0.9rem;
  color: #555;

  &:last-child {
    border-bottom: none;
  }
`;
