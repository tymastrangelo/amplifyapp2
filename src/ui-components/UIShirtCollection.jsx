/* eslint-disable */
import * as React from "react";
import { listShirts } from "../graphql/queries";
import UIShirt from "./UIShirt";
import { getOverrideProps } from "./utils";
import { Collection, Pagination, Placeholder } from "@aws-amplify/ui-react";
import { API, Storage } from "aws-amplify";

const nextToken = {};
const apiCache = {};

export default function UIShirtCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [pageIndex, setPageIndex] = React.useState(1);
  const [hasMorePages, setHasMorePages] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [isApiPagination, setIsApiPagination] = React.useState(false);
  const [instanceKey, setInstanceKey] = React.useState("newGuid");
  const [loading, setLoading] = React.useState(true);
  const [maxViewed, setMaxViewed] = React.useState(1);
  const pageSize = 6;
  const isPaginated = false;

  React.useEffect(() => {
    nextToken[instanceKey] = "";
    apiCache[instanceKey] = [];
  }, [instanceKey]);

  React.useEffect(() => {
    setIsApiPagination(!!!itemsProp);
  }, [itemsProp]);

  const handlePreviousPage = () => {
    setPageIndex(pageIndex - 1);
  };

  const handleNextPage = () => {
    setPageIndex(pageIndex + 1);
  };

  const jumpToPage = (pageNum) => {
    setPageIndex(pageNum);
  };

  const loadPage = async (page) => {
    const cacheUntil = page * pageSize + 1;
    const newCache = apiCache[instanceKey].slice();
    let newNext = nextToken[instanceKey];

    while ((newCache.length < cacheUntil || !isPaginated) && newNext != null) {
      setLoading(true);
      const variables = {
        limit: pageSize,
      };

      if (newNext) {
        variables["nextToken"] = newNext;
      }

      const result = (
        await API.graphql({
          query: listShirts.replaceAll("__typename", ""),
          variables,
        })
      ).data.listShirts;

      await Promise.all(
        result.items.map(async (shirt) => {
          // Check if the image is an online link or a saved image
          if (shirt.image) {
            if (shirt.image.startsWith("http") || shirt.image.startsWith("www")) {
              // Online link, no need to change anything
            } else {
              // Local file, get the URL from local storage
              try {
                const imageUrl = await Storage.get(shirt.image);
                shirt.image = imageUrl;
              } catch (error) {
                console.error(`Error fetching image from Storage for ${shirt.image}`, error);
                // Handle error fetching local image
              }
            }
          }
          return shirt;
        })
      );

      newCache.push(...result.items);
      newNext = result.nextToken;
    }

    const cacheSlice = isPaginated
      ? newCache.slice((page - 1) * pageSize, page * pageSize)
      : newCache;

    setItems(cacheSlice);
    setHasMorePages(!!newNext);
    setLoading(false);
    apiCache[instanceKey] = newCache;
    nextToken[instanceKey] = newNext;
  };

  React.useEffect(() => {
    loadPage(pageIndex);
  }, [pageIndex]);

  React.useEffect(() => {
    setMaxViewed(Math.max(maxViewed, pageIndex));
  }, [pageIndex, maxViewed, setMaxViewed]);

  return (
    <div>
      <Collection
        type="list"
        direction="column"
        justifyContent="left"
        itemsPerPage={pageSize}
        isPaginated={!isApiPagination && isPaginated}
        items={itemsProp || (loading ? new Array(pageSize).fill({}) : items)}
        {...getOverrideProps(overrides, "UIShirtCollection")}
        {...rest}
      >
        {(item, index) => {
          if (loading) {
            return <Placeholder key={index} size="large" />;
          }
          return (
            <UIShirt
              shirt={item}
              key={item.id}
              {...(overrideItems && overrideItems({ item, index }))}
            ></UIShirt>
          );
        }}
      </Collection>
      {isApiPagination && isPaginated && (
        <Pagination
          currentPage={pageIndex}
          totalPages={maxViewed}
          hasMorePages={hasMorePages}
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
          onChange={jumpToPage}
        />
      )}
    </div>
  );
}