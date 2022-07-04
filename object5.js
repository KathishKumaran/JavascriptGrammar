let school = {
  name: "Vivekananda School",
  location: "Delhi",
  established: "1971",
  displayInfo: function () {
    console.log(
      `${school.name} was established in ${school.established} at ${school.location}`
    );
  },
};
school.displayInfo();
