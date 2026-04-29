import bandungLocalContent from "./bandung";
import jogjaLocalContent from "./jogja";
import malangLocalContent from "./malang";
import samarindaLocalContent from "./samarinda";

const CITY_LOCAL_CONTENT = {
  bandung: bandungLocalContent,
  jogja: jogjaLocalContent,
  malang: malangLocalContent,
  samarinda: samarindaLocalContent,
};

export function getCityLocalContent(slug) {
  return CITY_LOCAL_CONTENT[slug] ?? null;
}
