async function main() {
  setInterval(() => {
    let date = new Date();
    if (date.getHours() > 12) {
      console.log(
        `${date.getHours()}:${date.getMinutes()}:${date.getSec + onds()} PM`
      );
    } else {
      console.log(
        `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} PM`
      );
    }
  }, 1000);
}

main();
