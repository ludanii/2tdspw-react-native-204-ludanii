import BasicTextInput from "@/components/BasicTextInput";
import { View, Text, StyleSheet } from "react-native";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import PrimaryButton from "@/components/PrimaryButton";
import { zodResolver } from "@hookform/resolvers/zod";

const addressSchema = z.object({
  name: z.string().min(1, "Name is required"),
  street: z.string().min(1, "Street is required"),
  number: z.string().min(1, "Number is required"),
  complement: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(8, "Zip code must be at least 8 characters"),
});

const Address = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addressSchema),
  });

  function handleAddressSubmit(data: any) {
    console.log("Address submitted:", data);
  }

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="zipCode"
        render={({ field: { onChange, value } }) => (
          <BasicTextInput
            onChangeText={onChange}
            value={value}
            label="CEP"
            error={!!errors.zipCode}
            errorText={errors.zipCode?.message}
            placeholder="00000-000"
          />
        )}
      />
      <Controller
        control={control}
        name="street"
        render={({ field: { onChange, value } }) => (
          <BasicTextInput
            onChangeText={onChange}
            value={value}
            label="Rua"
            error={!!errors.street}
            errorText={errors.street?.message}
            placeholder="Av Paulista"
          />
        )}
      />
      <Controller
        control={control}
        name="number"
        render={({ field: { onChange, value } }) => (
          <BasicTextInput
            onChangeText={onChange}
            value={value}
            label="Numero"
            error={!!errors.number}
            errorText={errors.number?.message}
            placeholder="1221"
          />
        )}
      />
      <Controller
        control={control}
        name="complement"
        render={({ field: { onChange, value } }) => (
          <BasicTextInput
            onChangeText={onChange}
            value={value}
            label="Complemento"
            error={!!errors.complement}
            errorText={errors.complement?.message}
            placeholder="3o andar"
          />
        )}
      />
      <Controller
        control={control}
        name="city"
        render={({ field: { onChange, value } }) => (
          <BasicTextInput
            onChangeText={onChange}
            value={value}
            label="Cidade"
            error={!!errors.city}
            errorText={errors.city?.message}
            placeholder="São Paulo"
          />
        )}
      />
      <Controller
        control={control}
        name="state"
        render={({ field: { onChange, value } }) => (
          <BasicTextInput
            onChangeText={onChange}
            value={value}
            label="Estado"
            error={!!errors.state}
            errorText={errors.state?.message}
            placeholder="SP"
          />
        )}
      />
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <BasicTextInput
            onChangeText={onChange}
            value={value}
            label="Nome"
            error={!!errors.name}
            errorText={errors.name?.message}
            placeholder="Minha Casa"
          />
        )}
      />
      <PrimaryButton
        text="Salvar"
        onPress={handleSubmit(handleAddressSubmit)}
      />
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 48,
  },
});
