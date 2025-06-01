import * as CryptoJS from 'crypto-js';

export const encryptText = (text: string, key: string): string => {
  return CryptoJS.AES.encrypt(text, key).toString();
};

export const decryptText = (encryptedText: string, key: string): string => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedText, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    return generateRandomText(encryptedText.length);
  }
};

export const generateRandomText = (length: number): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
};