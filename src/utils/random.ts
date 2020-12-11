import { customAlphabet } from 'nanoid';
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const makeCustom20 = customAlphabet(ALPHABET, 20);
const makeCustom10 = customAlphabet(ALPHABET, 10);
export const tinyid = (size: 10 | 20 = 10) => (size === 10 ? makeCustom10() : makeCustom20());
