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

  datetime: {
    required: { value: true, message: "E' richiesta la data di nascita" },
    pattern: {
      value:
        /^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/,
      message: "Formato data non valido",
    },
  },
};
