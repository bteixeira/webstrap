# webstrap

Set up the project (after `git clone`):
```bash
$ npm install
```

Compile the assets (run every time an asset source changes):
```bash
$ npx webpack
$ npx sass src/assets/sass/main.scss public/assets/main.css
```

Start the app server (also serves static assets):
```bash
$ npx ts-node --project src/server/tsconfig.json src/server/app.ts
```

Notes on server-side rendering of React components
==================================================

```bash
$ npx tsc --outDir ./tmp --module commonjs --lib es2015 --jsx react ./src/assets/ts/components/hello.tsx
```

```node
React = require('react')
ReactDOMServer = require('react-dom/server')

Hello = require('./tmp/hello').default
h = React.createElement(Hello, {name:'lalala'})
ReactDOMServer.renderToString(h)
```
