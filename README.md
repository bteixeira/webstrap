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
$ npx ts-node src/app.ts
```
