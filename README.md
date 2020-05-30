# ReadThis.Space

Welcome to the telephone pole of the internet.

## What is this?

[Iris Messenger](https://iris.to) is to Telegram, as **ReadThis.Space** is to Telegraph.

It's a decentralized, throwaway authoring platform.

### Usage 

**Write** an article, manifesto, todo list, product roadmap, whatever! The data will save after a second of you not typing.

Hit the `🔗 Create Link` button if you want to be able to come back to it in _draft_ form or if you're ready to share it around.

To **share** the article, hit the `🔗 Copy Link` button and share it with your friends directly or post it on a social platform. Painless. Done.

As long as someone has the URL link, they can **read** the article. If they don't, they can't!

As long as your key remains in your browser's `localStorage`, you can **update** your article when you revisit the URL from the same browser. Or hit the `🗑️ Delete` button to... delete it :)

Optionally, you can **verify** your article if you shared the link on a service like Twitter. Put the Twitter post link in the `✔️ Verify authorship` input at the bottom of the article. Readers can know that you wrote this if the link in your social post leads back to the same article.

### Privacy

The title, author name, last updated time, and article content are all encrypted. The only way to decrypt is if you have the password that is in the generated link. The url password is also stored in an encrypted manner on the user namespace and can be decrypted with the author's keypair. This is for future-proofing if you want to read your article in a different app.

If a link gets shared in a way that you do not like, then just delete your article.

## Why does this exist?

You ever just want to write something out so you can hand it around to people? Maybe you want a little bit of deniability? Maybe you don't care to bask in the glory when it goes viral?

    Out out brief candle
    - Macbeth

Honestly, I'm a big fan of **throwaway tech** like [Telegraph](https://telegra.ph). It feels like technology works for us rather than us working for technology.

    The user is not what you code into your application. 
    The user is the meat bag operating the device. 
    Don’t model the driver, model the car. A driver can have many cars.
    - Me

## How did I build this?

I just combined [Medium Editor](https://github.com/yabwe/medium-editor), [new.css](https://newcss.net/) and [GUN](https://gun.eco/).

The `gun.get('readthis.space#')` graph is what I call an *application graph*. It is merely an immutable index that stores `articleHash -> authorPublicKey`. Article details like title, author name, etc are all stored on each author's own user namespace like so `user.get('articles').get(articleHash)`.

The default assumption is that most users will use this app in a throwaway manner. Nonetheless I have built into the app the ability to have one user keypair store multiple articles for futureproofing. This way, if a user wants to access their articles from a different app interface, they are free to do so!

---

What are you waiting for? [Write something and share it.](https://readthis.space)