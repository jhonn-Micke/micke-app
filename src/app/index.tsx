import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onRegister = () => {
    router.push({
      pathname: "/register"
    });
  }

  const handleLogin = () => {
    // Validar campos vacíos
    if (!email.trim() || !password.trim()) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }

    // Validar Email con Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "El correo no es válido.");
      return;
    }

    // Validar Contraseña (mínimo 8 caracteres, mayúscula, minúscula y carácter especial)
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>_\-\/\\]/.test(password);

    if (password.length < 8 || !hasUpper || !hasLower || !hasSpecial) {
      Alert.alert(
        "Error",
        "La contraseña debe tener al menos 8 caracteres, mayúsculas, minúsculas y un carácter especial."
      );
      return;
    }

    // Alerta y limpia los campos al presionar OK
    Alert.alert("Éxito", "Validaciones correctas", [
      {
        text: "OK",
        onPress: () => {
          setEmail("");
          setPassword("");
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOPffQfLBkReDGo4CQ1ZYNomSqp11rea_gHpx8PIIwjw&s=10" }}
        style={styles.image}
      />

      <Text>Correo Electrónico:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Correo"
        autoCapitalize="none"
      />

      <Text>Contraseña:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
        secureTextEntry
      />

      <Button title="Ingresar" onPress={handleLogin} />
      <Button title="Registro" onPress={onRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 8,
  },
});