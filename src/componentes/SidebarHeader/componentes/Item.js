

function Item (props) {
    return(
        <div className="item">
            <span className="iconeItem">{props.icone}</span>
            <span>{props.nome}</span>&nbsp;
        </div>
    )
}

export default Item;