import BasicTextInput from "@/components/BasicTextInput";
import { View, Text, StyleSheet } from "react-native";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import PrimaryButton from "@/components/PrimaryButton";
import { zodResolver } from "@hookform/resolvers/zod";
import SmartTextInput from "@/components/SmartTextInput";

const addressSchema = z.object({
  name: z.string().min(1, "Name is required"),
  street: z.string().min(1, "Street is required"),
  number: z.string().min(1, "Number is required"),
  complement: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(8, "Zip code must be at least 8 characters"),
});

type AddressFormData = z.infer<typeof addressSchema>;

const AddressScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addressSchema),
  });

  function handleAddressSubmit(data: AddressFormData) {
    console.log("Address submitted:", data);
  }

  return (
    <View style={styles.container}>
      <SmartTextInput
        control={control}
        name="zipCode"
        label="CEP"
        error={errors.zipCode?.message}
        placeholder="00000-000"
      />
      <SmartTextInput
        control={control}
        name="street"
        label="Rua"
        error={errors.street?.message}
        placeholder="Nome da rua"
      />
      <SmartTextInput
        control={control}
        name="number"
        label="Número"
        error={errors.number?.message}
        placeholder="Número da casa/apartamento"
      />
      <SmartTextInput
        control={control}
        name="complement"
        label="Complemento"
        error={errors.complement?.message}
        placeholder="Complemento (opcional)"
      />
      <SmartTextInput
        control={control}
        name="city"
        label="Cidade"
        error={errors.city?.message}
        placeholder="Nome da cidade"
      />
      <SmartTextInput
        control={control}
        name="state"
        label="Estado"
        error={errors.state?.message}
        placeholder="Nome do estado"
      />
      <SmartTextInput
        control={control}
        name="name"
        label="Nome"
        error={errors.name?.message}
        placeholder="Minha casa"
      />
      <PrimaryButton
        text="Salvar"
        onPress={handleSubmit(handleAddressSubmit)}
      />
    </View>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 48,
  },
});
