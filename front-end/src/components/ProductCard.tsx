import styled from "styled-components";
import { useCart } from "../context/CartContext";
import type { IProduct } from "../types";

interface IProps {
  product: IProduct;
}

export const ProductCard = ({ product }: IProps) => {
  const { addToCart } = useCart();

  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <Info>
        <Category>{product.category}</Category>
        <Name>{product.name}</Name>
        <Description>{product.description}</Description>
        <Footer>
          <Price>R$ {Number(product.price).toFixed(2)}</Price>
          <AddButton onClick={() => addToCart(product)}>+ Carrinho</AddButton>
        </Footer>
      </Info>
    </Card>
  );
};

// STYLED COMPONENTS
const Card = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.8);
  transition: transform 0.2s box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const Info = styled.div`
  padding: 1rem;
`
const Category = styled.span`
  font-size: 0.75rem;
  color: #e94560;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`
const Name = styled.h3`
  margin: 0.4rem 0;
  font-size: 1rem;
  color: #1a1a2e;
`

const Description = styled.p`
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`

const Price = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a1a2e;

`

const AddButton = styled.button`
  background: #1a1a2e;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background 0.2s;

  &:hover{
    background: #e94560;
  }
`

