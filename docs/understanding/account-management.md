![Cover](/assets/covers/account-management.png)

# Understanding Account Management
Proper account management is very important in keeping your digital identity and personal information safe from potential threats and privacy breaches. It involves not only creating strong, unique passwords and using secure authentication methods, but also being mindful of the information you share online.

## Account Creation
Often, we sign up for things without really considering the risks. This could be anything from a streaming service with our favourite TV show, to an account with additional perks when buying items online. Nonetheless, it's important to think about the consequences of these simple actions. Later on deleting accounts on some services can be a real burden, as accout deletion is becoming less and less intuitive.

### Terms of Service & Privacy Policy
The ToS are the rules that you agree to follow when using the service, while the Privacy Policy is how the service says they will use your data.

Let's be honest, almost no one really reads the terms of service or the privacy policy but we agree to them all the time. We recommend [ToS;DR](https://tosdr.org/) to help you manage this problem.

### Personal Details
Avoid giving out your real personal information if possible. You can use the same persona for each service, but ensure it doesn't compromise your identity.

### Authentication methods
There are multiple ways to sign up for an account, each with their own pros and cons.

Always use [Multi-Factor Authentication](/understanding/authentication#multi-factor-authentication) (**not SMS to prevent [Sim Swapping](https://wikiless.tiekoetter.com/wiki/SIM_swap_scam?lang=en) attacks**) when available to secure your accounts.

#### Email and password
The most common way to create a new account involves using an email address and a password. When using this method, you should use a [password manager](/recommendations/software/password-managers) and follow [the best practices](/understanding/authentication#best-practices) regarding the passwords.

#### OAuth (Sign in with...)
OAuth, which stands for "Open Authorisation", is an authentication protocol allowing registration for a service via another account without sharing much information. **"Sign in with *provider name*"** links to OAuth. When using OAuth, choose a provider to connect your account without sharing the password, although basic information is still shared. This process is needed each login.

Advantages:

- **Security:** Trust in external OAuth provider's secure practices like Apple or Google.
- **Ease of use:** Manage multiple accounts with one login.

Disadvantages:

- **Privacy:** OAuth provider knows your services.
- **Centralisation:** Compromised OAuth account affects all linked accounts.

Additional Considerations:

- **Data Sharing:** OAuth involves bidirectional data sharing, where both the service and the OAuth provider exchange information. Users should be cautious of the data permissions requested by services during OAuth login to avoid unnecessary exposure of personal information.

- **Session Management:** There's a risk of session hijacking in OAuth implementations if proper session management practices are not followed by service providers. Regularly reviewing active sessions and logging out from inactive sessions can mitigate this risk.

OAuth enhances service integration; use it selectively and secure main accounts with MFA. Services using OAuth are as secure as your provider’s account. Be cautious of bidirectional data sharing and potential session hijacking in OAuth logins.

#### Phone Number
You should avoid giving out your real phone number if possible.

## Account Deletion
Over time, it can be easy to accumulate a number of online accounts, many of which you may no longer use. Deleting these unused accounts is an important step in reclaiming your privacy, as dormant accounts are vulnerable to data breaches. A data breach is when a service's security is compromised and protected information is viewed, transmitted, or stolen by unauthorized actors. Data breaches are unfortunately all too common these days, and so practicing good digital hygiene is the best way to minimise the impact they have on our lives.

### Finding Old Accounts
If you didn't use a password manager before or think you might have old accounts not saved there, you can check your email and look for any service you are no longer using. Search for words like "verify," "active," or "confirm." Most online services send a verification link to your email when you sign up, so this can help you find old accounts you might have forgotten about.

### Deleting Old Accounts
Deleting your account on different websites can be handled in various ways. Some sites make it easy by offering a "Delete Account" option, while others may require you to contact their support. On certain sites, deleting your account may not even be possible.

You can check [JustDeleteMe](https://justdeleteme.xyz/) for instructions on deleting accounts for specific services.

As for the services that don't allow account deletion, the best thing to do is overwrite the account information with fake data, change the password to a randomly-generated one and enable MFA. Then you can safely forget about the account.

Even if you can delete your account, your information might not be deleted at all. This information can be generally found in a service's privacy policy.

### Avoid New Accounts
Think twice before creating new accounts, as you can use most websites without ever needing one.
