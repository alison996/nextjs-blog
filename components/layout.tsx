import { PropsWithChildren } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '@/styles/utils.module.css';

const name = 'Alison';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({
  children,
  home
}: PropsWithChildren & { home: boolean }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a presonal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta property='og:title' content={siteTitle} />
        <meta property='twitter:card' content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              src='/images/profile.jpeg'
              width={180}
              height={180}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <Image
                className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                src='/images/profile.jpeg'
                width={180}
                height={180}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/'>
                <span className={utilStyles.colorInherit}>{name}</span>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <span>⬅ Back to home</span>
          </Link>
        </div>
      )}
    </div>
  );
}
