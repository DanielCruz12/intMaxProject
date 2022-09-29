import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { Footer } from "../layouts";
import { NavbarBlog } from "../layouts/NavbarBlog";
import { urlNews } from "../utils";

const News = () => {
  const [news, setNews] = useState([]);
  const [loader, setLoader] = useState(true);
  const day = dayjs();


  const getData = async () => {
    try {
      const res = await axios.get(urlNews, {
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key":
            "1d08804e01msh27ff3d62f29d1eep132f4cjsn1e70a1681696",
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      });
      setTimeout(function () {
        setNews(res.data.value);
        setLoader(false);
      }, 1000)
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-primary w-full overflow-hidden">
      <NavbarBlog />
      <>
        <section className="pt-36 md:pt-40 pb-10 lg:pb-20 mx-10 md:mx-36">
          <div className="container">

            {loader ? <Loader /> : (
              <div className="flex flex-wrap -mx-4">
                {news.map((index) => (
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div className="mb-10 group wow fadeInUp">
                      <div className="rounded overflow-hidden mb-8">
                        <div className="block">
                          <img
                            className="w-full transition group-hover:scale-125 group-hover:rotate-6 max-h-50"
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
                        <h3 className="font-semibold text-white text-[19px] md:text[23px] mb-4 inline-block text-dark hover:text-primary">
                          {index.name}
                        </h3>
                        <p className="text-base text-white text-[16px] md:text[20px] text-body-color">
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
            )}
            <Link to="/" className="text-white">
              Regresar
            </Link>
          </div>
        </section>
      </>
      <Footer/>
    </div>
  );
};

export default News;
