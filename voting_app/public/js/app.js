class ProductList extends React.Component{
    render(){
        return (
            <div className = 'ui stacable items'>
                This a Basic React Component.
            </div>
        )
    }
}
ReactDOM.render(
    <ProductList/>,
    document.getElementById('content')
)

class Product extends React.Component {
    render () {
        return (
            <div className = "item">
                <div className = "image">
                    <img src = "images/products/image-aqua.png"/>
                </div>
                <div className = "middle aligned content">
                    <div className = "">
                    </div>
                </div>
            </div>       
        )
    }
}