import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const LP: NextPage = () => {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("66666");

  return (
    <div>
      <Head>
        <title>OGP TEST-LANDING PAGE</title>
        <meta property="og:url" content={router.asPath} />
        <meta property="og:title" content="OGP TEST-LANDING PAGE" />
        <meta property="og:description" content="landing page of OGP TEST" />
        <meta property="og:site_name" content="OGP TEST" />
      </Head>
      <h2>LP</h2>
      <p>
        Enter user name
        <input
          type="input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </p>
      <Link href={`/users/${encodeURIComponent(userName)}`}>
        <a>Go To {userName}'s page</a>
      </Link>
    </div>
  );
};
export default LP;
