import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { useAuth } from "../context/AuthContext";
import type { IAuthResponse } from "../types";

export const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await api.post<IAuthResponse>("/auth/register", {
        name,
        email,
        password,
      });

      login(response.data.token, response.data.user);
      navigate("/");
    } catch {
      setError("Erro ao criar conta. Tente novamente!");
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      {error && <p>{error}</p>}
      <form>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleSubmit}>
          Cadastrar
        </button>
      </form>

      <p>
        Já tem conta? <a href="/login">Entrar</a>
      </p>
    </div>
  );
};
