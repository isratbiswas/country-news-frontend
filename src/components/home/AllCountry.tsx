"use client";

import config from "@/config";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

interface Article {
  title: string;
  description: string;
  publishedAt: string;
  urlToImage: string;
  content: string;
  url: string;
}

const AllCountry = () => {
  const [news, setNews] = useState<Article[]>([]);
  useEffect(() => {
    const fetchNews = async (country: string) => {
      try {
        const res = await fetch(
          `${config.baseUrl}?country=${country}&apiKey=${config.apiKey}`,
        );

        const data = await res.json();
        setNews(data.articles);
      } catch (err) {
        console.log("Error fetching news", err);
      }
    };
    fetchNews("us");
  }, []);
  console.log(news);
  return (
    <div className="container mx-auto">
      <h2 className="text-center mb-4 font-bold">Top Headlines</h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        {news.map((article, index) => (
          <div key={index}>
            <Card>
              <CardHeader>
                <Image
                  src={
                    article?.urlToImage ||
                    "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
                  }
                  width={500}
                  height={500}
                  alt={article.title}
                />
                <CardTitle>{article.title}</CardTitle>
                <CardDescription>
                  {article.description.slice(0, 100)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Content : {article.content}</p>
              </CardContent>
              <CardFooter className="gap-4">
                <p>PublishedDate : {article.publishedAt}</p>
                <Button className="bg-[#0C7779]">
                  <Link href={`article.url`}>Details</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCountry;
