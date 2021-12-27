import React from "react";
import { getAllStockData } from "../services";
import "./StockList.css";
import { List } from "@fluentui/react/lib/List";
import { observer } from "mobx-react-lite";
import { Stock } from "../types";

export default observer(function StockList() {
  const stockList = getAllStockData();

  const sortedStockList = stockList.sort((a, b) =>
    a.ticker.localeCompare(b.ticker)
  );

  const onRenderCell = (
    item: Stock | undefined,
    index: number | undefined
  ): JSX.Element => {
    return (
      <div className="itemCell" data-is-focusable={true}>
        <div className="itemContent">
          <div>{item!.ticker}</div>
          <div>{item!.name}</div>
          <div>{item!.ticker}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <List
        className="list"
        items={sortedStockList}
        onRenderCell={onRenderCell}
      />
    </div>
  );
});
