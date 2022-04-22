
# Refined HackerNews

Features:
- Add icon to [Hackernews](https://news.ycombinator.com) links

![](./screenshot.png)

## Install

```
git clone git@github.com:samber/refined-hn.git
```

Then open Chrome, go to chrome://extensions, and click on "Load unpacked". Then select the `refined-hn` directory.

## Thanks

Thanks to [@frabert](https://github.com/frabert) for initial work: https://gist.github.com/frabert/48b12088441f6195ea9292c2a5a77e3a

## Publish

```sh
rm -f refined-hn.zip
zip -r refined-hn.zip hn.js hn.css manifest.json _locales icon-48.png README.md
```
