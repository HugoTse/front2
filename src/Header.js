const Header = () => {
    const today = new Date();
    return (
        <header>
            <h1>
                Nautilus Marketing
            </h1>
            <p>Today's Date: {today.getFullYear()}/{today.getMonth()}/{today.getDate()}</p>
        </header>
    )
}

export default Header;