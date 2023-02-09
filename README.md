# Login/Signup Path V0.0.1

This project was generated under [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Goal:

The goal is to develop a proof-of-concept that is disposable and allows for experimentation with the updated 
on-boarding process.

The approach utilizes a modular design, where the navigation flow is built using Angular's routing functionality. 
This allows for flexibility in making changes to the navigation structure more flexible, as modifying the 
route array of objects will be sufficient because changes to the navigation can be made without affecting other 
parts of the application.


## Run Development server

```js
cd <root-project-folder>
ng serve -o --poll=2000
````

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

```js
// cap add android
npx cap add android

// cap add ios
npx cap add ios

// XCode IOS / Android Studio Android Apps
npx cap open android
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

## Diagram Login/SignUp

```js

 ../src/assets/mermaid/mermaid-*.json
```

## Run Mock Server on background: `json-server`

```
```js
cd <root-project-folder>
json-server --watch src/assets/db.json
```

## This will generate:
```
  \{^_^}/ hi!

  Loading src/assets/db.json
  Done

  Resources
  http://localhost:3000/employees

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...

```

> Note: Don’t close this terminal, otherwise it will kill the json-server. Below are the sample CRUD requests and responses.

## JSON Server GET - Read All Employees
```
$ curl -X GET -H "Content-Type: application/json"  "https://localhost:3000/employees"
[
  {
    "id": 1,
    "name": "Pankaj",
    "salary": "10000"
  },
  {
    "name": "David",
    "salary": "5000",
    "id": 2
  }
]
$
```

##Get Employee based on ID from json-server
```
curl -X GET -H "Content-Type: application/json"  "https://localhost:3000/employees/1"
{
  "id": 1,
  "name": "Pankaj",
  "salary": "10000"
}
```

## JSON Server POST - Create an Employee
```
curl -X POST -H "Content-Type: application/json" -d '{"name": "Lisa","salary": "2000"}' "https://localhost:3000/employees"
{
"name": "Lisa",
"salary": 2000,
"id": 3
}
```

##JSON Server PUT - Update Employee Data
```
curl -XPUT -H "Content-Type: application/json" -d '{"name": "Lisa", "salary": "8000"}' "https://localhost:3000/employees/3"
{
  "name": "Lisa",
  "salary": 8000,
  "id": 3
}
```

## JSON Server DELETE - Delete an Employee
```
$ curl -X DELETE -H "Content-Type: application/json"  "https://localhost:3000/employees/2"
{}
$ curl -GET -H "Content-Type: application/json"  "https://localhost:3000/employees"
[
  {
    "id": 1,
    "name": "Pankaj",
    "salary": "10000"
  },
  {
    "name": "Lisa",
    "salary": 8000,
    "id": 3
  }
]
```

## Further information:
[json-server](https://www.digitalocean.com/community/tutorials/json-server)

