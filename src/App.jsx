import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';

const App = () => {
  const products = [
    {
      heading: "Instagram",
      subHeadings: ["Ig Followers", "Ig Views"],
      paragraphs: [
        ["1K Foll = 10K", "5K Foll = 40K", "10K Foll = 75K", "50K Foll = 380K"],
        ["1K Views = 10K", "5K Views = 40K", "10K Views = 75K", "50K Views = 380K", "100K Views = 700K"]
      ]
    },
    {
      heading: "Instagram",
      subHeadings: ["Ig Likes", "Ig Story"],
      paragraphs: [
        ["1K Like = 10K", "5K Like = 40K", "10K Like = 75K", "50K Like = 380K", "100K Like = 700K"],
        ["1K Views = 10K", "5K Views = 40K", "10K Views = 75K", "50K Views = 380K", "100K Views = 700K"]
      ]
    },
    {
      heading: "Tiktok",
      subHeadings: ["Tiktok Likes", "Tiktok Story"],
      paragraphs: [
        ["1K Like = 10K", "5K Like = 40K", "10K Like = 75K", "50K Like = 380K", "100K Like = 700K"],
        ["1K Views = 13K", "5K Views = 50K", "10K Views = 100K", "50K Views = 480K", "100K Views = 900K"]
      ]
    },
    {
      heading: "Tiktok",
      subHeadings: ["Tiktok Followers HQ", "Tiktok Share"],
      paragraphs: [
        ["1K Foll = 20K", "5K Foll = 100K", "10K Foll = 200K", "50K Foll = 1JT", "100K Foll = 1.9JT"],
        ["1K Share = 13K", "5K Share = 50K", "10K Share = 100K", "50K Share = 480K", "100K Share = 900K"]
      ]
    },
    {
      heading: "Facebook",
      subHeadings: ["Fb Followers Profile", "Fanspage Followers"],
      paragraphs: [
        ["1K Foll = 10K", "5K Foll = 50K", "10K Foll = 100K", "50K Foll = 450K", "100K Foll = 800K"],
        ["1K Foll = 20K", "5K Foll = 100K", "10K Foll = 200K", "50K Foll = 1JT", "100K Foll = 1.9JT"]
      ]
    },
    {
      heading: "Facebook",
      subHeadings: ["Fb Share", "Fb Likes"],
      paragraphs: [
        ["1K Share = 10K", "5K Share = 50K", "10K Share = 100K", "50K Share = 450K", "100K Share = 800K"],
        ["1K Likes = 20K", "5K Likes = 100K", "10K Likes = 200K", "50K Likes = 1JT", "100K Likes = 1.9JT"]
      ]
    },
    {
      heading: "Twitter",
      subHeadings: ["Twitter Like", "Twitter Followers"],
      paragraphs: [
        ["1K Like = 100K", "5K Like = 450K", "10K Like = 800K"],
        ["1K Foll = 20K", "5K Foll = 100K", "10K Foll = 200K", "50K Foll = 700K", "100K Foll = 1.2JT"]
      ]
    },
    {
      heading: "Telegram",
      subHeadings: ["Telegram Post Views", "Telegram Grup/Ch Member"],
      paragraphs: [
        ["1K Views = 10K", "5K Views = 45K", "10K Views = 75K", "Hanya 10 Post Baru Yang Di View"],
        ["1K Member = 20K", "5K Member = 100K", "10K Member = 200K"]
      ]
    },
    {
      heading: "Youtube",
      subHeadings: ["Youtube Subscriber", "Youtube Dislike"],
      paragraphs: [
        ["1K Subs = 100K", "5K Subs = 450K", "10K Subs = 1JT"],
        ["1K Dislike = 20K", "5K Dislike = 100K", "10K Dislike = 200K"]
      ]
    },
    {
      heading: "Youtube",
      subHeadings: ["Youtube View Livestream", "Youtube Like"],
      paragraphs: [
        ["1K View = 75K", "5K View = 320K", "10K View = 600K", "Durasi Menonton 1 Jam"],
        ["1K Like = 20K", "5K Like = 100K", "10K Like = 200K"]
      ]
    },
    {
      heading: "Shopee",
      subHeadings: ["Shopee Followers", "Shopee Video Like"],
      paragraphs: [
        ["1K Followers = 10K", "5K Followers = 50K", "10K Followers = 100K", "50K Followers = 450K", "100K Followers = 800K"],
        ["1K Likes = 20K", "5K Likes = 100K", "10K Likes = 200K", "50K Likes = 1JT", "100K Likes = 1.9JT"]
      ]
    },
    {
      heading: "Tokopedia",
      subHeadings: ["Tokopedia Followers"],
      paragraphs: [
        ["1K Followers = 100K", "5K Followers = 500K", "10K Followers = 1JT"]
      ]
    },
  ];

  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product-detail"
            element={<ProductDetail products={products} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
