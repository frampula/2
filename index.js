class HeaderComponent extends React.Component {
  render() {
    console.log(this.props);
    const p = React.createElement("p", {}, "Super paragraph");
    const h2 = React.createElement(
      "h2",
      { title: "Hi!" },
      `Hello ${this.props.name}`
    );
    const article = React.createElement("article", {}, h2, p);
    return article;
  }
}

const component = React.createElement(HeaderComponent, { name: "John" }, 'Text -- John');
const component2 = React.createElement(HeaderComponent, { name: "Oleg" }, 'Text -- Oleg');

const parentElement = React.createElement("section", {}, component, component2);

const root = document.querySelector("#root");

ReactDOM.render(parentElement, root);