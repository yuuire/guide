![Cover](/assets/covers/DNS.png)

# Understanding DNS

The Domain Name System (DNS) is one of the critical components that make the internet work smoothly. Think of it as the internet's own phonebook: it translates human-friendly domain names, like `guide.yuuire.com`, into the numerical IP addresses that computers use to identify each other on the network.

## How DNS Works

1. **You Type a URL**: When you enter a website address in your browser, your computer sends a request to a DNS server.
  
2. **DNS Server Lookup**:
   - If the DNS server doesn’t have the address cached (stored from previous searches), it queries other DNS servers in a hierarchical manner.
   - It first reaches out to a root server, which directs it to a relevant top-level domain (TLD) server (like .com or .org).
  
3. **Finding the IP Address**:
   - The TLD server will help identify the authoritative DNS server for that domain.
   - Finally, the authoritative server provides the IP address associated with the original domain name.

4. **Connecting You**: Your browser now knows the IP address and can successfully connect you to the website you wanted to visit.

This process happens in a matter of milliseconds, allowing us to roam the web effortlessly!

## Why is DNS Important?

DNS is essential for several reasons:

- **User-Friendly**: We can easily remember names rather than long strings of numbers.
- **Load Balancing**: DNS can distribute traffic across multiple servers to ensure no single server is overwhelmed.
- **Redundancy**: It provides a backup system—if one DNS server fails, others can step in to resolve the required domain name.

## The Security Challenges of DNS

While DNS is crucial, it does have vulnerabilities:

- **DNS Spoofing**: Attackers can send false DNS responses, redirecting users to malicious sites without their knowledge.
- **Privacy Concerns**: Traditional DNS queries are sent in plain text, making them susceptible to snooping by ISPs or other entities.

## Encrypted DNS

To address these vulnerabilities, various forms of encrypted DNS have been developed. These help protect user privacy and prevent tampering with DNS queries.

### 1. [DNS over HTTPS](https://wikiless.tiekoetter.com/wiki/DNS_over_HTTPS?lang=en) (DoH)

- **What it is**: DoH encrypts DNS queries and sends them over HTTPS, making it harder for anyone to see your DNS requests.
- **Benefits**: This method enhances privacy and security by making your browsing habits less visible to your ISP and potential eavesdroppers.

### 2. [DNS over TLS](https://wikiless.tiekoetter.com/wiki/DNS_over_TLS?lang=en) (DoT)

- **What it is**: Similar to DoH, DoT uses TLS (Transport Layer Security) to secure DNS queries. However, it operates over a dedicated port, typically port 853.
- **Benefits**: Like DoH, DoT secures your DNS data, but it leaves DNS queries more exposed than DoH in scenarios where they might be visible over the web.

## Comparison of Encrypted DNS Methods

| Feature | DNS over HTTPS (DoH) | DNS over TLS (DoT) |
| :-- | --- | --- |
| **Encryption** | :white_check_mark: | :white_check_mark: |
| **Visibility** | Hides DNS requests from ISPs | Generally keeps DNS requests private |
| **Port Usage** | Uses standard web ports (443) | Uses a dedicated port (853) |
| **Implementation** | Integrated into modern browsers and applications | Can be integrated at the network level |

## Recommended DNS Resolvers

See [Recommendations -> Providers -> DNS Providers](/recommendations/providers/dns-resolvers).

