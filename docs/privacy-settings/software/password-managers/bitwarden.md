---
title: Bitwarden Settings
--- 

![Cover](/assets/covers/bitwarden.png)

# Bitwarden Settings

Select `Settings` from the bar on the left.

## Security

* Select `Two-step login` at the top of the page
  * Select a method other than `Email`

::: tip INFO
By default, Bitwarden uses [PBKDF2](https://bitwarden.com/help/kdf-algorithms/#pbkdf2) as its key derivation function (KDF). It also provides [Argon2](https://bitwarden.com/help/kdf-algorithms/#argon2id) as a more secure alternative.
:::

* Select `Keys` at the top of the page
  * Change `KDF algorithm` from [**`PBKDF2`**](https://bitwarden.com/help/kdf-algorithms/#pbkdf2) to [**`Argon2id`**](https://bitwarden.com/help/kdf-algorithms/#argon2id)
  * Increase the `KDF iteration` count. (Higher KDF iterations can help protect your master password from being brute forced by an attacker)

::: tip
The number of default iterations used by Bitwarden was increased in February, 2023. Accounts created after that time will use 600,001, however if you created your account prior to then you should increase the iteration count. Instructions for doing so can be found in [this guide](https://bitwarden.com/help/what-encryption-is-used/#changing-kdf-iterations).
:::

## Preferences

* Vault timeout: **1 minute**
