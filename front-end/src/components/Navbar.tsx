import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styled from "styled-components";

export const Navbar = () => {
  const { totalItems } = useCart()
    
  return (
    <Nav>
      <Logo to="/">🛋️ Mini Loja</Logo>
      <NavLinks>
        <StyledLink to="/">Produtos</StyledLink>
        <StyledLink to="/orders">Meus Pedidos</StyledLink>
        <CartLink to="/cart">
          🛒 {totalItems > 0 && <Badge>{totalItems}</Badge>}
        </CartLink>
      </NavLinks>
    </Nav>
      
  );

};

// STYLED COMPONENTS
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #1a1a2e;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

const StyledLink = styled(Link)`
  color: #ccc;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;

  &:hover{
    color: white;
  }
`

const CartLink = styled(Link)`
  position: relative;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
`

const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #e94560;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`