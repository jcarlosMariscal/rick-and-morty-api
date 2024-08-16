export interface IError {
  code: number;
  message?: string;
}

export const errorCodes: IError[] = [
  { code: 404, message: "Not Found: El recurso solicitado no existe." },
  {
    code: 400,
    message: "Bad Request: Solicitud mal formada o parámetros inválidos.",
  },
  {
    code: 500,
    message: "Internal Server Error: Problema interno del servidor.",
  },
  {
    code: 429,
    message: "Too Many Requests: Demasiadas peticiones en poco tiempo.",
  },
];
