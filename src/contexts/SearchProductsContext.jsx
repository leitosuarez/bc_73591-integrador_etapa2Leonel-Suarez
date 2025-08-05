import { createContext } from "react";

const SearchProductsContext = createContext()

const SearchProductsProvider = ({children})=> {

    
    const data = {

    }
    return <SearchProductsContext.Provider value={data}>{children}</SearchProductsContext.Provider>
}

export {SearchProductsProvider}
export default SearchProductsContext