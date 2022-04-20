
# Refined HackerNews

Features:
- Add icon to hackernews links

![](./screenshot.png)

## Install

```
git clone git@github.com:samber/refined-hn.git
```

Then open Chrome, go to chrome://extensions, and click on "Load unpacked". Then select directory.

## Thanks

Thanks to @frabert for initial work: https://gist.github.com/frabert/48b12088441f6195ea9292c2a5a77e3a

## Publish

```sh
rm -f refined-hn.zip
zip -r refined-hn.zip hn.js hn.css manifest.json _locales icon-48.png README.md
```
