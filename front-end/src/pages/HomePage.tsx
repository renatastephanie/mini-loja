import { useEffect, useState } from "react";
import { api } from "../services/api";
import { ProductCard } from "../components/ProductCard";
import { Navbar } from "../components/Navbar";
import type { IProduct } from "../types";
import styled from "styled-components";

export const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const categories = ["Sala", "Quarto", "Cozinha", "Escritório", "Banheiro"];

  useEffect(() => {
    fetchProducts();
  }, [search, category]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/products", {
        params: {
          search: search || undefined,
          category: category || undefined,
        },
      });
      setProducts(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Header>
          <Title>Nossos Produtos</Title>
          <SearchInput
            type="text"
            placeholder="Buscar produtos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Header>

        <Filters>
          <FilterButton
            active={category === ""}
            onClick={() => setCategory("")}>
            Todos
          </FilterButton>
          {categories.map((cat) => (
            <FilterButton
              key={cat}
              active={category === cat}
              onClick={() => setCategory(cat)}>
              {cat}
            </FilterButton>
          ))}
        </Filters>

        {loading ? (
          <Loading>Carregando produtos...</Loading>
        ) : products.length === 0 ? (
          <Empty>Nenhum Produto encontrado</Empty>
        ) : (
          <Grid>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

// STYLED COMPONENTS
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #1a1a2e;
`;

const SearchInput = styled.input`
  padding: 0.6rem 1rem;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 0.95rem;
  width: 280px;
  outline: none;
  transition: border 0.2s;

  &:focus {
    border-color: #1a1a2e;
  }
`;

const Filters = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.4rem 1rem;
  border-radius: 20px;
  border: 2px solid #1a1a2e;
  background: ${(props) => (props.active ? "#1a1a2e" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#1a1a2e")};
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background: #1a1a2e;
    color: white;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
`;

const Loading = styled.p`
  text-align: center;
  color: #666;
  font-size: 1rem;
  margin-top: 3rem;
`;

const Empty = styled.p`
  text-align: center;
  color: #666;
  font-size: 1rem;
  margin-top: 3rem;
`