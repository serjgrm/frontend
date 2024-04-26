export interface PasswordValidateFlags {
  minLength: boolean;
  hasNumber: boolean;
  hasLetterUpperCase: boolean;
  hasSpecSymbol: boolean;
  dontHasSpaces: boolean;
}

export const passwordValidate = (password: string): PasswordValidateFlags => {
  const flags: PasswordValidateFlags = {
    minLength: false,
    hasNumber: false,
    hasLetterUpperCase: false,
    hasSpecSymbol: false,
    dontHasSpaces: true,
  };
  
  const SPECIAL_SYMBOLS: string = '!@#$%^&*()_+-={}|\\/.,<>';
  
  for (const ch of password) {
    if (ch === ' ') {
      flags.dontHasSpaces = false;
      
      break;
    }
  }
  
  flags.minLength = password.length > 7;
  flags.hasNumber = password.match(/\d+/) !== null;
  flags.hasLetterUpperCase = password.toLowerCase() !== password;
  
  password.split('').forEach(ch => {
    if (SPECIAL_SYMBOLS.includes(ch)) {
      flags.hasSpecSymbol = true;
    }
  })
  
  return flags;
}