<a href="https://github.com/whosramoss/three-boilerplate">
  <img alt="three-boilerplate" src="./public/images/thumbnail.png" />
  <h1 align="center">Three Boilerplate</h1>
</a>

<p align="center">
  Three Boilerplate is a quick starter template for React/Typescript projects usint Three.js, designed to build dynamic and engaging web experiences.
</p>

<div align="center">
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/React-563D7C?style=for-the-badge&logo=React&logoColor=fff" alt="React">
  <img src="https://img.shields.io/badge/Tailwind-FEFEFE?style=for-the-badge&logo=tailwindcss" alt="Tailwind">
  <img src="https://img.shields.io/badge/Typescript-007acc?style=for-the-badge&logo=typescript&logoColor=fff" alt="TypeScript">
  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js">
</div>
<br/>


<br/>

## How to install

```bash
  # Clone the project
  git clone https://github.com/whosramoss/three-boilerplate/

  # Go to the project directory
  cd three-boilerplate

  # Install dependencies
  npm install

  # Start the server 
  npm run dev

```
## How to build

```bash
 # Simple buiçd
  npm run build

  # Build with source map disabled
  npm run build-sourcemap-disabled
```

## Implement Apache HTTP Server file to refresh page with React Router on Build
Create a ```.htaccess``` file on root and implement the code above :

```bash
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```
