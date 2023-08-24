import { Excel } from "./components/excel/Excel";
import { Header } from "./components/header/Header";
import { Toolbar } from "./components/toolbar/Toolbar";
import { Formula } from "./components/formula/Formula";
import { Table } from "./components/table/Table";
import "./scss/index.scss";

const options = {
  components: [Header, Toolbar, Formula, Table],
};
const excel = new Excel("#app", options);

excel.initComponent();
