import React, { useState } from "react";

import "./styles.css";

const LoginPage = () => {

    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("submit", {email, password});

        //lógica validando email e senha
        if (email === "rafaela@email.com" && password === "1234"){
            exibirMensagem("Acessado com sucesso!");
        }
        else {
            exibirMensagem("Email ou Senha incorretos.");
        }

        function exibirMensagem(mensagem, tipo) {
            var divMensagem = document.getElementById("mensagem");
            divMensagem.innerHTML = mensagem;
            divMensagem.className = tipo;
        }
    };

    return (
        <div id="login">
            <h1 className="title">Login</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div className="actions">
                    <button type="submit">Acessar</button>
                </div>
                <div className="tipo">
                    <label id="mensagem"></label>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;