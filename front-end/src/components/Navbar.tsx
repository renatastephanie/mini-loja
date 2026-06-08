import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styled from "styled-components";

export const Navbar = () => {
  <Nav>
    <Logo to="/">🛋️ Mini Loja</Logo>
    <NavLinks>
      <NavLink to="/">Produtos</NavLink>
      <NavLink to="/orders">Meus Pedidos</NavLink>
      <CartLink to="/cart">
        🛒 <span>{totaItems > 0 && <Badge>{totalItems}</Badge>}</span>
      </CartLink>
    </NavLinks>
  </Nav>;
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

const NavLink = styled(Link)`
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