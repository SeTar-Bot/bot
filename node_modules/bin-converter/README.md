# What is this?

> ### bin-converter is a package that can convert Binary to Text, and Text to Binary!

# Setup:

> **1: Install the package.**
>
> ```
> npm i bin-converter
> ```
>
> **2: Require/Import it.**
>
> ```js
> const BIN = require("bin-converter");
> ```
>
> **3: Use it.**
>
> ```js
> const bin = new BIN();
>
> bin.parseStringToBinary("npm is cool!"); // 01101110 01110000 01101101 00100000 01101001 01110011 00100000 01100011 01101111 01101111 01101100 00100001
>
> bin.parseBinaryFromString("01110011 01100101 01100101 00111111 00100001"); // see?!
> ```

***Developed by itsamedood, 2021***
