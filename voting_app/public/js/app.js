class ProductList extends React.Component{
    render(){
        const product = Seed.products[0];
        return (
            <div className = 'ui stacable items'>
                <Product
                id={product.id}
                title={product.title}
                description={product.url}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                 />
            </div>
        )
    }
}

class Product extends React.Component {
    render () {
        return (
            <div className = "item">
                <div className = "image">
                    <img src = {this.props.productImageUrl}/>
                </div>
                <div className = "middle aligned content">
                    <div className = "description">
                        <a href={this.props.url}>
                            {this.props.title}
                        </a>
                        <p>{this.props.description}</p>
                    </div>
                    <div>
                        <span> Submitted by: </span>
                        <img
                        className = 'ui avatar image'
                        src = {this.props.submitterAvatarUrl}
                        />
                    </div>
                </div>
            </div>       
        )
    }
}

ReactDOM.render(
    <ProductList/>,
    document.getElementById('content')
)