# Password Security

## In 30 Seconds

A strong password is mostly a long password. Length, not a jumble of symbols, is what defeats guessing, so a memorable passphrase of several unrelated words beats a short complex string. Current U.S. government guidance tells systems to allow long passwords, screen them against lists of already-breached passwords, and stop forcing routine resets. Reusing one password across sites is the real danger, because a breach of one site hands attackers the keys to the others. A password manager fixes this by generating and storing a different strong password for every account.

## Why This Matters

Passwords are the front door to nearly every account you own: email, bank, school portal, health records. Attackers rarely crack a strong password head-on; they exploit predictable ones and, far more often, ones you reused somewhere that was later breached. Knowing what actually makes a password hard to guess lets you spend effort where it counts, on length and uniqueness, instead of on rituals that do not help, like quarterly resets and mandatory symbols. The official standard changed over the last decade as researchers measured how people really behave under old rules. Understanding the current guidance helps you push back on outdated password policies and protect yourself before a single breach turns into stolen money or a stolen identity.

## Learning Objectives

- Explain why length is the single most important factor in password strength.
- Apply current NIST SP 800-63B guidance to judge whether a password policy is sound.
- Distinguish current best practice from the outdated "change often, add symbols" advice and explain why the guidance reversed.
- Analyze how password reuse enables credential-stuffing attacks that spread across sites.
- Describe how a password manager solves the unique-password problem and why passwords still need multifactor authentication.

## The College Version

### What makes a password strong: length beats complexity

A guessing attack works by trying candidate passwords until one matches. The practical difficulty of that attack scales with the size of the space an attacker must search, and that space grows exponentially with length. Each additional character multiplies the number of possibilities by the size of the character set, so length adds difficulty far faster than sprinkling in a symbol or two. This is why security professionals now favor long passphrases over short "complex" strings.

Consider the arithmetic. A random eight-character password drawn from the roughly 95 printable keyboard characters yields about 95^8, near 6.6 quadrillion combinations, which sounds enormous but represents only about 53 bits of entropy. A passphrase of five unrelated words chosen at random from a 7,776-word list yields 7,776^5, about 28 quintillion combinations, or roughly 65 bits, thousands of times larger, and it is far easier to remember. The lesson is counterintuitive but firm: `purple-anchor-ceramic-window-tunnel` is stronger and more usable than `P@ss12!`.

Complexity rules backfire in practice because humans satisfy them predictably. Told to add a capital, a number, and a symbol, most people produce `Password1!` and then `Password2!`, patterns attackers already model. Length chosen freely, by contrast, resists this because there is no cheap shortcut around a larger search space.

### The current standard: NIST SP 800-63B and what it reversed

In the United States the authoritative reference is NIST Special Publication 800-63B, the Digital Identity Guidelines, whose Revision 4 was finalized on August 26, 2025. It sets requirements for how systems should handle passwords, which it calls "memorized secrets." Several provisions matter for everyday use. Systems must require at least 15 characters for a password used as the only authentication factor, must permit passwords up to at least 64 characters so long passphrases are possible, and must accept spaces and all printable characters. Crucially, verifiers "SHALL NOT require subscribers to change passwords periodically" and must force a change only when there is evidence the password has been compromised. They must also stop imposing composition rules such as required mixtures of character types, and they must screen every new password against a blocklist of values known to be commonly used, expected, or compromised, for example passwords that appear in previous breach datasets. Systems must allow password managers and autofill and should permit pasting into the password field.

This reverses advice that dominated for decades. The old model, echoing earlier NIST publications, told organizations to force resets every 60 or 90 days and to demand upper case, lower case, digits, and symbols. Research showed both practices made security worse: forced rotation pushed people toward small predictable edits of an old password, and composition rules produced the very patterns attackers expect. The guidance changed to match how people actually behave, not how policy wished they would.

### Reuse, breaches, and credential stuffing

The most dangerous password habit is not weakness but reuse. Large breaches routinely expose hundreds of millions of username-and-password pairs, and those lists are traded and published. Attackers then run credential stuffing: automated tools replay each leaked pair against many other unrelated services, betting that a person who used a given password on a shopping site used it again for their email or bank. Because the credentials are real, this is not "cracking" at all; the attacker simply logs in.

One reused password can therefore convert a breach you never heard about into a compromise of accounts you care about most. Email is an especially high-value target, because control of an inbox lets an attacker trigger password resets on everything linked to it, which is exactly how one small leak cascades into a total account takeover. The defense is uniqueness: a different password for every account so that a breach of one site cannot unlock any other. That is impossible to do from memory across dozens of accounts, which is what makes the next tool essential rather than optional.

### The practical fix: password managers, and why passwords are not enough

A password manager is a program that generates long random passwords, stores them encrypted, and fills them into sites and apps for you. It resolves the tension at the heart of good password hygiene: strong, unique passwords are exactly the ones no human can remember, so you delegate memory to software and remember only one strong passphrase, the master password that unlocks the manager. Good managers also flag weak or reused passwords and warn when a stored login appears in a known breach. CISA, the U.S. Cybersecurity and Infrastructure Security Agency, recommends exactly this approach and summarizes strong passwords as long (at least 16 characters), random, and unique, or a passphrase of four to seven unrelated words. Options range from the free managers built into browsers to standalone paid products; the meaningful step is using one at all.

