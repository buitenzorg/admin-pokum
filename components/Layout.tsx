import { ReactNode, FC } from 'react';
import Head from 'next/head';

type Props = {
  title?: string;
  children?: ReactNode;
};

const Layout: FC<Props> = ({
  title = 'Workation by Tailwindcss Tutorial',
  children,
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <main className="main-content overflow-y-auto flex-col px-4 py-6 xl:h-full xl:w-full xl:px-16">
      {children}
    </main>

    {/* <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer> */}
  </div>
);

export default Layout;
