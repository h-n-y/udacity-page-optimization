## Website Performance Optimization

This is an optimized version of a website provided by [Udacity](www.udacity.com) for a Front-End Web Developer project.

## Setup

View the optimized website by opening the ```dist/index.html``` file in any browser.

## Optimizations Summary

### Critical Rendering Path

Several optimizations were made to the critical rendering path:
*  **Inlined CSS** to reduce the number of page requests and render-blocking CSS files
* **async** attributes added to some ```<script>``` tags to remove unimportant JavsScript files from the CRP
* Google 'Open Sans' font **loaded asynchronously** using [Web Font Loader](https://github.com/typekit/webfontloader)
* all HTML, CSS, and JS files **minified**

### Image Optimizations

The massive pizzeria.jpg image ( 2048x1536, 2.4MB ) was replaced by compressed and resized images.

The optimized images were used with the ```srcset``` and ```sizes``` attributes on ```<img>``` tags.

### JavaScript Optimizations

* **Layout thrashing** issues while scrolling removed by writing to attributes that could force reflow only *after* making all necessary reads.
* Moving background pizzas in ```pizza.html``` moved with a **transform** instead of setting the **left** attribute to prevent reflow.
* Total number of moving pizzas in ```pizza.html``` optimized for the current size of the window.
* Moving pizzas in ```pizza.html``` placed on their own **layers** to reduce paint time.

## Gulp Task Runner

I used [Gulp](http://gulpjs.com/) for this project to optimize images and minify source files.

### Setup

Refer to the [README](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) on Gulp's GitHub page to see how to download and configure Gulp for this project.

### Tasks

I created several Gulp tasks to automate my workflow for this project:

* **imagemin** - compresses all the images in ```src``` file
* **imageResize** - resizes the ```pizzeria.jpg``` image
* **minify-css** - minifies CSS files
* **minify-html** - minifies HTML files
* **minify-js** - minifies JS files

I also created watchers to automatically minify files whenever a change to a file in ```src``` was detected. See ```gulpfile.js```.

### Using Gulp

#### Images
After Gulp has been set up for the project, the following commands in the terminal resize and compress the original ```pizzeria.jpg``` image:

```
$ gulp imagemin
$ gulp imageResize
```

#### Minification

Instead of manually running Gulp commands in the Terminal to minify HTML, CSS, and JS files, it's easier to set up watchers to execute these tasks whenever a file changed in ```src```.

Set up the watchers by running
```
$ gulp
```
in the Terminal after navigating to the top of the project directory where ```gulpfile.js``` is located.
