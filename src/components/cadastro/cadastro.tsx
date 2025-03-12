import { useNavigate } from "react-router-dom";

const ContainerCadastro = () => {

    const navigate = useNavigate();

    const handleClickRedirectVoltar = () => {
		navigate('/');
	};
    const handleClickRedirectRegister = () => {
		navigate('/home');
	};

    return (
        <div className="background">
            <div className="registar">
                <div className="headerRegistar">
                    <div className="logo">
                        <img
                            src="/images/CapysLogo1.png"
                            alt="Capys Logo"
                        />
                    </div>
                    <div className="logo">
                        <button className="btnSair" onClick={handleClickRedirectVoltar}>Voltar</button>
                    </div>
                </div>
                <div className="containerRegistar">
                    <h1 className="tilte">Crie sua conta</h1>
                    <label htmlFor="" className="pergunta">Rapido e grátis, vamos nessa</label>
                    <div className="nome">
                        <label htmlFor="" className="paragraph">Nome</label>
                        <input type="text" className="inputRegistar" placeholder="Digite aqui seu nome"/>
                    </div>
                    <div className="email">
                        <label htmlFor="" className="paragraph">Email</label>
                        <input type="text" className="inputRegistar"  placeholder="Digite aqui seu email"/>
                    </div>
                    <div className="senha">
                        <label htmlFor="" className="paragraph">Senha</label>
                        <input type="password" name="" id="" className="inputRegistar"  placeholder="Digite aqui sua senha"/>
                    </div>
                    <div className="senha">
                        <label htmlFor="" className="paragraph">Confirmar Senha</label>
                        <input type="password" name="" id="" className="inputRegistar"  placeholder="Digite novamente sua senha"/>
                    </div>
                    <div className="bio">
                        <label htmlFor="" className="paragraph">Bio</label>
                        <input type="text" name="" id="" className="inputRegistar"  placeholder="Fale sobre você"/>
                    </div>
                    <div className="contato">
                        <label htmlFor="" className="paragraph">Contato</label>
                        <input type="text" name="" id="" className="inputRegistar" placeholder="Opções de contato" />
                    </div>
                    <div className="cargo">
                        <label htmlFor="" className="paragraph">Selecionar Cargo</label>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </div>
                    <button className="btnCadastrar" onClick={handleClickRedirectRegister}>Cadastar</button>
                </div>
            </div>
        </div>
    );
};

export default ContainerCadastro;