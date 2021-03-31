import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore();

firestore.collection('users').doc('tUsCFDW68p3epKCvVwpu').collection('cartItems').doc('ZXmAiQqBjBaY4UZljoe4');
firestore.doc('/users/tUsCFDW68p3epKCvVwpu/cartItems/ZXmAiQqBjBaY4UZljoe4');
firestore.collection('/users/tUsCFDW68p3epKCvVwpu/cartItems');


