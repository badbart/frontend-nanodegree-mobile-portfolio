# Website Performance Optimization portfolio project

This is my Version of the Website Performance Optimization Portfolio Project for the Udacity Front End Developer Nanodegree

## Changes

### Structure
* Added "Dist" (Final Version, including all Minifications, ec.) and "Src" (Build Version, everything in Raw Form) Folders

### Part 1 (Speed of Index.html)
* Added Media Query to Print.CSS Link in index.html so it will not block while not printing
* Delete Google Analytics Script Tag + JS Link because i don't wan't to use it here
* The little Media Query in style.css i didn't touch because it wouldn't make things better when doing so little in an extra file
* I moved the font loading to the bottom of the body Tag. This will change the look of the Fonts on the page after is is done, but this shouldn't be this big of a problem with the selected font and the page size. This is allowed when using HTML5.1, but even in lower standards and older browsers it should work
* I moved the perfmatter.js Script Tag to the Bottom just because i like it better there, because of the async this will not add any performance
* I used compression on the profilepic.jpg Image reducing its size
* CSS and JS Files will be minified and the style.css was inlined

On the Server Side i would set an expiry Date or different names on the css,js and image files so they can be cached. Also on the Server, i would activate compression.

I haven't changed anything on the other Project Pages, but there are some things to change there. Most of it is the same as on index. On these pages different Picture sizes would have been a possibility.

### Part 2 (Optimize Frames in pizza.html) 


## Build Process

To Build you need Node / NPM. After you have this running open a Terminal and go to the root directory. Here Enter
```
npm install
```
This will install all needed Packages that are defined in the project.json File. After this all you have to do to build it is enter

```
gulp
```
This will run the default gulp Task, after it has finished the completed and done version will be in the dist Folder.


Linting is done directly in the Editor while typing using WebStorm Default Tools + ESLint