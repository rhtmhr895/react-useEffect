const Footer = ({ length }) => {
    return (
        <footer>
            <p>{length} List {length === 1 ? "item" : "items"} - Copyright &nbsp;</p>
        </footer>
    )
}

export default Footer
