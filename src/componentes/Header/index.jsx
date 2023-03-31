import logosvg from '../../svg/shlogo.svg'

const Header = () => {

    const desclogo = "Logo da marca Sexy Houz"

    return (
        <header>
            <div>
                <img src={logosvg} alt={desclogo} />
                <h2 className="marca">Sexy Houz</h2>
            </div>
            <a href="https://www.instagram.com/sexyhouz/" target={'_blank'}>
                <button>INSTAGRAM</button>
            </a>
        </header>
    )
}

export default Header