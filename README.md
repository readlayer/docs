# ReadLayer official documentation

Check the documentation at https://docs.readlayer.com.

### Installation

```
$ npm install
```

To install the search engine, follow the `docusaurus-lunr-search` [instructions](https://github.com/praveenn77/docusaurus-lunr-search).

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.
The offline search only works on the built version, not the development version.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

There are two repositories involved in the publishing process: the branch with the source files (`docs`, this repository), and the branch with the build output ([`docs-dist`](https://github.com/readlayer/docs-dist/)).
This command will push the build to the `docs-dist` repository used for deployment.

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=gitUsername GIT_PASS=gitPass USE_SSH=false npm run deploy
```

### Contributing

This documentation site is built with [Docusaurus 2](https://docusaurus.io/). 
We are thankful for any contributions from the community.

### Contact

Visit https://readlayer.com for contact information.
