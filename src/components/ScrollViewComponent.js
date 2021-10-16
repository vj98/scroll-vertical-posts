import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CardComponent from "./CardComponent";
import { Skeleton } from "@mui/material";

const ScrollView = () => {
  const [data, setData] = useState([]);
  const [next, setNext] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [currPage, setCurrPage] = useState(0);

  useEffect(() => {
    console.log(process.env.REACT_APP_URL);
    fetchData();
  }, []);

  const fetchData = () => {
    let url =
      currPage === 0
        ? process.env.REACT_APP_URL
        : `${process.env.REACT_APP_URL_QUERY}${currPage + 1}`;
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        let tmp = res.data;
        let currData = data.slice();
        tmp.forEach((val) => currData.push(val));
        setData(currData);
        let tmpBool =
          res["meta"]["pagination"]["page"] <
          res["meta"]["pagination"]["pages"];
        setNext(tmpBool);
        setCurrPage(res["meta"]["pagination"]["page"]);
        setTotalPage(res["meta"]["pagination"]["pages"]);
      });
  };

  const onHandleMore = () => {
    if (currPage + 1 <= totalPage) {
      fetchData();
    } else {
      setNext(false);
    }
  };

  return (
    <>
      <InfiniteScroll
        dataLength={data.length}
        next={onHandleMore}
        hasMore={next}
        loader={
          <Skeleton animation="wave" width={600}>
            <CardComponent />
          </Skeleton>
        }
      >
        {data.map((val, i) => (
          <CardComponent val={val} ind={i} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default ScrollView;
