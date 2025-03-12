import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	bio: string;
	contact: string;
	role: string;
}

const ContainerCadastro = () => {
    const navigate = useNavigate();

    const handleClickRedirectVoltar = () => {
        navigate('/');
    };
    
    const handleClickRedirectRegister = () => {
        navigate('/home');
    };

    const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		bio: '',
		contact: '',
		role: 'option1',
	});

    const showToast = (type: 'success' | 'error', message: string) => {
        if (type === 'success') {
            toast.success(message, {
                style: { backgroundColor: '#3fe864', color: '#f8f9fa' },
                className: 'custom-toast-success',
            });
        } else if (type === 'error') {
            toast.error(message, {
                style: { backgroundColor: '#e83f5b', color: '#f8f9fa' },
                className: 'custom-toast-error',
            });
        }
    };

    const validateForm = (): boolean => {
        const { name, email, password, confirmPassword, bio, contact } = formData;
        return (
            name.trim() !== '' &&
            email.trim() !== '' &&
            password.trim() !== '' &&
            confirmPassword.trim() !== '' &&
            bio.trim() !== '' &&
            contact.trim() !== ''
        );
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            showToast('error', 'As senhas não coincidem!');
        } else {
            showToast('success', 'Conta criada com sucesso!');
            setTimeout(handleClickRedirectRegister, 2000);
        }
    };

    return (
        <div className="background">
            <ToastContainer />
            <div className="registar">
                <div className="headerRegistar">
                    <div className="logo">
                        <img src="/images/CapysLogo1.png" alt="Capys Logo" />
                    </div>
                    <div className="logo">
                        <button className="btnSair" onClick={handleClickRedirectVoltar}>Voltar</button>
                    </div>
                </div>
                <form className="containerRegistar" onSubmit={handleSubmit}>
                    <h1 className="title">Crie sua conta</h1>
                    <label className="pergunta">Rápido e grátis, vamos nessa!</label>
                    <div className="nome">
                        <label className="paragraph">Nome</label>
                        <input type="text" name="name" className="inputRegistar" placeholder="Digite aqui seu nome" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="email">
                        <label className="paragraph">Email</label>
                        <input type="email" name="email" className="inputRegistar" placeholder="Digite aqui seu email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="senha">
                        <label className="paragraph">Senha</label>
                        <input type="password" name="password" className="inputRegistar" placeholder="Digite aqui sua senha" value={formData.password} onChange={handleChange} />
                    </div>
                    <div className="senha">
                        <label className="paragraph">Confirmar Senha</label>
                        <input type="password" name="confirmPassword" className="inputRegistar" placeholder="Digite novamente sua senha" value={formData.confirmPassword} onChange={handleChange} />
                    </div>
                    <div className="bio">
                        <label className="paragraph">Bio</label>
                        <input type="text" name="bio" className="inputRegistar" placeholder="Fale sobre você" value={formData.bio} onChange={handleChange} />
                    </div>
                    <div className="contato">
                        <label className="paragraph">Contato</label>
                        <input type="text" name="contact" className="inputRegistar" placeholder="Opções de contato" value={formData.contact} onChange={handleChange} />
                    </div>
                    <div className="cargo">
                        <label className="paragraph">Selecionar Cargo</label>
                        <select name="role" className="inputRegistar" value={formData.role} onChange={handleChange}>
                            <option value="option1">Desenvolvedor Front-end</option>
                            <option value="option2">Desenvolvedor Back-end</option>
                        </select>
                    </div>
                    <button className="btnCadastrar" type="submit" disabled={!validateForm()}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default ContainerCadastro;