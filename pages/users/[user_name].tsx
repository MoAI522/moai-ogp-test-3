import Head from "next/head";
import React from "react";
import { GetServerSideProps, NextPage } from "next";

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
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={`user_name:${userName}`} />
        <meta property="og:description" content={userDescription} />
        <meta property="og:site_name" content="OGP TEST" />
        <meta property="og:image" content={imageSrc} />
      </Head>
      <p>user_name: {userName}</p>
      <p>URL: {URL}</p>
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
