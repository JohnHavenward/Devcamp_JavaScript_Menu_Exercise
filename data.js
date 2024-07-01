

// MESSAGES & COMMENTS

const askMessages = [
      "BIENVENIDO AL RESTAURANTE BOTTEGA. ¿PARA QUÉ HORARIO TE GUSTARÍA HACER LA RESERVA?",
      "EL MENÚ CONSTA DE UN PLATO PRINCIPAL  Y DOS ACOMPAÑANTES. ¿CUAL DE LOS SIGUIENTES PLATOS PRINCIPALES QUIERES ELEGIR?",
      "SI LO DESEAS PUEDES MODIFICAR EL PLATO POR UN PEQUEÑO COSTE AÑADIDO.",
      "EL PRECIO DEL PLATO SERÍA (precio). ¿QUÉ ACOMPAÑANTE TE GUSTARÍA ELEGIR?",
      "¿TE GUSTARÍA HACER ALGUNA MODIFICACIÓN?",
      "ESTE ACOMPAÑANTE SERÍA (precio). ELIGE EL SEGUNDO.",
      "¿TE GUSTARÍA REALIZAR ALGUNA MODIFICACIÓN?",
      "SU PRECIO SERÍA (precio). Y PARA TERMINAR, ¿QUÉ TE GUSTARÍA TOMAR PARA BEBER?",
      "EL PRECIO TOTAL SERÍA (precio). ESPERO QUE DISFRUTES DE LA COMIDA Y LA ESTANCIA EN NUESTRO RESTAURANTE. ¡BUEN PROVECHO!"
]


const simpleComments = [
      "BUENA ELECCIÓN.",
      "SEGURO QUE TE ENCANTA.",
      "ES MI OPCIÓN FAVORITA  DE LA CARTA.",
      "BUENA ELECCIÓN, SEGURO QUE TE GUSTA MUCHO.",
      "ACABAMOS DE AÑADIR ESA OPCIÓN A LA CARTA Y ESTÁ GUSTANDO MUCHO.",
      "ESPERO QUE TENGAS MUCHA HAMBRE PORQUE LA RACIÓN ES MUY GRANDE.",
      "ACABAMOS DE MEJORAR LA RECETA Y ESTÁ TENIENDO MUCHO ÉXITO.",
      "ESA ES UNA ELECCIÓN MUY POPULAR ENTRE NUESTROS CLIENTES.",
      "MUCHOS CLIENTES SIEMPRE HACEN ESA ELECCIÓN CADA VEZ QUE NOS VISITAN."
]


const complexComments_AB = [
      "(A) Y (B) SON SIN DUDA UNA COMBINACIÓN PERFECTA.",
      "(A) Y (B) SON LAS DOS OPCIONES PREFERIDAS DE NUESTROS CLIENTES.",
      "SIEMPRE RECOMIENDO ELEGIR (B) CON (A).",
      "(A) ES NUESTRO PLATO ESTRELLA Y COMBINA MUY BIEN CON (B)."
]


const complexComments_ABC = [
      "(B) Y (C) SON BUENOS ACOMPAÑANTES PARA (A).",
      "(A), (B) Y (C) SON UNA DE LAS COMBINACIONES MÁS POPULARES ENTRE NUESTROS CLIENTES.",
      "(B) Y (C) SON LOS ACOMPAÑANTES QUE MÁS GUSTAN.",
      "(C) ES UN ACIERTO PARA ACOMPAÑAR A (A)."
]





// LUNCH & DINNER

