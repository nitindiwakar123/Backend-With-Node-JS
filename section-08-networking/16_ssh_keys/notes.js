// SSH keys

// SSH (Secure Shell) is a protocol used to securely access and manage remote systems over a network. Instead of just passwords, SSH key pairs (public & private keys) provide stronger, password-less authentication.
    
//     What is an SSH Key Pair?

//     An SSH key pair consists of:
//         Public Key	-> Stored on the server, Used to encrypt the login attempt
//         Private Key	-> Stored on your local device (never shared), Used to decrypt and prove your identity

//     How SSH Authentication Works

//     1. You generate a key pair:
//         ssh-keygen
//         (This creates id_rsa and id_rsa.pub by default)

//     2. You copy the public key to the server:
//         ssh-copy-id user@server

//     3. When you connect:
//         The server encrypts a challenge using your public key
//         Your private key decrypts it locally
//         If it matches, access is granted