import mri from 'mri'
import { test, expect } from 'vitest'

// mri 解析命令行参数

test('mri function', () => {
  const argv = ['_', 'src:\index.ts', 'CAC.ts', '--port', '3000', '--type', 'node', '-mtv']
  const result = mri(argv.slice(2))
  console.log('result', result)
  expect(result).toEqual({
    "_": [
      "CAC.ts"
    ],
    "port": 3000,
    "type": 'node',
    "m": true,
    "t": true,
    "v": true,
  })
})
