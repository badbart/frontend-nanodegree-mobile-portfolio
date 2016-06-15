# Website Performance Optimization portfolio project

This is my Version of the Website Performance Optimization Portfolio Project for the Udacity Front End Developer Nanodegree

## Changes

### Structure
* Added "Dist" (Final Version, including all Minifications, ec.) and "Src" (Build Version, everything in Raw Form) Folders

### Part 1 (Speed of Index.html)
* Added Media Query to Print.CSS Link in index.html so it will not block while not printing
* Delete Google Analytics Script Tag + JS Link because i don't wan't to use it here
* The little Media Query in style.css i didn't touch because it wouldn't make things better when doing so little in an extra file
* I didn't changed anything with the Fonts, the file is really small and there is a good chance that many users will already have it in the cache
* I moved the perfmatter.js Script Tag to the Bottom just because i like it better there, because of the async this will not add any performance
* The Pictures are so small that there is no reason to add different Versions
* CSS and JS Files will be minified

I haven't changed anything on the other Project Pages, but there are some things to change there. Most of it is the same as on index. On this pages different Picture sizes would have been a possibility.

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