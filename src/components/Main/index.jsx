import CardList from "../CardList"
import Search from "../Search"
import "./Main.css"

const Main =()=>{
    return(
        <main>
            <div className="main-header">
                <p>Product</p>
                <Search/>
            </div>
            <CardList/>
        </main>
        
    )
}


export default Main