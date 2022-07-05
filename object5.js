let school = {
  name: "shalom School",
  location: "pavoorchatram",
  established: "1994",
  displayInfo: function () {
    console.log(
      `${school.name} was established in ${school.established} at ${school.location}`
    );
  },
};
school.displayInfo();
