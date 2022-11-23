export const firebaseConfig = {
  apiKey: 'AIzaSyDX1NJWxLpUcvNn-wsM6_NlFHipzB9A-LM',
  authDomain: 'nucba-zappi-1917.firebaseapp.com',
  projectId: 'nucba-zappi-1917',
  storageBucket: 'nucba-zappi-1917.appspot.com',
  messagingSenderId: '918103198165',
  appId: '1:918103198165:web:1a6780f65253735c67555c',
};

export const actionCodeSettingsVerification = {
  url: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '',
};

export const actionCodeSettingsForgotPassword = {
  url:
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000/login' : '',
};
