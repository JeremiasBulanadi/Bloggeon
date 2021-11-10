import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    "type": "service_account",
    "project_id": "asi-midterms",
    "private_key_id": "a4152f6622bc5c44688491041313b4602eaa4143",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDmNSaXDU9Xro6j\nVsuMYMRQsrc2GvteTdnaBOwN6el8/vSGc/ziZ1GIXjIpiMOm75FhNQXc3ThH/rn6\nXGX3zugVywhEuMBMTBEOZX1EAX9mIxTvBMXe7RMnPZNG1mQjJjnc2ZxoFcyBiANM\nfP0M9lOVYT59lYSrAqMSy42zCoUtf/gexdvLN0oSuxbndR20snvwCktNmu0Ed/bE\njGPO+6EXIXYKWxkR5bnuGi9df8CrBBwWR6oPaZMiq/n/dNbqsAvCPh02IY5qCWie\nrPtbt6tZbHLBFG0CQp9DsOfGB1CZOILn7+sNWJT5EJYo8Wz3GGY9RqRrutgSxVeQ\ncfgweZCpAgMBAAECggEAWbEPrf6TkTgDfwRMHg99rWtUEpKEqYNvg5AzYGBohjjX\nkKMUPim/DICWzrPodtwUKml8NUdDrFlEoJTrbZeBuSv3tr68vX1Nj+xe1+Y1etfk\nShPz/B0mPz2wagMR1NgJ51ApriwAF9+kWWLBPRGkEylmLYvZur82RhZkyQMqTEU4\nfQnDzAzDAF0H1tSmyukvKx5VjCIwVvN873kNb6pMMeFMv5/ccrGiBfn2aoI6W4+t\nNoVrZ9kMx9w8Rua5V8bNQBJFyKXBk0fRME0aCTJ37j3PH+Qe5LYyxd1uZxovpn8n\n2dt6WsLjnhUgVO79jhReuCh5TOys8twWsy8SqQ61eQKBgQD0CY3yrLn0r8Be8DS5\n4TaQdWuvcxx66D/3hsUGRJo/ZYYEHawE5gE/Av5gQh6tmWXkOdHV5D4p4Hl3UBRm\nXG1ORXkaIeDPw9dSckIQsp5R51hfSGCgMpnU6tOEYsmW5DJ75mHAAdNCwa152/As\nX9WE1h94xKbV/CUjikk9fQfkkwKBgQDxfgvO/lx1UVVj7jks1CVgPKoxJ1rPI3/N\npNMWJjmPczD7+KDr7BEwMIw8JLJgHAtpd5Lni8EH1pwZ8ZPPRl+5giXxgS2nPQz3\nWlVHCSQ/B8l4VaO18aLR91TQPjMhbX22Y1qsWyIzqvpL0p27GJNMwSIQEUrPiu9u\nj+/DlSHXUwKBgQDggbm5O/aHiPitXsbjCrIsDBpZeskEuY2/ppizv4E4OaolNzb9\n+qvC0Ho9DBc1Fh6K7DaDVEtsMzsL7PwXf4h/raJPzEMKYN1C2CK3Qdws9WxznB5o\nwqSLIM4eyNM0ohNfsP7Uqdk1XQC/TvuRl0jTwDmL3T6vNhzkqV/f1ZrhSQKBgQDP\nHdvi3CVQOUGTQ22mFQ05TM5q+eXYYgnqxcKE7KPRdGo+sS7TKNRVEE42BwM1itf+\nzJ8iF6qmnlmjpp2u2Byhbg484x3UoXfNbZxWIHEF3hfdLRYLpgKPMiF7uN0Bfnaj\nRvMtf7wFtE6XWTwOizVKTxp3zVzsQ6y2lpx8khtEIQKBgBWtFfkUpO8TOlKFWUVs\nCvQg9TijoGlcmoOYOzjbzcsExAjtSmwKSl9ecTdf2D7gQmKHnPELJsKLfiN7YCq0\nKGWXS1ytc0ez3Xbs7YS1XOVsd1bLxAMxoZVopuk/2Ri7aml+DRUE6VZoFUIy1Dk8\n+N/81bIREhBPFNmAshlWQ6Kz\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-4q70b@asi-midterms.iam.gserviceaccount.com",
    "client_id": "116477598646369794464",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4q70b%40asi-midterms.iam.gserviceaccount.com"
}

console.log(firebase);

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();