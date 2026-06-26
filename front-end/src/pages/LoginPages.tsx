import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { useAuth } from "../context/AuthContext";
import type { IAuthResponse } from "../types";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await api.post<IAuthResponse>("/auth/login", {
        email,
        password,
      });

      login(response.data.token, response.data.user);
      navigate("/");
    } catch {
      setError("Email ou senha inválidos!");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form>
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
        
        <button type="button" onClick={handleSubmit}>Entrar</button>
      </form>

      <p>
        Não tem conta? <a href="/resgister">Cadastre-se</a>
      </p>
    </div>
  );
};
