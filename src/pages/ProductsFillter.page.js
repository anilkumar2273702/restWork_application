import React from "react";
import { productCategoryList } from "../_services/product.service";

class ProductsFillterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productCategoryLists: [],
      loading: true,
    };
  }

  componentDidMount() {
    // USING METHOD TO GET ALL CATEGORIES
    this.fetchAllCategoryList();
  }

  // USING METHOD TO GET ALL CATEGORIES
  fetchAllCategoryList = async () => {
    productCategoryList().then(
      (response) => {
        // IF GETTING RESPONSE TRUE THEN SHOULD BE LOGIN AND REDIRCT
        if (response.completed) {
          this.setState({ productCategoryLists: response.categories });
        }
        this.setState({ loading: false });
      },
      (error) => this.setState({ error, loading: false })
    );
  };

  render() {
    const { productCategoryLists } = this.state;
    return (
      <div className="col-sm-4">
        <div className="product-sidebar">
          <div className="filter-sections">
            <h3>Categorias</h3>
            {productCategoryLists.map((items, index) => {
              return (
                <div
                  key={index}
                  className="custom-control custom-checkbox mb-3"
                >
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id={"category_" + index}
                    name="selected_categories"
                    value={items.categoryId}
                    onChange={this.props.handleOnChange}
                    // checked
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={"category_" + index}
                  >
                    {items.name}
                  </label>
                </div>
              );
            })}
          </div>
          
          <div className="filter-sections">
            <h3>Ordenar por precio</h3>
            <div className="range-slider">
              <div id="slider-range"></div>
              <label htmlFor="amount">Price range:</label>
              <input
                type="text"
                id="amount"
                readOnly
                style={{
                  border: 0,
                  color: "#f6931f",
                  fontWeight: "bold",
                }}
              />
            </div>
          </div>
          <div className="filter-sections">
            <h3>Porcion</h3>
            <div className="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="personal"
              />
              <label className="custom-control-label" htmlFor="personal">
                Personal
              </label>
            </div>
            <div className="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="para2"
              />
              <label className="custom-control-label" htmlFor="para2">
                Para 2
              </label>
            </div>
            <div className="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="para4"
              />
              <label className="custom-control-label" htmlFor="para4">
                Para 4
              </label>
            </div>
            <div className="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="familiar"
              />
              <label className="custom-control-label" htmlFor="familiar">
                Familiar
              </label>
            </div>
          </div>
          <div className="filter-sections">
            <h3>Seleccion de busqueda</h3>
            <div className="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="todos1"
              />
              <label className="custom-control-label" htmlFor="todos1">
                Todos
              </label>
            </div>
            <div className="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="personal1"
              />
              <label className="custom-control-label" htmlFor="personal1">
                Personal
              </label>
            </div>
          </div>
        
        </div>
      </div>
    );
  }
}

export { ProductsFillterPage };
