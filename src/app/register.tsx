import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Register() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // 1. Validar que ningún campo esté vacío
    if (!email.trim() || !username.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }

    // 2. Validar Email con Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "El correo electrónico no es válido.");
      return;
    }

    // 3. Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }

    // 4. Validar reglas de contraseña
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

    // Éxito: Alerta y redirige al Index
    Alert.alert("Éxito", "Registro completado con éxito.", [
      {
        text: "OK",
        onPress: () => router.replace("/"),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Encabezado Superior (Barra gris-azulada con < y título Registro) */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Registro</Text>
      </View>

      {/* Formulario */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#888"
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Nombre de usuario"
          placeholderTextColor="#888"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Contraseña"
          placeholderTextColor="#888"
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirmar Contraseña"
          placeholderTextColor="#888"
          secureTextEntry
        />

        {/* Botón con borde celeste/cyan */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  header: {
    height: 60,
    backgroundColor: "#738A9C", // Color de la barra gris-azulada
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  backButton: {
    position: "absolute",
    left: 15,
  },
  backText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "500",
  },
  form: {
    alignItems: "center",
    paddingTop: 30,
    gap: 15,
  },
  input: {
    width: "75%",
    height: 42,
    borderWidth: 2,
    borderColor: "#F1C40F", // Borde amarillo
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
  },
  button: {
    width: "45%",
    height: 40,
    borderWidth: 2,
    borderColor: "#71B6C8", // Borde celeste/cyan
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#333333",
    fontSize: 15,
  },
});