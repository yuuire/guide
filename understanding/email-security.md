# Email Security

Privacy in the context of emails is a complicated topic as they usually cross borders of countries which may have different laws and policies. Unauthorised inspection of an email in transit or tracking its content is a common practice and, unfortunately, the end user isn't able to determine whether he or she is being actively spied on. Even though it's possible to limit, or even make it completely impossible to be spied on it's very difficult to achieve. The knowledge of how the bad actors manage to track and spy on you is the key to learning how to protect yourself while using email services.

## Email Encryption

The encryption of emails is currently a widely utilised method to protect the contents of your messages from being accessed. It's possible by making sure that only the sender and recipient are able to read the message. It can be achieved by either TLS (Transport Layer Security) which is easier to set up, although less secure, or E2EE (End-To-End Encryption) which is the preferred option for the maximum level of security. It's possible by encrypting and decrypting the message only at the end points. This means that only the sender of the message and the recipient can see its content.

::: warning
While End-To-End Encryption makes it impossible for someone to spy on you, it's still completely possible for the sender to attach a spy pixel. A spy pixel (or tracking pixel) is a remote image file which acts as a tracker. When you open the email with a spy pixel it sends tracking information to a tracking server connected to the graphic file. Tuta and Protonmail both block remote content by default which makes spy pixels useless. 
:::

### Which Email Providers Support E2EE?

[List of recommended privacy-respecting email providers.](/recommendations/providers/email/)

::: info
Protonmail generates the public and private keys in your browser and encrypts them with your password before sending it to their servers. There a hash of your password is created, which is different for each user. Next the generated hash is encrypted using the AES-256 algorithm. Tuta Mail uses a similar procedure, the only difference is that at the end instead of encrypting your key it's hashed with Argon2 and storred locally on your device.
:::

### Which Email Clients Support E2EE?

The best email clients are the ones that support both OpenPGP and OAuth (Open Authorisation) which support Multi-Factor Authentication to prevent account theft.

[The list of recommended email clients.](/recommendations/software/email-clients/)

## Metadata

Metadata is commonly known as the data associated with a message but not explicitly included in its contents. While it may seem pointless to collect data such as the date or by whom the message was sent, it actually creates a picture of your habits in alarming ways. The most basic information can tell a bad actor who you message, at what times and from which location. Other types of information such as data size can point to the devices you are using.

::: danger
You shouldn't underestimate the importance of metadata as it can, bit by bit, create a whole profile about your person. For more information about its risks and how to protect yourself from being identified by it make sure to check out our [guide specifically dedicated to metadata](/understanding/metadata). 
:::

### Who can view email metadata?

Almost all of free and popular, yet privacy-unfriendly email providers use metadata which is usually called email headers. This metadata is used to train their AI algorithms for spam and phishing protection. When an email provider creates a calendar event connected to a message you received, it's a sign they used the collected metadata to create it. Because of it, it's safe to assume the said email provider also has access to your email's content.

## Aliases

An email alias is a forwarding email address. Email aliases can be created on a mail server or using your email provider. The messages received by your email alias are forwarded to your email address.

::: example
Email aliases can be used for various purposes. Some of them include: 
- hiding your email address,
- getting rid of spam and phishing attempts,
- bypassing newsletters which could be forced on the user,
- organising your inbox,
- creating multiple email addresses for different purposes.
:::

[List of recommended email aliasing services.](/recommendations/providers/email-aliasing)

## Publishing your email address online vs phishing spam bots

An email is like an identity card for our digital lives. We use it for anything from signing up to social media, to managing our online banking accounts. When you reveal your email address to a bad actor you give them much more information than you might think. By simply searching up your email someone could find social media accounts connected to your email address which might give away your location, family and friends. By searching up your email on forums and sites like LinkedIn somebody could capture information about your political views and employment status. Not only can your email address be used to see everything about your life, it can also be used for malicious purposes.

When a bad actor has your email address they can use it in various ways. The most common practice is sending you spam messages and phishing emails. Not only that but you could become a victim of impersonation and identity theft. An unsuspecting person is the perfect target for these people, as phishing emails are one of the easiest ways to gain access to someones account or personal information.

## Sources

[Wikipedia's Email Privacy](https://en.wikipedia.org/wiki/Email_privacy)

[Protonmail's website](https://proton.me/mail)

[Tuta Mail's website](https://tuta.com/)
