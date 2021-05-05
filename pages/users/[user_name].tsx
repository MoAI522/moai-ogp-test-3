import { useRouter } from "next/router";
import Head from "next/head";
import React, { useState } from "react";
import { NextPage } from "next";

const UserPage: NextPage = () => {
  const router = useRouter();
  const { user_name } = router.query;
  const [userDescription] = useState<string>(
    "自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介"
  );

  return (
    <div>
      <Head>
        <title>OGP TEST-USER PAGE</title>
        <meta property="og:url" content={router.asPath} />
        <meta property="og:title" content={`user_name:${user_name}`} />
        <meta property="og:description" content={userDescription} />
        <meta property="og:site_name" content="OGP TEST" />
        <meta property="og:image" content="/images/ogp-thumbnail.jpg" />
      </Head>
      <p>user_name: {user_name}</p>
    </div>
  );
};
export default UserPage;
