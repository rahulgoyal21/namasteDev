# NPM

npm does not have a full form, it manages the packages (works as a node package manager)
Its a standard repository for all the packages

# package.json

is configuration for NPM.

# Bundler

Whole code needs to be minified, bundled,cleanified for production.
Ex: webpack, parcel, vite. We will use parcel in our app

# ^

This sign known as caret, it will only upgrade the minor and patch version

# ~

Tilde will automatically upgrade the major version, so its always recommended to use caret instead of Tilde

# package-lock.json

it keep track of exact version of a package in the production.

# Transitive dependencies:

Parcel can have its own dependencies, again those dependencies can have their own dependencies, these dependencies tree is known as Transitive dependencies.

# npx

means execute that package

# Parcel

- Dev build
- Live server
- HMR = Hot module replacement
- File watching algo - written in c++
- Caching - Faster builds
- Image optimization
- Minification
- Bundling
- Compressing
- Consistent hashing
- Code splitting
- Differential bundling - App can be open in any browser, it provide supports for all browsers
- Diagnosting
- Error handling
- HTTPs
- Different prod and dev build
- Tree shaking - remove unused code
