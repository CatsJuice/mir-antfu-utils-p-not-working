import { sleep } from '@antfu/utils';
/**
 * Mock data loading
 * @returns 
 */
export async function loadData() {
  await sleep(Math.random() * 1000)
  return Math.round(Math.random() * 1000)
}