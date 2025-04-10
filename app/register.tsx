import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "@/components/PrimaryButton";
import BasicTextInput from "@/components/BasicTextInput";

import { object, string } from "yup";
import { Formik } from "formik";

const registerSchema = object({
  name: string().required("Por favor, preencha o campo nome."),
  email: string()
    .required("Por favor, preencha o e-mail")
    .email("Por favor, preencha o campo email."),
  password: string()
    .required()
    .min(8, "A senha deve ter pelo menos 8 caracteres."),
  confirmPassword: string().required(
    "Por favor, preencha o campo confirmar senha."
  ),
});

const Register = () => {
  function handleRegister({ name, email, password, confirmPassword }: any) {
    console.log("Register button pressed");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.intro}>
        Para comprar na nossa loja você precisa efetuar o seu cadastro. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Ab odit dolor
        nesciunt incidunt vero beatae. Architecto maxime consectetur et. Est
        iste distinctio non enim consectetur? Repudiandae, optio! Sit, obcaecati
        voluptatum?
      </Text>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registerSchema}
        onSubmit={handleRegister}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <>
            <BasicTextInput
              value={values.name}
              label="Nome"
              error={!!errors.name}
              errorText={errors.name}
              onChangeText={handleChange("name")}
              placeholder="Digite seu nome"
            />
            <BasicTextInput
              value={values.email}
              label="Email"
              error={!!errors.email}
              errorText={errors.email}
              onChangeText={handleChange("email")}
              placeholder="Digite seu email"
            />
            <BasicTextInput
              value={values.password}
              label="Senha"
              error={!!errors.password}
              errorText={errors.password}
              onChangeText={handleChange("password")}
              placeholder="Digite sua senha"
              secureTextEntry
            />
            <BasicTextInput
              value={values.confirmPassword}
              label="Confirmar Senha"
              error={!!errors.confirmPassword}
              errorText={errors.confirmPassword}
              onChangeText={handleChange("confirmPassword")}
              placeholder="Digite sua senha novamente"
              secureTextEntry
            />
            <PrimaryButton onPress={() => handleSubmit()} />
          </>
        )}
      </Formik>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  intro: {
    textAlign: "justify",
    marginBottom: 16,
    marginHorizontal: 32,
    color: "#666",
  },
  error: {
    color: "#ff3030",
  },
});