const mainMenu = [
      {
            name: "HAMBURGUESA COMPLETA",
            price: 10.5,
            nightPrice: 13,
            customOptions: [
                  {
                        name: "EXTRA DE QUESO",
                        price: 1,
                        nightPrice: 2
                  },
                  {
                        name: "AÑADIR HUEVO FRITO",
                        price: 1.5,
                        nightPrice: 2
                  },
                  {
                        name: "AÑADIR SALSA PICANTE",
                        price: 1,
                        nightPrice: 1.5
                  },
                  {
                        name: "HACERLA DOBLE",
                        price: 4,
                        nightPrice: 5.5
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "ENSALADA CÉSAR",
            price: 8,
            nightPrice: 9.5,
            customOptions: [
                  {
                        name: "EXTRA DE POLLO",
                        price: 2,
                        nightPrice: 3
                  },
                  {
                        name: "AÑADIR CEBOLLA FRITA",
                        price: 1,
                        nightPrice: 1.5
                  },
                  {
                        name: "CON SALSA DE MIEL-MOSTAZA",
                        price: 2,
                        nightPrice: 2.5
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "COSTILLAS DE CERDO AHUMADAS",
            price: 15.5,
            nightPrice: 18,
            customOptions: [
                  {
                        name: "CON MIEL",
                        price: 2,
                        nightPrice: 3
                  },
                  {
                        name: "CON SALSA BARBACOA",
                        price: 2.5,
                        nightPrice: 3.5
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "BOCADILLO DE PECHUGA Y QUESO",
            price: 9,
            nightPrice: 11.5,
            customOptions: [
                  {
                        name: "AÑADIR BACON",
                        price: 2,
                        nightPrice: 3
                  },
                  {
                        name: "AÑADIR LECHUGA",
                        price: 1,
                        nightPrice: 1.5
                  },
                  {
                        name: "AÑADIR TOMATE",
                        price: 2,
                        nightPrice: 2.5
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "SANDWICH VEGETAL",
            price: 7,
            nightPrice: 8.5,
            customOptions: [
                  {
                        name: "HACERLO GRANDE",
                        price: 2,
                        nightPrice: 3
                  },
                  {
                        name: "EXTRA DE QUESO",
                        price: 1,
                        nightPrice: 2
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "PIZZA CARBONARA",
            price: 10.5,
            nightPrice: 12.5,
            customOptions: [
                  {
                        name: "HACERLA GRANDE",
                        price: 4,
                        nightPrice: 5
                  },
                  {
                        name: "EXTRA DE BACON",
                        price: 2,
                        nightPrice: 3
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
];


const sidesMenu = [
      {
            name: "NACHOS GRATINADOS",
            price: 4.5,
            nightPrice: 5.5,
            customOptions: [
                  {
                        name: "RACIÓN GRANDE",
                        price: 2,
                        nightPrice: 3
                  },
                  {
                        name: "AÑADIR JALAPEÑOS",
                        price: 1.5,
                        nightPrice: 2.5
                  },
                  {
                        name: "AÑADIR CEBOLLA FRITA",
                        price: 1,
                        nightPrice: 1.5
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "PATATAS FRITAS",
            price: 2,
            nightPrice: 3,
            customOptions: [
                  {
                        name: "AÑADIR SALSA DE MIEL-MOSTAZA",
                        price: 1,
                        nightPrice: 1.5
                  },
                  {
                        name: "AÑADIR SALSA BARBACOA",
                        price: 2,
                        nightPrice: 5
                  },
                  {
                        name: "AÑADIR SALSA BARBACOA",
                        price: 2,
                        nightPrice: 5
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "ALITAS DE POLLO",
            price: 5.5,
            nightPrice: 6.5,
            customOptions: [
                  {
                        name: "RACIÓN GRANDE",
                        price: 2.5,
                        nightPrice: 3
                  },
                  {
                        name: "CON SALSA BARBACOA",
                        price: 1.5,
                        nightPrice: 2
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "ARITOS DE CEBOLLA",
            price: 3,
            nightPrice: 4,
            customOptions: [
                  {
                        name: "RACIÓN GRANDE",
                        price: 1.5,
                        nightPrice: 2.5
                  },
                  {
                        name: "CON SALSA PICANTE",
                        price: 1,
                        nightPrice: 1.5
                  },
                  {
                        name: "CON SALSA BARBACOA",
                        price: 1,
                        nightPrice: 1.5
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "FINGERS DE QUESO",
            price: 3,
            nightPrice: 4,
            customOptions: [
                  {
                        name: "RACIÓN GRANDE",
                        price: 1,
                        nightPrice: 5
                  },
                  {
                        name: "CON SALSA DE MIEL-MOSTAZA",
                        price: 2,
                        nightPrice: 5
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "SALCHICHA A LA BRASA",
            price: 3.5,
            nightPrice: 4.5,
            customOptions: [
                  {
                        name: "DOS UNIDADES",
                        price: 2,
                        nightPrice: 3
                  },
                  {
                        name: "RELLENA DE QUESO",
                        price: 1.5,
                        nightPrice: 2
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      }
];


const beveragesMenu = [
      {
            name: "COCA-COLA",
            price: 2.5,
            nightPrice: 3,
      },
      {
            name: "VINO",
            price: 2.5,
            nightPrice: 3,
      },
      {
            name: "CERVEZA",
            price: 3.5,
            nightPrice: 4,
      },
      {
            name: "TÉ HELADO",
            price: 2.5,
            nightPrice: 3,
      },
      {
            name: "ZUMO DE PIÑA",
            price: 3,
            nightPrice: 3.5,
      },
      {
            name: "AGUA",
            price: 1.5,
            nightPrice: 2,
      }
];





// BREAKFAST

const breakfastMainMenu  = [
      {
            name: "HUEVOS FRITOS CON BACON",
            price: 3.5,
            customOptions: [
                  {
                        name: "HACERLOS REVUELTOS",
                        price: 0.5
                  },
                  {
                        name: "EXTRA DE BACON",
                        price: 1
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "TORTITAS CON MANTEQUILLA",
            price: 4.5,
            customOptions: [
                  {
                        name: "AÑADIR SIROPE DE ARCE",
                        price: 1
                  },
                  {
                        name: "AÑADIR NATA MONTADA",
                        price: 1.5
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "GOFRES CON NATA",
            price: 5.5,
            customOptions: [
                  {
                        name: "AÑADIR HELADO DE MANGO",
                        price: 2.5
                  },
                  {
                        name: "AÑADIR SALSA DE ARÁNDANOS",
                        price: 1
                  },
                  {
                        name: "AÑADIR SIROPE DE CHOCOLATE",
                        price: 0.5
                  },
                  {
                        name: "AÑADIR SIROPE DE FRESA",
                        price: 0.5
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "BOWL DE CEREALES",
            price: 3,
            customOptions: [
                  {
                        name: "AÑADIR NUECES TROCEADAS",
                        price: 1.5
                  },
                  {
                        name: "AÑADIR TROZOS DE CHOCOLATE",
                        price: 2
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "TOSTADAS FRANCESAS",
            price: 4,
            customOptions: [
                  {
                        name: "AÑADIR DE NATA",
                        price: 1
                  },
                  {
                        name: "AÑADIR HELADO DE PISTACHO",
                        price: 2
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "CROISSANTS A LA PLANCHA",
            price: 5,
            customOptions: [
                  {
                        name: "AÑADIR PLÁTANO Y CHOCOLATE",
                        price: 2.5
                  },
                  {
                        name: "AÑADIR MERMELADA DE KIWI",
                        price: 2
                  },
                  {
                        name: "AÑADIR MERMELADA DE MELOCOTÓN",
                        price: 1.5
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
];


const breakfastSidesMenu = [
      {
            name: "TOSTADA CON AGUACATE",
            price: 3,
            customOptions: [
                  {
                        name: "AÑADIR TOMATE",
                        price: 1
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "BROWNIE DE CHOCOLATE",
            price: 2.5,
            customOptions: [
                  {
                        name: "RACIÓN GRANDE",
                        price: 1.5
                  },
                  {
                        name: "AÑADIR NATA",
                        price: 0.5
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "COOKIE DE CHOCOLATE",
            price: 2,
            customOptions: [
                  {
                        name: "HACERLO DE CHOCOLATE BLANCO",
                        price: 0.5
                  },
                  {
                        name: "RELLENA DE CARAMELO",
                        price: 1
                  },
                  {
                        name: "DOS UNIDADES",
                        price: 1.5
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "FRUTAS CORTADAS",
            price: 3.5,
            customOptions: [
                  {
                        name: "RACIÓN GRANDE",
                        price: 1.5
                  },
                  {
                        name: "FRUTAS TROPICALES",
                        price: 1.5
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "MUFFIN DE CHOCOLATE",
            price: 3,
            customOptions: [
                  {
                        name: "RELLENA DE CARAMELO",
                        price: 1
                  },
                  {
                        name: "DOS UNIDADES",
                        price: 2
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "DONUT GLASEADO",
            price: 2.5,
            customOptions: [
                  {
                        name: "GLASEADO ESPECIAL",
                        price: 1.5
                  },
                  {
                        name: "DOS UNIDADES",
                        price: 2
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      }
];


const breakfastBeveragesMenu = [
      {
            name: "CAFÉ CON LECHE",
            price: 2.5,
      },
      {
            name: "ZUMO DE NARANJA",
            price: 3,
      },
      {
            name: "TÉ VERDE",
            price: 2,
      },
      {
            name: "CHOCOLATE CALIENTE",
            price: 4,
      },
      {
            name: "BATIDO DE VAINILLA",
            price: 3,
      },
      {
            name: "AGUA",
            price: 1.5,
      }
];





// MEALTIME

const mealTimeMenu = [
      {
            name: "DESAYUNO",
            useNightPrice: false,
            mainMenu: breakfastMainMenu,
            sidesMenu: breakfastSidesMenu,
            beveragesMenu: breakfastBeveragesMenu
      },
      {
            name: "COMIDA",
            useNightPrice: false,
            mainMenu: mainMenu,
            sidesMenu: sidesMenu,
            beveragesMenu: beveragesMenu
      },
      {
            name: "CENA",
            useNightPrice: true,
            mainMenu: mainMenu,
            sidesMenu: sidesMenu,
            beveragesMenu: beveragesMenu
      }
];