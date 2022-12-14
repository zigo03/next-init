import React from 'react';
import Head from 'next/head';
import AlbumsView from '../components/album/albumsView';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AlbumsView />
    </div>
  );
}
