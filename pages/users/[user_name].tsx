import Head from "next/head";
import React from "react";
import { GetServerSideProps, NextPage } from "next";

const baseURL = "https://moai-ogp-test-3.herokuapp.com";

interface IUserPageSSProps {
  URL: string;
  userName: string;
  userDescription: string;
  imageSrc: string;
}
const UserPage: NextPage<IUserPageSSProps> = ({
  URL,
  userName,
  userDescription,
  imageSrc,
}) => {
  return (
    <div>
      <Head>
        <title>OGP TEST-USER PAGE</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@DevMoai" />
        <meta property="og:url" content={baseURL + URL} />
        <meta property="og:title" content={`user_name:${userName}`} />
        <meta property="og:description" content={userDescription} />
        <meta property="og:site_name" content="OGP TEST" />
        <meta property="og:image" content={baseURL + imageSrc} />
      </Head>
      <p>user_name: {userName}</p>
      <p>URL: {baseURL + URL}</p>
      <p>userDescription: {userDescription}</p>
      <img src={imageSrc} />
    </div>
  );
};
export default UserPage;

export const getServerSideProps: GetServerSideProps<IUserPageSSProps> = async (
  context
) => {
  return {
    props: {
      URL: context.resolvedUrl,
      userName:
        typeof context.query.user_name === "string"
          ? context.query.user_name
          : "",
      userDescription:
        "自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介",
      imageSrc: "/images/ogp-thumbnail.jpg",
    },
  };
};
