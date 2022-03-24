import type { LinksFunction, LoaderFunction, MetaFunction } from 'remix';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from 'remix';

import styles from '~/styles/styles.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

type LoaderData = {
  ENV: Pick<
    NodeJS.ProcessEnv,
    'CONVERT_KIT_API_URL' | 'CONVERT_KIT_API_KEY' | 'CONVERT_KIT_API_FORM_ID'
  >;
};

export const loader: LoaderFunction = () => ({
  ENV: {
    CONVERT_KIT_API_URL: process.env.CONVERT_KIT_API_URL,
    CONVERT_KIT_API_KEY: process.env.CONVERT_KIT_API_KEY,
    CONVERT_KIT_API_FORM_ID: process.env.CONVERT_KIT_API_FORM_ID,
  },
});

export default function App() {
  const { ENV } = useLoaderData<LoaderData>();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <script dangerouslySetInnerHTML={{ __html: `window.ENV = ${JSON.stringify(ENV)}` }} />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
