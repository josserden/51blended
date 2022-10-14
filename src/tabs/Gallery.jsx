import { useState, useEffect } from "react";

import * as ImageService from "service/image-service";
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from "components";

export const Gallery = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = (value) => {
    setQuery(value);
    setPage(1);
  };

  useEffect(() => {
    if (!query) return;

    const getImages = async (query, page) => {
      try {
        const data = await ImageService.getImages(query, page);
        setImages(data.photos);
        setIsVisible(data.page < Math.ceil(data.total_results / data.per_page));
      } catch (error) {
        console.error(error);
      }
    };

    getImages(query, page);
  }, [query, page]);

  const handlePrevClick = () => {
    if (page === 1) return;
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextClick = () => {
    // if (page === 1) return;
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      <Grid>
        {images.length > 0 &&
          images.map(({ id, avg_color, alt, src }) => (
            <GridItem key={id}>
              <CardItem color={avg_color}>
                <img src={src.large} alt={alt} />
              </CardItem>
            </GridItem>
          ))}
      </Grid>
      {isVisible && (
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {page !== 1 && (
            <Button type="button" onClick={handlePrevClick}>
              Prev Page
            </Button>
          )}
          <Button type="button" onClick={handleNextClick}>
            Next Page
          </Button>
        </div>
      )}
    </>
  );
};
