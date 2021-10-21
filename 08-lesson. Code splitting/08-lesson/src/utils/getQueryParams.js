import queryString from "query-string";

export default function getQueryParams(query) {
    return queryString.parse(query);
}
