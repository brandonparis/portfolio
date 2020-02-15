<<<<<<< HEAD
# Portfolio for developers

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/smakosh/gatsby-portfolio-dev)

[![Netlify Status](https://api.netlify.com/api/v1/badges/57c04515-1d1b-46e8-b531-213fabca9cc4/deploy-status)](https://app.netlify.com/sites/gatsby-portfolio-dev/deploys)

## Theme

[Gatsby-theme-portfolio](https://github.com/smakosh/gatsby-theme-portfolio)

## Features

- Eslint/Prettier configured
- Scores 100% on a11y / Performance / PWA / SEO
- PWA (desktop & mobile)
- Easy to customize
- Nice project structure
- Amazing illustrations by [Undraw.co](https://undraw.co)
- Tablet & mobile friendly
- Continuous deployment with [Netlify](https://netlify.com)
- A contact form protected by Google Recaptcha
- Can be deployed with one click
- Functional components with ~~Recompose~~ React Hooks! ~~ready to migrate to React hooks!~~
- Fetches your Github pinned projects with most stars (You could customize this if you wish)

## Design

Project on [Behance](https://www.behance.net/gallery/74172961/Free-Gatsby-portfolio-for-developers)

## Structure

```bash
.
├── data
│   └── config              # SEO related tags
├── src
│   └── assets              # Assets
│   │   │── icons             # icons
│   │   │── illustrations     # illustrations from (undraw.co)
│   │   └── thumbnail         # cover of your website when it's shared to social media
│   ├── components          # Components
│   │   │── common            # Common components
│   │   │── landing           # Components used on the landing page
│   │   └── theme             # Header & Footer
│   └── pages               # Pages
└── static                  # favicon & Netlify redirects
```

## Prerequisites

[Yarn](https://yarnpkg.com/en/)

Please create a new file `.env.development` and put this env variable with your GitHub token

> If you're building locally, you will have to create a new file `.env.production` and put the same env variable

```bash
GITHUB_TOKEN=xxxxxxxxxx
```

> [Get your GitHub access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line#creating-a-token)

Don't forget to edit your site's data on `data/config.js` file with your Google Recaptcha public key

When deploying on Netlify, you will have to set the private key as well

```bash
SITE_RECAPTCHA_KEY=xxxxx

SITE_RECAPTCHA_SECRET=xxxxx
```

I highly recommend you check this [repository](https://github.com/imorente/gatsby-netlify-form-example) for more details about the Google Recaptcha and Netlify forms

## Installing

Installing the dependencies

```bash
yarn
```

## Start the dev server

```bash
yarn start
```

### Clean the cache

This removes the `.cache/` & `public/` folders

```bash
yarn reset
```

## Built with

- Adobe XD
- Gatsby
- React & GraphQL
- VSCode
- And these useful of JavaScript libraries & Gatsby plugins [package.json](package.json)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contributors

- [Ajay NS](https://github.com/ajayns) https://github.com/smakosh/gatsby-portfolio-dev/pull/3
- [Ryan Lee](https://github.com/drdgvhbh) https://github.com/smakosh/gatsby-portfolio-dev/pull/6
- [David](https://github.com/davidavz) https://github.com/smakosh/gatsby-portfolio-dev/pull/8
- [Myself](https://smakosh.com)

## Support

If you love this Gatsby template and want to support me, you can do so through my Patreon

[![Support me on Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/smakosh)
=======
# Integrating Netlify Form Handling in Gatsby

Example for integrating a basic contact form with Netlify’s form handling feature (based on the [default Gatsby starter](https://github.com/gatsbyjs/gatsby-starter-default))

Demo: https://gatsby-form-example.netlify.com

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/imorente/gatsby-netlify-form-example)

## reCAPTCHA

This example site uses [react-google-recaptcha](https://github.com/dozoisch/react-google-recaptcha) to render the reCAPTCHA widget.

To make the reCAPTCHA example work in your own copy of this site, you’ll need to do the following:
1. [Sign up for a reCAPTCHA API key pair](http://www.google.com/recaptcha/admin) for your site.
2. [Log in to your Netlify account](https://app.netlify.com), and add the following
environment variables to your site’s Settings > Build & deploy > Build environment variables:
  - `SITE_RECAPTCHA_KEY` with your reCAPTCHA site key.
  - `SITE_RECAPTCHA_SECRET` with your reCAPTCHA secret key.

**Important**: the environment variables need to be called `SITE_RECAPTCHA_KEY` and `SITE_RECAPTCHA_SECRET` for the Netlify backend to find them. If you add a `GATSBY_` prefix to the variable names, the Netlify backend won't recognize them, the reCAPTCHA verification will fail, and your form submissions won't be stored.

3. Change the build command for your site to
```
echo SITE_RECAPTCHA_KEY=$SITE_RECAPTCHA_KEY >> .env.production && gatsby build
```
This will make the SITE_RECAPTCHA_KEY available to the Gatsby build in production.

To see the reCAPTCHA widget locally, add `SITE_RECAPTCHA_KEY=your-reCAPTCHA-API-site-key`
to your local [.env.development](https://www.gatsbyjs.org/docs/environment-variables/) file.

## Troubleshooting

### Forms stop working after upgrading to Gatsby v2
This can be caused by the offline-plugin. [Workaround](https://github.com/gatsbyjs/gatsby/issues/7997#issuecomment-419749232) is to use `?no-cache=1` in the POST url to prevent the service worker from handling form submissions (Thanks to [@phmu_office](https://twitter.com/phmu_office/status/1047810173417472000) for the heads up ✨)
>>>>>>> fc08d5af1fa4d30de4e09cf93bce673c64ca053d
