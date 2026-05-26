# MUI-REACT-ESBUILD Template

This is a template for making a modern, react based front end for a web app. It avoids using tools like Vite or create-react-app and utilizes custom and easily configurable tools (like esbuild). It is manual and versatile with less bloat and more control.

## Getting Started

These instructions will get you up and running with your project in minutes.

### Prerequisites
This is a standard node.js projct so just clone the repo (or derive your own project from it) and run `npm i`.

## Usage Examples

The template contains NPM scripts for building, developing, and serving your front-end:
* 'client': Builds the client-side code using esbuild and places it in the `public` folder.
* 'client:dev': Same as `client` but also watches the source code for changes and rebuilds whenever they are made.
* 'client:devserve': Starts a development server using esbuild so you can test local functionality. Also watches for changes and will auto-refresh the browser when rebuilding.

## Project Structure
A quick guide to the main directories.
*   `client/`: Contains all front-end code.
*   `public/`: Staging directory for the bundled front-end.
*   `ssl_certs/`: Optional folder to hold self-signed, dev SSL credentials.

## License
Distributed under the MIT License. See `LICENSE` for more information.
