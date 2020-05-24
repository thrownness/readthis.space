# ReadThis.Space

Welcome to the telephone pole of the internet.

## What is this?

[Iris Messenger](https://iris.to) is to Telegram, as this is to [Telegraph](https://telegra.ph).

It's a decentralized throwaway authoring platform.

## Usage 

**Write** an article, manifesto, todo list, product roadmap, whatever! The data will save after a second of you not typing.

To **share** the article, hit the Publish button and share the URL with your friends directly or post it on a social platform. Painless. Done.

As long as someone has the URL link, they can **read** the article. If they don't, they can't!

As long as your key remains in your browser's `localStorage`, you can **update** your article when you revisit the URL from the same browser. Or hit the **delete** button to... delete it :)

## Why does this exist?

You ever just want to write something out so you can hand it around to people? Maybe you want a little bit of deniability? Maybe you don't care to bask in the glory when it goes viral?

   Out out brief candle
   - Macbeth

Honestly, I'm a big fan of throwaway tech like Telegraph. It feels like technology works for us rather than us working for technology.

   The user is not what you code into your application. The user is the meat bag operating the device. Don’t model the driver, model the car. A driver can have one or many cars.
   - Me

## How did I build this?

I just combined [Medium Editor](https://github.com/yabwe/medium-editor), [new.css](https://newcss.net/) and [GUN](https://gun.eco/).

The `gun.get('readthis.space#')` graph is what I call an *application graph*. It is merely an immutable index that stores `articleHash -> authorPublicKey`. Article details like title, author name, etc are all stored on each author's own user namespace like so `user.get('articles').get(articleHash)`.

The default assumption is that most users will use this app in a throwaway manner. Nonetheless I have built into the app the ability to have one user keypair store multiple articles for futureproofing. This way, if a user wants to access their articles from a different app interface, they are free to do so!

---

What are you waiting for? [Write something and share it.](https://readthis.space)