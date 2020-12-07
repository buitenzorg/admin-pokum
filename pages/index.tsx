import { GetStaticProps } from 'next';

import { IHomeSearchResult } from '../interfaces';
import { searchResults } from '../utils/sample-data';
import Layout from '../components/Layout';

type Props = {
  searchResults: IHomeSearchResult[];
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      searchResults
    },
  };
};

const IndexPage = ({ _ }: Props) => (
  <Layout>
    Hello World
  </Layout>
);

export default IndexPage;
