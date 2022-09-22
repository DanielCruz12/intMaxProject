import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../layouts";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const day = dayjs();

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://bing-news-search1.p.rapidapi.com/news/search?q=Ethereum&count=9&setLang=en&freshness=Week&originalImg=true&textFormat=Raw&safeSearch=Moderate",
        {
          headers: {
            "X-BingApis-SDK": "true",
            "X-RapidAPI-Key":
              "1d08804e01msh27ff3d62f29d1eep132f4cjsn1e70a1681696",
            "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
          },
        }
      );
      setNews(res.data.value);
      setLoading(false);
      console.log("hola");
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Navbar />
      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 mx-10 md:mx-20">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            {news.map((index) => (
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="mb-10 group wow fadeInUp">
                  <div className="rounded overflow-hidden mb-8">
                    <div className="block">
                      <img
                        className="w-full transition group-hover:scale-125 group-hover:rotate-6"
                        src={index.image.contentUrl}
                      />
                    </div>
                  </div>
                  <div>
                    <span className="bg-purple-700 rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5">
                      {/* <Dayjs format="dddd, h:mm A, MMMM">
                        {index.datePublished}
                      </Dayjs> */}
                      {index.datePublished}
                    </span>
                    <h3 className="font-semibold text-white text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                      {index.name}
                    </h3>
                    <p className="text-base text-white text-body-color">
                      {index.description}
                    </p>
                    <p className="text-underline text-blue-500">
                      <a target="blank" href={index.url}>
                        Ver más...
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/" className="text-white">
            Regresar
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default News;
