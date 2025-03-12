import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContainerLogin = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClickRedirectHome = () => {
        navigate('/home');
    };

    const handleClickRedirectRegister = () => {
        navigate('/register');
    };

    const showToast = (type: 'success' | 'error', message: string) => {
        if (type === 'success') {
            toast.success(message, {
                style: { backgroundColor: '#343b41', color: '#f8f9fa' },
                className: 'custom-toast-success',
            });
        } else if (type === 'error') {
            toast.error(message, {
                style: { backgroundColor: '#343b41', color: '#f8f9fa' },
                className: 'custom-toast-error',
            });
        }
    };

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (email.trim() === "" || password.trim() === "") {
            showToast('error', 'Preencha todos os campos!');
            return;
        }
        showToast('success', 'Login realizado com sucesso!');
        setTimeout(handleClickRedirectHome, 2000);
    };

    return (
        <div className="background">
            <ToastContainer />
            <div className="login">
                <div className="logo">
                    <img src="/images/CapysLogo1.png" alt="Capys Logo" />
                </div>
                <form className="containerLogin" onSubmit={handleLogin}>
                    <h1 className="title">Login</h1>
                    <div className="email">
                        <label className="paragraph">Email</label>
                        <input 
                            type="email" 
                            className="inputLogin" 
                            placeholder="Digite seu email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="senha">
                        <label className="paragraph">Senha</label>
                        <input 
                            type="password" 
                            className="inputLogin" 
                            placeholder="Digite sua senha" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="btnEntrar" type="submit">Entrar</button>
                    <label className="pergunta">Ainda não possui uma conta?</label>
                    <button className="btnCadastre" type="button" onClick={handleClickRedirectRegister}>Cadastre-se</button>
                </form>
            </div>
        </div>
    );
};

export default ContainerLogin;
