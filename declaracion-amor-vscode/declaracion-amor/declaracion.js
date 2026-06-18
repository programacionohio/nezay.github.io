/**
 * 💜 declaracion.js
 * 
 * No es un bug, es un feature.
 * El feature sos vos.
 */

// ============================================
//   🎵 on my mind — ZELL
//   "Siempre estás on my mind"
// ============================================

const sentimientos = {
  cuando_te_veo: "se me olvida lo que iba a decir",
  cuando_no_hablamos: "me pregunto qué estarás haciendo",
  cuando_me_contás_algo: "me importa más de lo que debería",
  conclusión: "esto ya no es solo amistad"
}

function loQueQuieroDecirte() {
  return `
    No sé exactamente cómo llegamos acá.
    
    Pero me di cuenta de algo:
    vos sos de las pocas personas con las que
    quiero hablar cuando me pasa algo bueno
    Y también cuando me pasa algo malo.
    
    Eso no le pasa con cualquiera.
  `
}

// ============================================
//   🌙 luna — ZELL feat. Salastkbron  
//   Por las noches que me quedo pensando en vos
// ============================================

class CasiAlgo {
  constructor(nombre) {
    this.nombre = Bastian         // ← tu nombre va acá
    this.intensidad = "mucha"
    this.miedos = ["que no sientas lo mismo", "arruinar lo que tenemos"]
    this.pero = "igual prefiero decírtelo"
  }

  declarar() {
    console.log(`${this.nombre},`)
    console.log(`quiero ser algo más que tu casi algo.`)
    console.log(`\n— 💜`)
  }
}

// ============================================
//   main
// ============================================

const yo = new CasiAlgo("(Bastian)")
yo.declarar()

/*
  Si estás leyendo esto...
  
  Hola. Soy yo.
  
  Me gustás.
  
  Fin del programa.
*/
