# Email Security

Privacy in the context of emails is a complicated topic as they usually cross borders of countries which may have different laws and policies. Unauthorised inspection of an email in transit or tracking its content is a common practice and, unfortunately, the end user isn't able to determine whether he or she is being actively spied on. Even though it's possible to limit, or even make it completely impossible to be spied on it's very hard to achieve. The knowledge of how the bad actors manage to track and spy on you is the key to learning how to protect yourself while using email clients.

## Email Encryption

The encryption of emails is currently a widely utilised method to protect the contents of your messages from being accessed. It's possible by making sure that only the sender and recipient are able to read the message. It can be achieved by either TLS (Transport Layer Security) which is easier to set up, although less secure, or E2EE (End To End Encryption) which is the preferred option for the maximum level of security. It's possible by encrypting and decrypting the message only at the end points. This means that only the sender of the message and the recipient can see its content. 

::: warning
While End To End Encryption makes it impossible for someone to spy on you, it's still completely possible for the sender to attach a spy pixel. A spy pixel (or tracking pixel) is a remote image file which acts as a tracker. When you open the email with a spy pixel it sends tracking information to a tracking server connected to the graphic file. 
:::

### Which Email Providers Support E2EE?

- ❤️ Protonmail - The world's most popular encrypted email service, based in Geneva, Switzerland. Switzerland has one of the strongest privacy laws. Protonmail is fully open source, has no ads and blocks all 3rd party trackers by default. They also use Zero-access Encryption which means Protonmail can never access your emails.

- Tuta Mail - Tutanota is a company that takes pride in their security and privacy practices. They offer the most advanced encryption out of any other email provider. They are also fully open source and don't show any ads.

::: info
Protonmail generates the epublic and private keys in your browser and encrypts them with your password before sending it to their servers. There a hash of your password is created, which is different for each user. Next the generated hash is encrypted using the AES-256 algorithm. Tuta Mail uses a similar procedure, the only difference is that at the end instead of encrypting your key it's hashed with Argon2 and storred locally on your device which makes it the superior solution. 
:::

