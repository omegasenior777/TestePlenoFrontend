import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    const handleClickRedirectSair = () => {
		navigate('/');
	};

    return (
        <div className="navbar">
            <div>
                <img
                    src="/images/CapysLogo6.png"
                    alt="Capys Logo"
                />
            </div>
            <div>
                <button
                    className="btnSair"
                    onClick={handleClickRedirectSair}
                >
                    Sair
                </button>
            </div>
        </div>
    );
};

export default Navbar;