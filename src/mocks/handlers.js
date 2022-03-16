import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) => {
    console.log("hola");
    return res(
      ctx.status(200),
      ctx.json({
        questions: [
          {
            question: "Question 1",
            answer:
              "Immediately invoked function expression. Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.",
            username: "",
            questionsLists: [],
            id: "6227b67fc624c56733927e2c",
          },
          {
            question: "Question 2",
            answer:
              "CI / CD: Continuous Integration / Continous Deliver. se va volcando (integrando) constantemente en la rama máster. Despliegue continuo es una aproximación de ingeniería del software en que los equipos de desarrollo entregan funcionalidades de software de forma frecuente a través de la automatización de despliegues.​​​",
            username: "",
            questionsLists: [],
            id: "622f8747956720c61ed3ebe5",
          },
        ],
      })
    );
  }),
];
