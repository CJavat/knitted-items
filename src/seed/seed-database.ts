async function main() {
  console.log("hola mundo");
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
