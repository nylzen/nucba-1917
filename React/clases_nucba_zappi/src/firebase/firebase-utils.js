import { initializeApp } from 'firebase/app';
import {
  firebaseConfig,
  actionCodeSettingsVerification,
  actionCodeSettingsForgotPassword,
} from './firebase-config';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

export const createUserProfileDocument = async userAuth => {
  if (!userAuth || !userAuth.emailVerified) return;
  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(doc(firestore, `users/${userAuth.uid}`), {
        displayName: displayName || localStorage.getItem('username'),
        email,
        photoURL,
        createdAt,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
};

export const auth = getAuth();
auth.useDeviceLanguage();

// Create User
export const createUser = (email, password, displayName) =>
  createUserWithEmailAndPassword(auth, email, password).then(userCredential =>
    sendEmailVerification(
      userCredential.user,
      actionCodeSettingsVerification
    ).then(() => {
      alert(`Mensaje de verificación enviado al mail ${email}`);
      localStorage.setItem('username', displayName);
    })
  );

export const signInUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const resetPassword = email =>
  sendPasswordResetEmail(auth, email, actionCodeSettingsForgotPassword).then(
    () => alert(`Mail de recupero de contraseña enviado a ${email}`)
  );

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
