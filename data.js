

// MESSAGES & COMMENTS

const askMessages = [
      "BIENVENIDO AL RESTAURANTE BOTTEGA. ¿PARA QUÉ HORARIO TE GUSTARÍA HACER LA RESERVA?",
      "EL MENÚ CONSTA DE UN PLATO PRINCIPAL  Y DOS ACOMPAÑANTES. ¿CUAL DE LOS SIGUIENTES PLATOS PRINCIPALES QUIERES ELEGIR?",
      "SI LO DESEAS PUEDES MODIFICAR EL PLATO POR UN PEQUEÑO COSTE AÑADIDO.",
      "EL PRECIO DEL PLATO SERÍA (precio). ¿QUÉ ACOMPAÑANTE TE GUSTARÍA ELEGIR?",
      "¿TE GUSTARÍA HACER ALGÚN CAMBIO A ESTE ACOMPAÑANTE?",
      "ESTE ACOMPAÑANTE SERÍA (precio). ¿CUAL TE GUSTARÍA QUE SEA EL OTRO?",
      "¿TE GUSTARÍA REALIZAR ALGUNA MODIFICACIÓN?",
      "SU PRECIO SERÍA (precio). Y POR ÚLTIMO YA, ¿QUÉ TE GUSTARÍA TOMAR PARA BEBER?",
      "EL PRECIO TOTAL SERÍA (precio). ESPERO QUE DISFRUTES DE LA COMIDA Y LA ESTANCIA EN NUESTRO RESTAURANTE. ¡BUEN PROVECHO!"
]


const simpleComments = [
      "ES MI OPCIÓN FAVORITA  DE LA CARTA.",
      "BUENA ELECCIÓN, SEGURO QUE TE GUSTA MUCHO.",
      "ACABAMOS DE AÑADIR ESA OPCIÓN A LA CARTA Y ESTÁ GUSTANDO MUCHO.",
      "ESPERO QUE TENGAS MUCHA HAMBRE PORQUE LA RACIÓN ES MUY GRANDE.",
      "BUENA ELECCIÓN.",
      "SEGURO QUE TE ENCANTA.",
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
      "(C) ES UN ACIERTO PARA ACOMPAÑAR A (A) "
]





// LUNCH & DINNER

const mainMenu = [
      {
            name: "HAMBURGUESA COMPLETA",
            price: 1.5,
            nightPrice: 2.5,
            customOptions: [
                  {
                        name: "EXTRA DE QUESO",
                        price: 1,
                        nightPrice: 5
                  },
                  {
                        name: "HACERLA DOBLE",
                        price: 2,
                        nightPrice: 5
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "ENSALADA CÉSAR",
            price: 2,
            nightPrice: 3,
            customOptions: [
                  {
                        name: "CON CEBOLLA FRITA",
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
            name: "COSTILLAS DE CERDO AHUMADAS",
            price: 2.5,
            nightPrice: 3.5,
            customOptions: [
                  {
                        name: "CON MIEL",
                        price: 1,
                        nightPrice: 5
                  },
                  {
                        name: "CON SALSA BARBACOA",
                        price: 2,
                        nightPrice: 5
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "BOCADILLO DE PECHUGA Y QUESO",
            price: 3,
            nightPrice: 4,
            customOptions: [
                  {
                        name: "CUSTOMIZAR D1",
                        price: 1,
                        nightPrice: 5
                  },
                  {
                        name: "CUSTOMIZAR D2",
                        price: 2,
                        nightPrice: 5
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "SANDWICH VEGETAL",
            price: 3,
            nightPrice: 4,
            customOptions: [
                  {
                        name: "CUSTOMIZAR E1",
                        price: 1,
                        nightPrice: 5
                  },
                  {
                        name: "CUSTOMIZAR E2",
                        price: 2,
                        nightPrice: 5
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
      {
            name: "PIZZA CARBONARA",
            price: 3,
            nightPrice: 4,
            customOptions: [
                  {
                        name: "HACERLA GRANDE",
                        price: 1,
                        nightPrice: 5
                  },
                  {
                        name: "CUSTOMIZAR F2",
                        price: 2,
                        nightPrice: 5
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
            price: 1.5,
            nightPrice: 2.5,
            customOptions: [
                  {
                        name: "RACIÓN GRANDE",
                        price: 1,
                        nightPrice: 5
                  },
                  {
                        name: "CUSTOMIZAR A2",
                        price: 2,
                        nightPrice: 5
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
                        name: "CUSTOMIZAR B1",
                        price: 1,
                        nightPrice: 5
                  },
                  {
                        name: "CUSTOMIZAR B2",
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
            price: 2.5,
            nightPrice: 3.5,
            customOptions: [
                  {
                        name: "RACIÓN GRANDE",
                        price: 1,
                        nightPrice: 5
                  },
                  {
                        name: "CON SALSA BARBACOA",
                        price: 2,
                        nightPrice: 5
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
                        price: 1,
                        nightPrice: 5
                  },
                  {
                        name: "CON SALSA PICANTE",
                        price: 2,
                        nightPrice: 5
                  },
                  {
                        name: "CON SALSA BARBACOA",
                        price: 2,
                        nightPrice: 5
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
            name: "PURÉ DE PATATA",
            price: 3,
            nightPrice: 4,
            customOptions: [
                  {
                        name: "CUSTOMIZAR F1",
                        price: 1,
                        nightPrice: 5
                  },
                  {
                        name: "CUSTOMIZAR F2",
                        price: 2,
                        nightPrice: 5
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
                        price: 1
                  },
                  {
                        name: "CUSTOMIZAR A2",
                        price: 2
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
                        name: "CON NATA MONTADA",
                        price: 2
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
                        name: "AÑADIR SALSA DE ARÁNDANOS",
                        price: 1
                  },
                  {
                        name: "CUSTOMIZAR C2",
                        price: 2
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
                        name: "CUSTOMIZAR D1",
                        price: 1
                  },
                  {
                        name: "CUSTOMIZAR D2",
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
                        name: "CUSTOMIZAR E1",
                        price: 1
                  },
                  {
                        name: "CUSTOMIZAR E2",
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
                        name: "AÑADIR NATA",
                        price: 1
                  },
                  {
                        name: "CUSTOMIZAR F2",
                        price: 2
                  },
                  {
                        name: "NO, GRACIAS",
                  }
            ]
      },
];


const breakfastSidesMenu = [
      {
            name: "TOSTA CON AGUACATE",
            price: 3,
            customOptions: [
                  {
                        name: "CUSTOMIZAR A1",
                        price: 1
                  },
                  {
                        name: "CUSTOMIZAR A2",
                        price: 2
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
                        name: "CUSTOMIZAR B1",
                        price: 1
                  },
                  {
                        name: "CUSTOMIZAR B2",
                        price: 2
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
                        name: "CUSTOMIZAR C1",
                        price: 1
                  },
                  {
                        name: "CUSTOMIZAR C2",
                        price: 2
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
                        name: "CUSTOMIZAR D1",
                        price: 1
                  },
                  {
                        name: "CUSTOMIZAR D2",
                        price: 2
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
                        name: "CUSTOMIZAR E1",
                        price: 1
                  },
                  {
                        name: "CUSTOMIZAR E2",
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
                        name: "CUSTOMIZAR F1",
                        price: 1
                  },
                  {
                        name: "CUSTOMIZAR F2",
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