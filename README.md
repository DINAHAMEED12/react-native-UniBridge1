# UniBridge

UniBridge is an innovative app designed to facilitate seamless communication between students and teachers. It provides a platform for students to connect with their teachers for academic guidance and mentorship, while teachers can engage with students, share knowledge, and provide academic support. The app bridges the gap between teachers and students, making communication efficient and effective.

## Features

- **Direct Communication**: Enables easy and quick communication between students and teachers.
- **Academic Support**: Provides academic guidance for students, helping them with their studies and assignments.
- **Ongoing Interaction**: Promotes continuous interaction between students and teachers, enhancing the learning experience.
- **User-Friendly Interface**: The app is designed with a simple and intuitive interface that is easy to navigate for all users.

## Benefits

- **Bridges the Gap**: Connects students and teachers in a simple and effective way.
- **Flexible Learning**: Facilitates academic support and guidance in real-time, making it easy to get help when needed.
- **Enhanced Learning Experience**: Provides a more interactive and engaging learning environment, improving academic performance.
- **Accessible Anytime, Anywhere**: The app is available on mobile devices, allowing students and teachers to stay connected from any location.


## Demo Video

- **Demo Video**: [Watch the Demo Video here](https://youtu.be/8KA-WbdsV5g?si=U338Y28vj383mila)


## Technologies Used

- **React Native**(0.76.5): The app is built using React Native, enabling cross-platform support for both Android and iOS.
- **React Navigation**: Used for navigating between different screens within the app.
- **Firebase**: For real-time communication and data management.
- **Visual Studio Code**:  A lightweight code editor for writing and editing app code with features like syntax highlighting, code completion, and debugging.
- **Android Studio**:   An IDE for Android development, used for building and testing Android apps on devices or emulators.



## Screen Structure:
### 1.	Welcome Screen (Welcome): Entry/ intro and navigation to login or sign-up.
### 2.	Login Screen (Login): Log into an account.
### 3.	Signup Screen (signup): User registration with the selection of a role between a student and Teacher.
### 4.	Home Screens: there is two home screens 
#### •	HomeScreenS: Home screen of students, composed of tabs such as Search, Chats, Profile.
#### •	HomeScreenT: Home screen of teachers, composed of tabs such as Search, Chats, Profile.
### 5.	Profile Screens: 
#### •	ProfileS: Profile management page for the student.
#### •	UpdateProfileS: Edit the student profile information.
#### •	ProfileT: Profile management page for the teacher.
#### •	UpdateProfileT: Edit the teacher profile information.
### 6.	Search Screen (SearchScreen): Search for teachers with favorite and chat options.
### 7.	Chat Screens: 
#### •	ChatListScreen: List of chat conversations.
#### •	ChatScreen: Individual chat interface.
### 8.	Role-Based Profile Views: 
#### •	ProfileSForT: Student profile as viewed by a teacher.
#### •	ProfileTForS: Teacher profile as viewed by a student.

## Setup Instructions
### 1.	Clone this project
#### •	git clone < project-url.git >
### 2.	Install Node.js packages
### 3.	Install dependencies: 
#### •	npm install
### 4.	Set Up Firebase:
#### •	Create a Firebase project, and set authentication and Firestore according to it. Replace the template values in 'firebase.js' from your Firebase Project details
### 5.	 Assets and Environment:
#### •	Place the needed images (image3.png) inside the assets folder.

## Running the Project
### 1.	Start the App: Write npm start on terminal. 
### 2.	Open in Emulator or Physical Device:
#### •	Use Expo Go to scan the QR code from the terminal.
#### •	For Android Emulator: 
##### - Install 'Android Studio'.  Set up 'Android Virtual Device'.
##### - Press a in the terminal to open it in the Android emulator.
#### •	For iOS Simulator: 
##### - Install Xcode and open the iOS Simulator
##### - Press i in the terminal to open it in the iOS Simulator.
### 3.	Debugging:
#### •	Database or authentication errors can be checked in the Firebase Console.



## Future plan:
### 1-	We will consider adding a paid per hour feature for the teacher.
### 2-	We might also add a small map that show student the way to teacher office.

## External information:
### •	Password should not be less than 6 charecters/numbers 
### •	Email should be in a correct form as (xxx@xxx.com) 

## Resources:
### Home page / login picture: https://pin.it/42OQreyi2 

### Video that helps us learning methods:
### https://youtu.be/ONAVmsGW6-M?si=vlhJk-dk4_ac1ZIo 
### https://youtu.be/U1PIrZBgv0U?si=-HOZdUSmrcPrZwUu 
### https://youtu.be/uA9ejPZiEOw?si=k_BDxV5mX6w59YSg 





