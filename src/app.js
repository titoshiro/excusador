window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let subject = [ "Mi chancho","Mi caballo", " Mi perro","Mi gato"," Mi conejo", " Mi loro"];
  let action = ["tomo mi ", "tiro mi", "dejo mi", "robo mi", "mordio mi"];
  let possetion = ["tarea", "comida", "telefono", "zapato"];
  let where = ["en la calle", "en mi casa", "en mi pieza"];

  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (subject[subjectIndex] + ` ` +action[actionIndex] + ` ` + possetion[possetionIndex] + ` ` + where[whereIndex] );
};
