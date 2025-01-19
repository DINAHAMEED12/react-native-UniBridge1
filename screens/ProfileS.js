
//Student Profile Screen
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const StudentProfileScreen = () => {
  const [name, setName] = useState(" ");
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchName = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setName(userDoc.data().name);
          } else {
            console.log("No name found.");
          }
        }
      } catch (error) {
        console.error("Error fetching user name:", error);
      }
    };

    const fetchProfile = async () => {
      try {
        const userDoc = await getDoc(doc(db, "users", auth.currentUser?.uid));
        if (userDoc.exists()) {
          setProfile(userDoc.data());
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchName();
    fetchProfile();
  }, []);

  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
      navigation.replace("Login")
    })
    .catch(error => alert(error.message))
  }

  return (
    <ScrollView style={styles.container}>
      {/* main informaiton */}
      <View style={styles.section1}>
        <Text style={styles.name}>{name}</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Academic Rank:</Text>
          <Text style={styles.value}> {profile.AcademicRank || "Not set"}
          </Text>

          <Text style={styles.label}>Academic Specialization:</Text>
          <Text style={styles.value}> {profile.AcademicSpecialization || "Not set"}
          </Text>

          <Text style={styles.label}>Level:</Text>
          <Text style={styles.value}>{profile.Level || "Not set"}
          </Text>

          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{profile.Email || "Not set"}
          </Text>

        </View>
      </View>

      {/* more informaiton */}
      <View style={styles.section2}>
        <Text style={styles.label}>Introduction/Brief CV:</Text>
        <Text style={styles.value}>{profile.Cv || "Not set"}</Text>
        <Text style={styles.label}>Expertise:</Text>
        <Text style={styles.value}>{profile.Expertise || "Not set"}</Text>
        <Text style={styles.label}>Publications:</Text>
        <Text style={styles.value}> {profile.Publications || "Not set"}
        </Text>
      </View>

      {/* Update Button */}
      <TouchableOpacity
        style={styles.updateButton}
        onPress={() => navigation.navigate("UpdateProfileS")}
      >
        <Text style={styles.updateButtonText}>Edit Your Information</Text>
      </TouchableOpacity>

      {/* Sign out Button */}
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.updateButton}
      >
        <Text style={styles.updateButtonText}>Sign out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default StudentProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  section1: {
    backgroundColor: "#b4cbeb",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  section2: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
    color: "#666",
  },
  updateButton: {
    height: 50,
    backgroundColor: "#1B3C87",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  updateButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
