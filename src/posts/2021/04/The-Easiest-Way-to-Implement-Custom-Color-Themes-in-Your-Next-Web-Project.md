---
title: "The Easiest Way to Implement Custom Color Themes in Your Next Web Project"
byline: "Taking advantage of your browser's storage"
date: "2021-04-02"
tags:
- "how i did it"
- "dark mode"
- "css"
- "vanilla javascript"
---
## The short version

1. Create multiple CSS classes each with different values for `color`, `background-color`, etc.
2. Write a JavaScript function that places the current "theme" into `localStorage` and adds the appropriate class attribute to the `documentElement` after removing any classes that are already there.
3. Add a way to toggle between themes in your document.

## The not-that-much-longer version

We can do all of this in less than 10 lines of combined HTML, CSS, and JavaScript. But this is really just a sample of the possibilities.

### CSS

Start with a  HTML document, and add something similar to the following in the `head` section:

```html
<style>
   .dark {background-color: black; color: white;}
</style>
```
This is just a classic "dark mode" example. Feel free to try any color combination you prefer, but do not forget keep accessibility in mind when putting together color palettes. I like to use [Colorly](https://colorable.jxnblk.com/ffffff/000000) for checking contrast, but there are many tools available. You will want to achieve a AAA contrast rating whenever possible.

### JavaScript

Add the following function to the bottom of the `body` of your document, just above the closing tag:

```html
<script>
  function changeTheme (value) {
    localStorage.theme = value;
    document.documentElement.removeAttribute('class');
    document.documentElement.classList.add(value);
  }
</script>
```
With this function, we are doing three things:
1.  Adding our "theme" key to the browser's local storage with a value of whatever we want to pass into the function parameter
2. Removing any classes the `documentElement` may already have assigned to it - important for switching between different themes
3. Assigning our class to the `documentElement`

### HTML

Let's add a `button` to our HTML `body` above the `script` we just put in:

```html
<button class="dark" onclick="changeTheme('dark')">dark</button>
```
Notice we added the `onclick` event to call on our `changeTheme` function with our class name as the parameter. I also assigned the class to the button itself just for fun.

### That's it.

Keep in mind this is just the simplest version of the idea. This can be used to change basically anything you want in your CSS. Fonts, text sizes, borders, etc. This particular example is intended for multiple themes - the code can be trimmed down a bit if you just want to toggle between light and dark.

Also consider trying to implement [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) for users that take advantage of their browser's dark mode preferences.

Check out my [GitHub repository](https://github.com/gubcodes/static-theme-test) for all of the code with some extras thrown in to toy with. You can also visit the [demo](https://gubcodes.github.io/static-theme-test/).
<!-- excerpt -->

