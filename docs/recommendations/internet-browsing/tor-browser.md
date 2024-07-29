---
title: Tor Browser
---

<script setup>
    import Card from '../../.vitepress/theme/components/card.vue'
    import Grid from '../../.vitepress/theme/components/card-grid.vue'
</script>

![Cover](/assets/covers/tor-browser.png)

The Tor Browser protects your privacy and security by using a modified version of Firefox that fixes problems that could expose your identity. Attacks against the Tor network are still possible, but they are rare and would have to specifically target you.

Tor protects your privacy by "bouncing" your Internet traffic through a network of relays run entirely by volunteers. Your data is sent through at least 3 different servers before it reaches its destination. Each relay has a separate layer of encryption, which means that no one can spy on your Internet activity.

---
<br/>
<Grid>
    <Card title="Homepage" href="https://torproject.org/"/>
    <Card title="Onion Service" href="http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion/"/>
    <Card title="Documentation" href="https://tb-manual.torproject.org/"/>
    <Card title="Source Code" href="https://gitlab.torproject.org/tpo/core/tor"/>
</Grid>

## Using Tor Safely

Before installing the browser, be sure to [verify the signature of the file](https://support.torproject.org/tbb/how-to-verify-signature/), as malware may be bundled into the installation files. After that, connecting to the Tor network should be as simple as clicking 'Connect'. Sometimes Tor may be [blocked in your country](/recommendations/internet-browsing/tor-browser.md#tor-is-not-unrestricted-by-governmental-blocking).

::: warning Do not use extensions!
The Tor Browser is designed to make you look identical to other users, so your browser can't be identified by websites. Using extensions, themes, or VPNs effectively defeats the purpose of the Tor network, while using JavaScript or BitTorrent clients makes you vulnerable to IP leaks.
:::

## What Tor is Not

### Tor is Not the Privacy Solution

- **The Problem of Exit Nodes**: An exit node is where your traffic leaves the Tor network. Exit nodes can be monitored, which means that using non-HTTPS sites is a huge privacy risk, since unencrypted sites can monitor your Internet activity and track everything you do while using those sites. Usually, running exit nodes is a risky practice, which is why they are usually run by governments. All of this can be avoided by accessing websites using encryption (HTTPS).
  
- **The Vulnerability to Timing Attacks**: A timing attack occurs when an observer can correlate the times you enter and leave Tor. Timing attacks are almost always targeted at specific individuals, as they require precise observation of parts of the network. In most countries, it's rare to get a warrant to conduct a timing attack.

### Tor is Not a Free VPN

- **Performance Impact**: VPNs route your traffic through a single server to give you the highest speeds while improving your privacy and security. Tor uses multiple relays and strong encryption to give you anonymity, which is a completely different concept. Not only that, but routing your traffic through multiple nodes will significantly slow down your internet connection.

- **Complex Application Integration**: Connecting individual applications to the Tor network can be complex and cumbersome. This is in contrast to VPNs, which aim to provide easier integration with different applications and devices.

### Tor is Not Unrestricted by Governmental Blocking

- **Potential for Governmental Blocking**: In some countries, Tor is completely blocked - fortunately, the Tor Browser provides a complete solution to these problems. Tor can be downloaded from [email](https://support.torproject.org/censorship/gettor-2/) or by using the [GetTor bot](https://t.me/gettor_bot) on Telegram. [Bridges](https://tb-manual.torproject.org/bridges/) or [Snowflakes](https://snowflake.torproject.org/) can be used to access the Tor network.

## The Pathway to Clearnet Services

Tor routes your connection through three types of nodes:

- **Entry Nodes**: These are the first stop on the Tor network. They receive your request and forward it to a middle node.
- **Middle Nodes**: These nodes don't know your final destination, but will forward your request to an exit node.
- **Exit Nodes**: These nodes send your request to the Clearnet service you're trying to access. As these nodes know your destination, they may be able to see the content of your communication.

## The Pathway to Onion Services

Onion services, also known as .onion sites, operate within the Tor network itself. They don't need an entry node because they are part of the Tor network infrastructure. This means that they offer a higher level of anonymity because the traffic between the client and the server doesn't leave the Tor network.

## Encryption

Tor uses end-to-end encryption to protect data in transit. However, it's important to note that while Tor encrypts your data, it does not encrypt your metadata (e.g., who you're communicating with). This is one reason why additional tools or practices may be required for full privacy.

## Warning

::: warning Despite its strengths, Tor isn't a silver bullet for privacy and security. Some caveats include:
- **Bridges**: Bridges are special relays that aren't listed in the public directory, providing an extra layer of protection against censorship. However, relying solely on bridges can result in slower connections and reduced anonymity.
- **Relay Operators**: Tor's effectiveness depends on the number and diversity of its relays. Centralisation or malicious actors controlling many relays can compromise the integrity of the network.
:::
