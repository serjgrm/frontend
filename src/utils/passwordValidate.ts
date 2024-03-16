interface Flags {
  minLength: boolean;
  hasNumber: boolean;
  hasLetterUpperCase: boolean;
  hasSpecSymbol: boolean;
}

export const passwordValidate = (password: string): Flags => {
  const flags: Flags = {
    minLength: false,
    hasNumber: false,
    hasLetterUpperCase: false,
    hasSpecSymbol: false,
  };
  
  const SPECIAL_SYMBOLS: string = '!@#$%^&*()_+-={}|\\/.,<>';
  
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