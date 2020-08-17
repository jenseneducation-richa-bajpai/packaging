let storeNr;
function store(x) {
  storeNr = x;
  return storeNr;
}
function retrieve() {
  return console.log(storeNr);
}
store(1);
retrieve();
module.exports = {
  store,
  retrieve,
};
