window.onload = () => {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = generadorExcusas();
  });
};

let generadorExcusas = () => {
  let familia = [ "Homero", " Marge","Lisa","Maggie", "Ayudante de santa"];
  let accion = ["tomo mi ", "tiro mi", "dejo mi", "saco mi", "encontro mi"];
  let objeto = ["tarea", "comida", "telefono", "skate"];
  let donde = ["en la calle", "en la casa", "en el patio"];

  let familiaRandom = Math.floor(Math.random() * familia.length);
  let accionRandom = Math.floor(Math.random() * accion.length);
  let objetoRandom = Math.floor(Math.random() * objeto.length);
  let dondeRandom = Math.floor(Math.random() * donde.length);

  return (familia[familiaRandom] + ` ` +accion[accionRandom] + ` ` + objeto[objetoRandom] + ` ` + donde[dondeRandom] );
};
