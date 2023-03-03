# CalPo.

# Calculator for Polyhedron

## _Showing the solutions in the blink of eye_

![Harvard CS50](https://miro.medium.com/max/700/1*IYCifTCCR2ah-79u94Z3wg.png)
source : https://miro.medium.com/max/700/1*IYCifTCCR2ah-79u94Z3wg.png

![Kemendikbudristek](https://penggerak-cdn.siap.id/s3/gurupenggerak/logo-kemdikbudristek.png)
souce : https://miro.medium.com/max/700/1*IYCifTCCR2ah-79u94Z3wg.png

CalPo. is a simple calculator that will help you to solve your mathematics problem about Polyhedron.

# The lists of the calculators :

- Cube's Surface Area and Volume Calculator
- Cube's Edge on Surface Area or Volume Calculator
- Rectangular Tank's Surface Area and Volume Calculator
- Rectangular Tank's Lenght on Surface Area or Volume Calculator
- Rectangular Tank's Width on Surface Area or Volume Calculator
- Rectangular Tank's Height on Surface Area or Volume Calculator
- Right-Angled Triangular Prism's Surface Area and Volume Calculator
- Right-Angled Triangular Prism's Side Base on Surface Area or Volume Calculator
- Right-Angled Triangular Prism's Height on Surface Area or Volume Calculator
- Square Pyramid's Surface Area and Volume Calculator
- Square Pyramid's Base Edge on Volume Calculator
- Square Pyramid's Height on Volume Calculator
- Right Rectangular Pyramid's Surface Area and Volume Calculator
- Right Rectangular Pyramid's Base Lenght on Volume Calculator
- Right Rectangular Pyramid's Base Width on Volume Calculator
- Right Rectangular Pyramid's Height on Volume Calculator

## Getting Started

CalPo. is a web application was created from the CS50 course and written in JavaScript, HTML, and CSS. Users can use the web application by inserting the information that they have. Then they can just use 'calculate' button to solve the problem.

Calpo is not only focus to calculate the solutions of Polyhedron's surface area and volume, but also edge, lenght, widht, height, slant height, etc. Based on [Wikipedia] writes on https://en.wikipedia.org/wiki/Polyhedron

> In geometry, a polyhedron is
> three-dimensional shape with flat polygonal faces,
> straight edges and sharp corners or vertices.

## Directory

CalPo. uses:

- index.html - code design of CalPo
- style.css - to make the CalPo's site becomes more beautiful
- script.js - add more control and animation
- README.md - user’s manual of CalPo
- DESIGN.md - implementation and design decisions of CalPo

## Things to Improve

I wanna make CalPo. into the web application that more decent to use by public. There are some improvement that I wanna do for the update of it.

- Add more solutions from Polyhedron.
- Add picture for the Polyhedron.

## Are you curious about Calpo?

Please watch the demo -->

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd dillinger
npm i
node app
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```

## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin           | README                                    |
| ---------------- | ----------------------------------------- |
| Dropbox          | [plugins/dropbox/README.md][pldb]         |
| GitHub           | [plugins/github/README.md][plgh]          |
| Google Drive     | [plugins/googledrive/README.md][plgd]     |
| OneDrive         | [plugins/onedrive/README.md][plod]        |
| Medium           | [plugins/medium/README.md][plme]          |
| Google Analytics | [plugins/googleanalytics/README.md][plga] |

## Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
node app
```

Second Tab:

```sh
gulp watch
```

(optional) Third:

```sh
karma test
```

#### Building for source

For production release:

```sh
gulp build --prod
```

Generating pre-built zip archives for distribution:

```sh
gulp build dist --prod
```

## Docker

Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd dillinger
docker build -t <youruser>/dillinger:${package.json.version} .
```

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=dillinger <youruser>/dillinger:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[dill]: https://github.com/joemccann/dillinger
[git-repo-url]: https://github.com/joemccann/dillinger.git
[john gruber]: http://daringfireball.net
[df1]: http://daringfireball.net/projects/markdown/
[markdown-it]: https://github.com/markdown-it/markdown-it
[ace editor]: http://ace.ajax.org
[node.js]: http://nodejs.org
[twitter bootstrap]: http://twitter.github.com/bootstrap/
[jquery]: http://jquery.com
[@tjholowaychuk]: http://twitter.com/tjholowaychuk
[express]: http://expressjs.com
[angularjs]: http://angularjs.org
[gulp]: http://gulpjs.com
[pldb]: https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md
[plgh]: https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md
[plgd]: https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md
[plod]: https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md
[plme]: https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md
[plga]: https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md
