# Detect Keyboard User

Detect if the user navigate with his keyboard&thinsp;⌨️ or mouse&thinsp;🖱️. Then add a matching class to the html element. This allow to remove the blue outline for the mouse users and keeps it at the same time for the keyboard users.

👍 Lite 5kb (2kb Gzipped) ⚡ Fast Native JavaScript 🚫 No Dependencies

<p align="center">
  <img src="https://i.imgur.com/UH5VJP5.gif"><br>
  <em>Going back and forth between mouse and keyboard navigation</em>
</p>

Examples
-----
- [Basic](https://codepen.io/smnarnold/pen/abzQPaZ)
- [Pointer-priority](https://codepen.io/smnarnold/pen/xxbQmyE)

Installation
-----
```shell
npm i detect-keyboard-user
```

Import
-----
### CDN
```js
<script src="https://unpkg.com/detect-keyboard-user"></script>;
```
### Classic
```js
const DetectKeyboardUser = require('detect-keyboard-user');
```
### ES6
```js
import DetectKeyboardUser from 'detect-keyboard-user';
```

Usage
-----
```js
const myDKU = new DetectKeyboardUser();
```

Options
-----
| Option  | Default | Possibilities | Description |
| ------- | ------- | ------------- | ----------- |
| keyboardPriority | true | Boolean _(true/false)_ | By default, should we consider the user is using his keyboard or a pointer _(mouse)_. I suggest you keep it to 'true' to pass the automated accessibility audits. |

Methods
-----
| Method  | Description |
| ------- | ----------- |
| `myDKU.refresh();` | You should call this method if you emulate devices with your browser and want to avoid false/positive |
| `myDKU.destroy();` | Remove everything 😥 |

Originally inspired by
-----
The great [David Gilbertson](https://twitter.com/d__gilbertson) and his article on [Medium.com | Removing that ugly :focus ring _(and keeping it too)_](https://medium.com/hackernoon/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2)

Support
-----
Chrome, Firefox, Safari, Edge, IE 11