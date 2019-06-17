import { isEmpty } from "lodash.isempty";
import moment, { Moment } from "moment";

const exportToCsv = (data, fileName?: string) => {
  if (isEmpty(data)) {
    return new Error("Export CSV - You should pass me an array of arrays!");
  }

  const name: string|Moment = fileName || moment().format("YYYY-MM-DD");
  const csvContent: string = `data:text/csv;charset=utf-8,${data && data.map(e => e.join(",")).join("\n")}`;
  const encodedUri = encodeURI(csvContent);

  const link: HTMLAnchorElement = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `${name}.csv`);

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default exportToCsv;
