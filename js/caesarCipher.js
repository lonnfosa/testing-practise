const caesarCipher = (key, string) => {
  const reg = /[a-zA-Z]/;
  let cipher = "";

  for (let i = 0; i < string.length; i++) {
    if (reg.test(string.charAt(i))) {
      cipher += String.fromCharCode(
        ((string.charCodeAt(i) - 97 + key) % 26) + 97
      );
    } else {
      cipher += string.charAt(i);
    }
  }
  return cipher;
};

module.exports = caesarCipher;
