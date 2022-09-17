export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
  curriculosUID: string | null;
  loginMode: 'google-oauth' | 'email-password';
}
