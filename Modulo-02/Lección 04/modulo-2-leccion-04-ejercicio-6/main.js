"use strict";
function getEl(x) {
  const element = document.querySelector(x);
  if (element === null) {
    console.error(`No existe ningún elemento con clase, id o tag llamado ${x}`);
  } else {
    console.log(element);
  }
  return element;
}
getEl(".text8"); //Me devuelve el texto no existe (...) porque no existe esa clase
getEl(".text3");
