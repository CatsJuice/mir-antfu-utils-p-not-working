
import pLimit from "p-limit";
import { p } from "@antfu/utils";
import { loadData } from "./utils";

const concurrency = 1
let running = 0

// Use { p } from @antfu/utils
p(
  Array.from({ length: 100 }).map(async (_, i) => {
    console.log(`start, running: ${running++}`)
    const data = await loadData();
    console.log(`end, running: ${running--}`)
    return data;
  }), 
  { concurrency }
)

// Use p-limit directly
// const limit = pLimit(concurrency);
// const input = Array.from({ length: 100 }).map((_, i) => limit(() => loadData(i)));
// Promise.all(input).then(console.log)