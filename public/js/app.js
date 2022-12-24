class ListaProdutos extends React.Component {
  state = {
    produtos: [],
  };

  componentDidMount() {
    this.setState({ produtos: Seed.produtos });
  }

  manipulacaoVotosPositivosProduto = (idproduto) => {
    const proximosProdutos = this.state.produtos.map((produto) => {
      if (produto.id === idproduto) {
        return Object.assign({}, produto, {
          votos: produto.votos + 1,
        });
      } else {
        return produto;
      }
    });
    this.setState({ produtos: proximosProdutos });
  };

  /* O único método que precisa estar presente em um componente React */
  render() {
    const produtos = this.state.produtos.sort((a, b) => b.votos - a.votos);

    const arrayComponentesProduto = produtos.map((produto) => (
      <Produto
        key={'produto-' + produto.id}
        id={produto.id}
        titulo={produto.titulo}
        descricao={produto.descricao}
        url={produto.url}
        votos={produto.votos}
        avatarRemetenteUrl={produto.avatarRemetenteUrl}
        produtoImagemUrl={produto.produtoImagemUrl}
        votar={this.manipulacaoVotosPositivosProduto}
      />
    ));
    return (
      <div className="ui unstackable items">{arrayComponentesProduto}</div>
    );
  }
}

class Produto extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.manipulaVotoPositivo = this.manipulaVotoPositivo.bind(this);
  // }

  // manipulaVotoPositivo() {
  //   this.props.votar(this.props.id);
  // }

  manipulaVotoPositivo = () => this.props.votar(this.props.id);

  render() {
    return (
      <div className="item">
        <div className="image">
          <img src={this.props.produtoImagemUrl} />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a onClick={this.manipulaVotoPositivo}>
              <i className="large caret up icon" />
            </a>
            {this.props.votos}
          </div>
          <div className="description">
            <a href={this.props.url}>{this.props.titulo}</a>
            <p>{this.props.votos}</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img
              className="ui avatar image"
              src={this.props.avatarRemetenteUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}

/* O método a seguir determina o quê queremos renderizar (ListaProdutos) e
   aonde desejaomos que isso seja feito (no elemento que possui o id --content--
   dentro de index.html) 
*/
ReactDOM.render(<ListaProdutos />, document.getElementById('content'));
