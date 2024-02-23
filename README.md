# This is Unit test and end-to-end project to learn how to test projects.

# Too start the proyect:

    "start": "node index.js",

# To start the test:

    npm test

# The project is currently under Commonjs, to use ES6 modules:

1. create 2 files
   # babel.config.js:

```javascript
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
```

# jest.config.js:

    ```javascript

    module.exports = {
        transform: {
            '^.+\\.js$': 'babel-jest',
    },

};

    ```

2. Import your modules as above:
   `import { myFunction } from './myModule';`

3. Finally, change the packaje.json configuration

```javascript
{
  "type": "module"
}

```
# 