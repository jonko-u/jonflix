import { createHash } from 'crypto';

export async function hashPassword(password: string, salt: string, hashAlgorithm: string, outputEncoding: BufferEncoding, desiredHashLength: number): Promise<string> {
  try {
    // Create a hash object
    const hash = createHash(hashAlgorithm);

    // Combine salt, pepper, and password, then hash
    hash.update(salt);
    hash.update(password);

    // Get the hashed password as a buffer
    const hashedPasswordBuffer = hash.digest();

    // Convert the buffer to the desired output encoding (hex)
    const hashedPasswordHex = hashedPasswordBuffer.toString(outputEncoding);

    // Truncate the hash to the desired length
    const truncatedHash = hashedPasswordHex.slice(0, desiredHashLength);

    return truncatedHash;
  } catch (error) {
    console.error('Error hashing password:', error);
    throw error;
  }
}

export async function comparePasswords(enteredPassword: string, storedHash: string, salt: string, hashAlgorithm: string, outputEncoding: BufferEncoding, desiredHashLength: number): Promise<boolean> {
  try {
    // Hash the entered password using the same salt and parameters
    const hashedEnteredPassword = await hashPassword(enteredPassword, salt, hashAlgorithm, outputEncoding, desiredHashLength);

    // Compare the hashed entered password with the stored hash
    return hashedEnteredPassword === storedHash;
  } catch (error) {
    console.error('Error comparing passwords:', error);
    throw error;
  }
}


// Usage
const password = 'mysecretpassword';
const salt = 'myfixedsalt'; // Set your fixed salt (pepper)
const hashAlgorithm = 'sha256'; // Use the desired hash algorithm (e.g., 'sha256')
const outputEncoding = 'hex'; // Use 'hex' for a hexadecimal string output
const desiredHashLength = 12; // Set your desired hash length

hashPassword(password, salt, hashAlgorithm, outputEncoding, desiredHashLength)
  .then(hashedPassword => {
  })
  .catch(error => {
    console.error(error);
  });
