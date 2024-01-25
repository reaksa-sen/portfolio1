import { NextSeo } from "next-seo";
import Head from "next/head";
import React from "react";

interface Props {
  title: string;
  description?: string;
  imageUrl?: any;
  siteUrl?: string;
  keyWords?: string;
}

export const SEO: React.FC<Props> = ({
  title,
  description,
  imageUrl,
  siteUrl,
  keyWords,
}) => {
  const facebookAppId = process.env.NEXT_FB_DOMAIN_APP_ID as string;

  const defaultSiteUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${siteUrl || ""}`;
  const defaultImageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${imageUrl || "/profile.jpg"}`; // prettier-ignore
  const defaultTitle = "tRIN's portfolio";
  const defaultDescription =
    description ||
    "This portfolio details my experience as a software engineer.";

  const myTitle = title || defaultTitle; // `${title} | ${defaultTitle}`

  const myKeyword = keyWords || "KruyTharin Portfolio";
  return (
    <>
      <NextSeo
        title={myTitle}
        description={defaultDescription}
        canonical={defaultSiteUrl}
        openGraph={{
          url: defaultSiteUrl,
          type: "website",
          title: myTitle,
          site_name: defaultTitle,
          description: defaultDescription,
          images: [
            {
              url: defaultImageUrl,
              width: 1200,
              height: 630,
              alt: defaultTitle,
            },
          ],
        }}
        additionalMetaTags={[{ property: "keywords", content: myKeyword }]}
        twitter={{
          site: siteUrl || "https://twitter.com/rinz_dev",
          cardType: "summary_large_image",
        }}
        facebook={{
          appId: facebookAppId,
        }}
      />
      <NextSeo />
      <Head>
        <meta name="googlebot" content="index,follow" />
        <meta name="facebook-domain-verification" content={facebookAppId} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};
