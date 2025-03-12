import { useNavigate } from "react-router-dom";

const ContainerLogin = () => {

    const navigate = useNavigate();

	const handleClickRedirectHome = () => {
		navigate('/home');
	};
    const handleClickRedirectRegister = () => {
		navigate('/register');
	};
    
    return (
        <div className="background">
            <div className="login">
                <div className="logo">
                    <img
                        src="/images/CapysLogo1.png"
                        alt="Capys Logo"
                    />
                </div>
                <div className="containerLogin">
                    <h1 className="tilte">Login</h1>
                    <div className="email">
                        <label htmlFor="" className="paragraph">Email</label>
                        <input type="text" className="inputLogin" />
                    </div>
                    <div className="senha">
                        <label htmlFor="" className="paragraph">Senha</label>
                        <input type="password" name="" id="" className="inputLogin"/>
                    </div>
                    <button className="btnEntrar" onClick={handleClickRedirectHome}>Entrar</button>
                    <label htmlFor="" className="pergunta">Ainda não possiu uma conta?</label>
                    <button className="btnCadastre" onClick={handleClickRedirectRegister}>Cadastre-se</button>
                </div>
            </div>
        </div>
    );
};

export default ContainerLogin;