Finally, even a perfect password is a single secret that can be phished, keylogged, or leaked, so passwords alone are no longer considered sufficient for important accounts. The standard next layer is multifactor authentication, which requires a second proof such as a code or a security key in addition to the password. That is a topic of its own; the point here is that password security is necessary groundwork, not the finish line.

## Key Vocabulary

- **Passphrase**: A password built from several unrelated words, favored because its length gives it a large search space while staying easy for a person to remember.
- **Entropy**: A measure, in bits, of how unpredictable a secret is; each extra bit doubles the number of guesses an attacker must try on average.
- **Brute-force attack**: An attack that tries candidate passwords one after another until it finds the one that matches.
- **Credential stuffing**: An attack that takes username-and-password pairs leaked from one breach and automatically tries them on many other sites, exploiting password reuse.
- **Password manager**: Software that generates, encrypts, stores, and autofills a unique password for each account, so the user need remember only one master password.
- **Blocklist (breach corpus)**: A list of passwords known to be common, expected, or exposed in past breaches, which a system checks new passwords against and rejects matches.
- **Composition rules**: Policies that force a password to contain particular character types, such as an uppercase letter, a digit, and a symbol; current guidance advises against them.
- **Memorized secret**: NIST's technical term for a password or PIN, a value a person memorizes and later types to authenticate.

## Eli-10

Think of a password as the length of a combination lock, not how fancy the dial looks. Adding one more character is like adding a whole extra wheel to the lock: it multiplies how many combinations a thief has to try. That is why a string of a few random words you can actually remember is safer than a short "tricky" password full of symbols. The other big rule is never use the same password twice. If one website you signed up for gets robbed, the thieves take everyone's passwords and immediately try them on other sites. If your password there was the same one you use for email, they are now in your email too. Since nobody can remember a different long password for every site, you let a password manager remember them for you, and you only memorize the one password that opens the manager.

## Eli's Analogy

Passwords are like keys. A short symbol-heavy password is a normal house key someone can copy quickly. A long passphrase is a key with far more cuts, so a thief needs vastly longer to file a matching copy. Reusing one password is like putting the exact same lock on your house, car, office, and safe: copy one key and every door opens. A password manager is the labeled key cabinet that holds a unique key for each door, secured behind one master key you keep on you.

**Where the analogy breaks down:** It understates two things. Real key-copying takes physical effort per attempt, while computers try billions of password guesses per second, so length matters far more than for physical keys. And a stolen key ring is obvious because your keys are gone, whereas a leaked password can be copied silently and used months later without you noticing, which is why breach screening and multifactor authentication exist.

## Worked Example

Compare two passwords an attacker has stolen as scrambled hashes and is trying to reverse offline. Password A is `G7t#kQ2!`, eight characters that satisfy every classic complexity rule. Drawn from the roughly 95 printable characters, its space is 95^8, about 6.6 quadrillion possibilities, roughly 53 bits of entropy. Against a fast offline attack on the order of a trillion guesses per second, that space can be exhausted in only a couple of hours. Password B is the passphrase `purple anchor ceramic window tunnel`, five words chosen at random from a 7,776-word list. Its space is 7,776^5, about 28 quintillion possibilities, roughly 65 bits, thousands of times larger than Password A, and at the same guessing rate it would take on the order of a year to exhaust. Password B is both stronger and easier to recall, which is the entire case for length over complexity. Push to six words or a 16-character random string and the time to exhaust moves past any practical attack. The numbers are illustrative order-of-magnitude figures; the takeaway, that added length buys far more safety than added symbols, holds regardless of the exact guessing rate.

## Common Mistakes

- **Believing a short password is safe as long as it mixes symbols, numbers, and capital letters.** Symbols add little compared with length, and people satisfy complexity rules predictably (`Password1!`). A longer passphrase has a far larger search space and is easier to remember.
- **Reusing the same strong password across several accounts because it is hard to guess.** Strength does not help if the password leaks in someone else's breach. Reuse enables credential stuffing, so each account needs its own unique password.
- **Changing all your passwords on a fixed schedule, such as every 90 days, to stay secure.** Current NIST guidance says not to force periodic changes; routine resets push people toward weaker, predictable edits. Change a password when there is evidence it was compromised.
- **Refusing to use a password manager because keeping passwords in one place feels risky.** A reputable manager stores passwords encrypted behind one master password and lets you use a unique strong password everywhere, which is far safer than reuse or memory.
- **Treating a strong password as complete protection for an important account.** Any single secret can be phished or leaked. Add multifactor authentication so a stolen password alone is not enough to log in.

## Compare / Contrast

