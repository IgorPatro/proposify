import Head from "next/head";

type SeoProps = {
  description?: string;
  title: string;
};

export const Seo = ({ description, title }: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta content={title} key="title" property="og:title" />
      {description ? (
        <meta content={description} key="description" name="description" />
      ) : null}
      <meta content="Proposify" key="keywords" name="keywords" />
    </Head>
  );
};
