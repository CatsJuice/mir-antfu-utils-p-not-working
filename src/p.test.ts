import { it, expect } from "vitest"
import { p } from "@antfu/utils"
import { loadData } from "./utils"

const concurrency = 1
const total = 10


it("p", async () => {
  let running = 0
  const promises = Array.from({ length: total }).map(async (_, i) => {
    running++
    const data = await loadData()
    expect(running).to.be.lessThanOrEqual(concurrency)
    running--
    return data
  })
  await p(promises, { concurrency })
}, { timeout: 10000 })

