import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: "AlzaSyCkMSfXgvw-yJZKv_0oRr5P8CNxPbazkHk",  // 從「專案設定」中的「網路 API 金鑰」
  authDomain: "chibola-firebase-ai-app.firebaseapp.com",  // 可從 Firebase 控制台中自行推測或查看
  projectId: "chibola-firebase-ai-app",  // 專案 ID
  storageBucket: "chibola-firebase-ai-app.appspot.com",  // 存儲桶名稱，一般為 "專案 ID + appspot.com"
  messagingSenderId: "115756764913",  // 從 Firebase 控制台中的「專案編號」
  appId: "1:115756764913:ios:363b93a2772dfad4cc2350"  // 從 Firebase 控制台中的「應用程式 ID」
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
