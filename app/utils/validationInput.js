export default {
  name: { required: { value: true, message: "Il nome è obbligatorio" } },
  email: {
    required: { value: true, message: "L'e-mail è richiesta" },
    pattern: {
      value:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Formato email non valido",
    },
  },
  password: {
    required: { value: true, message: "E' richiesta la password" },
  },
};
