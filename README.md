# Description
Voting is a crucial feature of civic engagement, and making it accessible to everyone is our mission. This statically generated site is created with [Eleventy], deployed over Netlify, and accessible by authorized editors [through the CMS](https://uvm.vote/admin/).

## Getting Started / Install

```bash
npm install highcharts-export-server -g
```

### Run

```bash
highcharts-export-server -infile charts/voting.json -outfile assets/voting.svg -type svg
```


## Informative Resources
### Highcharts

* [Highcharts > Command Line Rendering](https://www.highcharts.com/docs/export-module/render-charts-serverside)
* [Highcharts > Node Export Server](https://github.com/highcharts/node-export-server)


### Netlify Content Management System
- Retroactively added [CMS with Netlify](https://www.netlifycms.org/docs/add-to-your-site/)
- Used [widgets](https://www.netlifycms.org/docs/widgets/) to create user interface.
- [Local development of admin portal](https://www.netlifycms.org/docs/beta-features/) supported by beta features.
  - run ```netlify-cms-proxy-server```
  - start local serve with ```npm run serve```
  - visit ```localhost:8080/admin/```


### Eleventy Config
Pass ```eleventyConfig``` parameter to config function to access features.

#### Cleanup Date Format
Using NPM package for [Eleventy plugin to clean up date.](https://www.npmjs.com/package/eleventy-plugin-date)

#### Top Level Access for Sub-directory
Wanted some links to be given URL re-writes for the top level of my directory while still storing the files in an assets folder. Add the following to ```.eleventy.js```:
```js
eleventyConfig.addPassthroughCopy({ "assets/tld-links": "." })
```

### Markdown
Markdown pre-processor can be changed from default liquid to [other options](https://www.11ty.dev/docs/config/#default-template-engine-for-markdown-files).

### Navigation
Used Eleventy filter to access [next and previous collection items](https://www.11ty.dev/docs/filters/collection-items/).

### Search
Search is powered by [Agolia and Netlify](https://www.algolia.com/doc/tools/crawler/netlify-plugin/quick-start/) with plug and play authentication and features.

### Calendar Button
The add to calendar button is powered by [AddEvent](https://www.addevent.com/documentation/add-to-calendar-button). Pros and cons:
- Pros: free, easy setup, provides multiple calendar options, & includes recurring events.
- Cons: Clunky HTML first approach which creates FOUC; the API costs money, so this is a necessary evil.
  - This can be overcome by applying ```display: none``` to the class which the JS and CSS target.

### Graphs
Graph is dynamically put together by Highcharts: [API reference](https://api.highcharts.com/highcharts/). Attempted an SVG export to lose bulky code, but SVG wasn't sufficiently responsive or engaging for my fancy.

### Form Collection
The form is [powered by Netlify](https://www.netlify.com/products/forms/) at build time.

### Lazy Load Images
[Eleventy Plugin](https://github.com/liamfiddler/eleventy-plugin-lazyimages)

### Environement
Make sure NPM packages are globally accessible by appending ```source ~/.bash_profile``` to .zshrc, which can be found as a hidden file in the user's root directory. (Source)[https://stackoverflow.com/a/46179792/5395435]

## Sitemap creation with collections
(Walkthrough guide here)[https://www.belter.io/eleventy-sitemap/]

## Dynamically Build Social Media Previews
https://mtm.dev/eleventy-social-sharing-images
