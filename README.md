
# Next.js with Docker, PM2 and NGINX

This project is a production Docker setup for a Next.js app.

The Next.js app is launched with [PM2 Runtime](https://pm2.io/runtime/), which is a Production Process Manager for Node.js applications and is used to keep the app alive forever.

A second container with the [NGINX](https://www.nginx.com/) web server is used as a reverse proxy, and to handle HTTP caching.

## Docker Compose

```bash
docker-compose up
```

NGINX listens on port 80, which is the default HTTP port, so you can just visit **http://localhost/**

## Without Docker Compose

```bash
# Build images
docker build --tag nextjs-image .
docker build --tag nginx-image ./nginx

# Create shared network
docker network create my-network

# Run containers
docker run --network my-network --name nextjs-container nextjs-image
docker run --network my-network --link nextjs-container:nextjs --publish 80:80 nginx-image
```

_Next.js container is referenced inside NGINX container as `nextjs`._

## PM2 commands

PM2 commands can still be used inside a container with the `docker exec` command:

```
docker exec -it <container-id> pm2 monit          # Monitoring CPU/Usage of each process
```
```
docker exec -it <container-id> pm2 list           # Listing managed processes
```
```
docker exec -it <container-id> pm2 show           # Get more information about a process
```
```
docker exec -it <container-id> pm2 reload all     # 0sec downtime reload all applications
```

# Next.js example

## How to use

Download the example [or clone the repo](https://github.com/mui-org/material-ui):

```sh
curl https://codeload.github.com/mui-org/material-ui/tar.gz/next | tar -xz --strip=2  material-ui-next/examples/nextjs
cd nextjs
```

Install it and run:

```sh
npm install
npm run dev
```

or:

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/mui-org/material-ui/tree/master/examples/nextjs)

## The idea behind the example

The project uses [Next.js](https://github.com/zeit/next.js), which is a framework for server-rendered React apps. It includes `@material-ui/core` and its peer dependencies, including `emotion`, the default style engine in Material-UI v5. If you prefer, you can [use styled-components instead](https://next.material-ui.com/guides/interoperability/#styled-components).

## The link component

Next.js has [a custom Link component](https://nextjs.org/docs/api-reference/next/link).
The example provides adapters for usage with Material-UI.

- The first version of the adapter is the `NextLinkComposed` component.
  This component is unstyled and only responsible for handling the navigation.
  The prop `href` was renamed `to`.

  ```tsx
  import Button from '@material-ui/core/Button';
  import { NextLinkComposed } from '../src/Link';

  export default function Index() {
    return (
      <Button
        component={NextLinkComposed}
        to={{
          pathname: '/about',
          query: { name: 'test' },
        }}
      >
        Button link
      </Button>
    );
  }
  ```

- The second version of the adapter is the `Link` component.
  This component is styled, it leverages the [link component of Material-UI](https://material-ui.com/components/links/) with `NextLinkComposed`.

  ```tsx
  import Link from '../src/Link';

  export default function Index() {
    return (
      <Link
        href={{
          pathname: '/about',
          query: { name: 'test' },
        }}
      >
        Link
      </Link>
    );
  }
  ```
