# SETUP


### Setting up the project
- mkdir project-name && cd $_
- mkdir -p src
- npm init -y

### Setting up webpack
- npm i webpack --save-dev
- npm i webpack-cli --save-dev

**package.json**
````javascript
"scripts": {
  "build": "webpack --mode production"
}
````

### Setting up Babel
- npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

**.babelrc**
````javascript
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
````

**webpack.config.js**
````javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
````
### Writing React components
- npm i react react-dom
-  mkdir -p src/js/components/{container,presentational}
- touch src/js/components/container/FormContainer.jsx

**FormContainer.jsx**
````javascript
import React, { Component } from "react";
import ReactDOM from "react-dom";
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  render() {
    return (
      <form id="article-form">
      </form>
    );
  }
}
export default FormContainer;
````

- touch src/js/components/presentational/Input.jsx

- npm i prop-types --save-dev

**FormContainer.jsx**
````javascript
import React from "react";
import PropTypes from "prop-types";
const Input = ({ label, text, type, id, value, handleChange }) => (
  <div className="form-group">
    <label htmlFor={label}>{text}</label>
    <input
      type={type}
      className="form-control"
      id={id}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);
Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default Input;
````

**FormContainer.jsx**
````javascript
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    return (
      <form id="article-form">
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}
export default FormContainer;
````

- import FormContainer from "./js/components/container/FormContainer.jsx";

- npm run build

Bundle placed in: ./dist/main.js

### Add the HTML webback plugin
- npm i html-webpack-plugin html-loader --save-dev

**webpack.config.js**
````javascript
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
````

**./src/index.html**
````html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" >
    <title>How to set up React, Webpack, and Babel</title>
</head>
<body>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-4 offset-md-1">
                <p>Create a new article</p>
                <div id="create-article-form">
                    <!-- form -->
                </div>
            </div>
        </div>
    </div>
</body>
</html>
````javascript

**FormContainer.jsx**
Add at bottom:
````javascript
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
````

- npm run build

### Add the webpack dev server
- npm i webpack-dev-server --save-dev

**package.json**
````javascript
"scripts": {
  "start": "webpack-dev-server --open --mode development",
  "build": "webpack --mode production"
}
````
### Run project
- npm start



