import {
  Burn,
  Mint,
  Swap,
  Sync,
} from "../generated/UniswapV2Pair/UniswapV2Pair"
import {
  ReseveRecord,
  BurnRecord,
  MintRecord,
  SwapRecord,
} from "../generated/schema"


export function handleBurn(event: Burn): void {
  const id = event.transaction.hash.toHexString()
  const burnRecord = new BurnRecord(id)
  burnRecord.timestamp = event.block.timestamp
  burnRecord.sender = event.params.sender
  burnRecord.amount0= event.params.amount0
  burnRecord.amount1 = event.params.amount1
  burnRecord.to = event.params.to
  burnRecord.save()
}

export function handleMint(event: Mint): void {
  const id = event.transaction.hash.toHexString()
  const mintRecord = new MintRecord(id)
  mintRecord.timestamp = event.block.timestamp
  mintRecord.sender = event.params.sender
  mintRecord.amount0= event.params.amount0
  mintRecord.amount1 = event.params.amount1
  mintRecord.save()
}

export function handleSwap(event: Swap): void {
  const id = event.transaction.hash.toHexString()
  const swapRecord = new SwapRecord(id)
  swapRecord.timestamp = event.block.timestamp
  swapRecord.sender = event.params.sender
  swapRecord.amount0In= event.params.amount0In
  swapRecord.amount1In= event.params.amount1In
  swapRecord.amount0Out= event.params.amount0Out
  swapRecord.amount1Out= event.params.amount1Out
  swapRecord.to = event.params.to
  swapRecord.save()
}

export function handleSync(event: Sync): void {
  const id = event.transaction.hash.toHexString()
  const reserveRecord = new ReseveRecord(id)
  reserveRecord.timestamp = event.block.timestamp
  reserveRecord.reserve0 = event.params.reserve0
  reserveRecord.reserve1 = event.params.reserve1
  reserveRecord.save()
}