- **Short complex password (`G7t#kQ2!`) vs. long passphrase (`purple anchor ceramic window tunnel`)**: The passphrase has thousands of times more possible combinations and is easier to remember; the complex string is shorter and follows patterns attackers model.
- **Old password advice (rotate every 90 days, require symbols) vs. current NIST SP 800-63B guidance (long passwords, no forced rotation, screen against breach lists)**: Research showed the old rules made passwords weaker in practice, so the standard reversed toward length, uniqueness, and change-only-on-compromise.
- **Brute-force attack vs. credential stuffing**: Brute force guesses an unknown password; credential stuffing reuses real passwords already leaked elsewhere, so no guessing is needed and reuse is the enabling weakness.

## Key Takeaway

Make passwords long and unique rather than short and complex, let a password manager generate and remember a different one for every account, and add multifactor authentication, because a password alone is no longer enough.

## Practice Question Bank

1. **Why do security experts now recommend a long passphrase over a short password full of symbols?**
   - A. Length increases the number of possible combinations far faster than adding symbols does, making guessing much harder. ✅
   - B. Passphrases are automatically encrypted, whereas short passwords are stored in plain text.
   - C. Symbols are not allowed in most modern password systems.
   - D. Passphrases expire less often than complex passwords do.

   The size of the space an attacker must search grows exponentially with length, so each added character multiplies the difficulty far more than swapping in a symbol. Encryption and expiry are unrelated to why length wins, and symbols are widely permitted.

2. **According to the current NIST SP 800-63B guidance (Revision 4, 2025), how should a system handle periodic password changes?**
   - A. Require users to change passwords every 90 days to limit exposure.
   - B. Not require periodic changes, and force a change only when there is evidence the password was compromised. ✅
   - C. Require a change every time the user logs in from a new device.
   - D. Require a change once per year for all accounts regardless of activity.

   Revision 4 states verifiers SHALL NOT require periodic password changes and should force a change only on evidence of compromise. The other options describe forced-rotation schedules the guidance explicitly moved away from.

3. **A retailer you used two years ago is breached, and soon an attacker logs into your email using the same password. What kind of attack is this, and what made it possible?**
   - A. A brute-force attack, made possible because your email password was too short.
   - B. A phishing attack, made possible because you clicked a malicious link.
   - C. A credential-stuffing attack, made possible because you reused the same password on both sites. ✅
   - D. A denial-of-service attack, made possible because the email server was overloaded.

   Credential stuffing replays real username-and-password pairs leaked from one breach against other sites; it succeeds because the same password was reused. No guessing occurred, no deceptive message was involved, and no service was knocked offline.

4. **What is the main reason a password manager improves everyday security?**
   - A. It hides your internet activity from your service provider.
   - B. It replaces the need for any password by scanning your fingerprint instead.
   - C. It removes your passwords from breach databases after a leak.
   - D. It generates and stores a unique strong password for every account, so you only need to remember one master password. ✅

   The core benefit is enabling a different strong password everywhere without having to memorize them, which defeats reuse. A password manager does not anonymize browsing, is not a fingerprint replacement for passwords, and cannot remove leaked data from breach databases.

5. **You set a 20-character unique passphrase for your bank account. Why is that still not considered complete protection?**
   - A. Any single secret can be phished or leaked, so an important account should also use multifactor authentication as a second layer. ✅
   - B. Passphrases over 16 characters are rejected by most banks.
   - C. A passphrase must be changed weekly to remain valid.
   - D. Long passwords are easier to brute-force than short ones.

   Even a strong, unique password is one secret that can be stolen through phishing or a leak, so multifactor authentication is recommended for important accounts. Current guidance allows long passwords rather than rejecting them, does not require weekly changes, and longer passwords are harder, not easier, to brute-force.

## Sources

- NIST Special Publication 800-63B, Digital Identity Guidelines: Authentication and Authenticator Management (Revision 4, finalized August 26, 2025), National Institute of Standards and Technology. https://pages.nist.gov/800-63-4/sp800-63b.html — Reference-only; facts synthesized in original prose.
- Use Strong Passwords (Secure Our World), Cybersecurity and Infrastructure Security Agency (CISA). https://www.cisa.gov/secure-our-world/use-strong-passwords — U.S. federal government work, public domain.

## Related Topics

- Multifactor Authentication (`computer-literacy:foundations:multifactor-authentication`) — the second layer that covers what to do beyond a password.
- Phishing (`computer-literacy:foundations:phishing`) — how attackers trick people into handing over passwords directly.
- Privacy (`computer-literacy:foundations:privacy`) — protecting personal data online.
- Backups (`computer-literacy:foundations:backups`) — recovering when an account or device is compromised.

## Editorial Metadata

- **Editorial status**: READY_TO_PUBLISH
- **Estimated time**: 10 minutes
- **Researched**: 2026-08-19
- **Sources**: 2 (NIST SP 800-63B-4 standards publication; CISA public-domain consumer guidance)
- **Rights**: No source prose reproduced; all wording original. CISA content public domain; NIST content reference-only.
- **Note on currency**: Reflects the current NIST SP 800-63B Revision 4 (2025) position and explicitly flags where it reversed older forced-rotation and composition-rule advice.
