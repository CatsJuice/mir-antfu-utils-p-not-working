import pLimit from 'p-limit';
import { it, expect } from "vitest"

import { loadData } from "./utils";

const concurrency = 1
const total = 10

it('p-limit', async () => {
  let running = 0
  const limit = pLimit(concurrency);
  const input = Array.from({ length: total }).map(async (_, i) => {
    return limit(async () => {
      running++
      const data = await loadData()
      expect(running).to.be.lessThanOrEqual(concurrency)
      running--
      return data
    })
  })
  await Promise.all(input)
}, { timeout: 10000 })