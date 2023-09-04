# ExchangeFrontEnd

This project was generated using [Nx](https://nx.dev).

Calib Exchange frontend consists of two apps.

- Auth -> Authentication for Terareum exchange with Register, Login, Forget password, 2FA
- Admin -> Admin app for Login, Displaying User KYC List, Aprove/Reject User KYC

### Installation
1. Clone this repository: `git clone <repository-url>`
2. Navigate to the project folder: `cd @exchange-front-end`
3. Install project dependencies: `npm install`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@exchange-front-end//mylib`.

## Development server

- `npm start:auth`: Start the development server for the 'auth' project on port 4200.
- `npm start:admin`: Start the development server for the 'admin' project on port 4201.
- ...

## Build

- The build artifacts will be stored in the `dist/` directory.

-- Auth test -> Run `build:auth:test` to build the project.
-- Admin test -> Run `build:admin:test` to build the project.
-- Auth stage -> Run `build:auth:stage` to build the project.
-- Admin stage -> Run `build:admin:stage` to build the project.
-- Auth preprod -> Run `build:auth:preprod` to build the project.
-- Admin preprod -> Run `build:admin:preprod` to build the project.
-- Auth prod -> Run `build:auth:prod` to build the project.
-- Admin prod -> Run `build:admin:prod` to build the project.

## Running unit tests

- Auth app -> Run `npm run test:auth` to execute the unit tests.
- Admin app -> Run `npm run test:admin` to execute the unit tests.
