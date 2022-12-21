//the only thing that this api will do is to send data!
const express = require("express");
//the below will make sure that the app always uses the things that come with express that we need
const app = express();
const PORT = 8000;

const dogs = {
  stryker: {
    breed: "Boxador",
    age: 7,
  },
  spanky: {
    breed: "GSD/Beagle",
    age: 11,
  },
  izzy: {
    breed: "Rat Terrier",
    age: 2,
  },
  unknown: {
    age: 0,
    breed: "this did not work, try again",
  },
};

//going to something is a get, so app.get for them to go to your home url. '/' is always your home!
app.get("/", (request, response) => {
  //__dirname tells it to start looking in our folder and then find the index and send it!
  response.sendFile(__dirname + "/index.html");
});
app.get("/api/:name", (request, response) => {
  //the below line of code allows us to grab whatever query params are added, like the name!
  const dogName = request.params.name.toLowerCase();

  if (dogs[dogName]) {
    response.json(dogs[dogName]);
  } else {
    response.json(dogs["unknown"]);
  }
  response.json(dogs);
});
app.listen(PORT, () => {
  console.log("Server running on port 8000");
});
