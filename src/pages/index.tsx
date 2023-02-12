import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from 'components/layout';
import Date from 'components/date';
import { getSortedPostsData } from '../../lib/posts';
import utilStyles from '@/styles/utils.module.css';

export default function Home({ allPostsData }: any) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I&apos;m Alison. I&apos;m a software enginer and a translator.
        </p>
        <p>
          (This is a sample website - you&apos;ll be building a site like this
          on &nbsp;)
          <Link href='https://ww.nextjs.cn/learn'>our Next.js tutorial</Link>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }: any) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData
    }
  };
}
