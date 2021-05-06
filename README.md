# Movies service Node MongoDB

## Quick Start

```bash
# Install Dependenncies
npm install
# Run app
npm start

# Insert Record API
Method - Post
url - BaseURL + /api/addMovies

Body  {
  name: "",]
  description: "",
  genres:"",
  duration: "",
  rating: "",
  releaseDate: ""
}

# Delete Record API
Method - Delete
url - BaseURL + /api/removeMovie/:name

Params -> name

# Retrive Data
 Method - GET
 url - BaseURL + /api/fetchMovies/:name?

 Params is optional

 # To Run test case
 npm run test