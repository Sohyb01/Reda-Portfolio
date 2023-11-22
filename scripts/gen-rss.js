const { promises: fs } = require("fs");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");

async function generate() {
  const feed = new RSS({
    title: "Ahmed Reda Abd El-Naeem",
    site_url: "https://www.facebook.com/profile.php?id=100005980906632",
    feed_url: "https://yoursite.com/feed.xml",
  });

  await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
