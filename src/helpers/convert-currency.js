const convertCurrency = (number)=> {
    return new Intl.NumberFormat("es-ES", {style:"currency", currency:"ARG"}).format(
        number,
    )
}

export default convertCurrency