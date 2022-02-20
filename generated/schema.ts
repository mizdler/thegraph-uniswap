// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ReseveRecord extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("reserve0", Value.fromBigInt(BigInt.zero()));
    this.set("reserve1", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp2", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ReseveRecord entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ReseveRecord entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ReseveRecord", id.toString(), this);
    }
  }

  static load(id: string): ReseveRecord | null {
    return changetype<ReseveRecord | null>(store.get("ReseveRecord", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get reserve0(): BigInt {
    let value = this.get("reserve0");
    return value!.toBigInt();
  }

  set reserve0(value: BigInt) {
    this.set("reserve0", Value.fromBigInt(value));
  }

  get reserve1(): BigInt {
    let value = this.get("reserve1");
    return value!.toBigInt();
  }

  set reserve1(value: BigInt) {
    this.set("reserve1", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get timestamp2(): BigInt {
    let value = this.get("timestamp2");
    return value!.toBigInt();
  }

  set timestamp2(value: BigInt) {
    this.set("timestamp2", Value.fromBigInt(value));
  }
}

export class MintRecord extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("sender", Value.fromBytes(Bytes.empty()));
    this.set("amount0", Value.fromBigInt(BigInt.zero()));
    this.set("amount1", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp2", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MintRecord entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save MintRecord entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("MintRecord", id.toString(), this);
    }
  }

  static load(id: string): MintRecord | null {
    return changetype<MintRecord | null>(store.get("MintRecord", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get amount0(): BigInt {
    let value = this.get("amount0");
    return value!.toBigInt();
  }

  set amount0(value: BigInt) {
    this.set("amount0", Value.fromBigInt(value));
  }

  get amount1(): BigInt {
    let value = this.get("amount1");
    return value!.toBigInt();
  }

  set amount1(value: BigInt) {
    this.set("amount1", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get timestamp2(): BigInt {
    let value = this.get("timestamp2");
    return value!.toBigInt();
  }

  set timestamp2(value: BigInt) {
    this.set("timestamp2", Value.fromBigInt(value));
  }
}

export class BurnRecord extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("sender", Value.fromBytes(Bytes.empty()));
    this.set("amount0", Value.fromBigInt(BigInt.zero()));
    this.set("amount1", Value.fromBigInt(BigInt.zero()));
    this.set("to", Value.fromBytes(Bytes.empty()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp2", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BurnRecord entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save BurnRecord entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("BurnRecord", id.toString(), this);
    }
  }

  static load(id: string): BurnRecord | null {
    return changetype<BurnRecord | null>(store.get("BurnRecord", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get amount0(): BigInt {
    let value = this.get("amount0");
    return value!.toBigInt();
  }

  set amount0(value: BigInt) {
    this.set("amount0", Value.fromBigInt(value));
  }

  get amount1(): BigInt {
    let value = this.get("amount1");
    return value!.toBigInt();
  }

  set amount1(value: BigInt) {
    this.set("amount1", Value.fromBigInt(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get timestamp2(): BigInt {
    let value = this.get("timestamp2");
    return value!.toBigInt();
  }

  set timestamp2(value: BigInt) {
    this.set("timestamp2", Value.fromBigInt(value));
  }
}

export class SwapRecord extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("sender", Value.fromBytes(Bytes.empty()));
    this.set("amount0In", Value.fromBigInt(BigInt.zero()));
    this.set("amount1In", Value.fromBigInt(BigInt.zero()));
    this.set("amount0Out", Value.fromBigInt(BigInt.zero()));
    this.set("amount1Out", Value.fromBigInt(BigInt.zero()));
    this.set("to", Value.fromBytes(Bytes.empty()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp2", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SwapRecord entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save SwapRecord entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("SwapRecord", id.toString(), this);
    }
  }

  static load(id: string): SwapRecord | null {
    return changetype<SwapRecord | null>(store.get("SwapRecord", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get amount0In(): BigInt {
    let value = this.get("amount0In");
    return value!.toBigInt();
  }

  set amount0In(value: BigInt) {
    this.set("amount0In", Value.fromBigInt(value));
  }

  get amount1In(): BigInt {
    let value = this.get("amount1In");
    return value!.toBigInt();
  }

  set amount1In(value: BigInt) {
    this.set("amount1In", Value.fromBigInt(value));
  }

  get amount0Out(): BigInt {
    let value = this.get("amount0Out");
    return value!.toBigInt();
  }

  set amount0Out(value: BigInt) {
    this.set("amount0Out", Value.fromBigInt(value));
  }

  get amount1Out(): BigInt {
    let value = this.get("amount1Out");
    return value!.toBigInt();
  }

  set amount1Out(value: BigInt) {
    this.set("amount1Out", Value.fromBigInt(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get timestamp2(): BigInt {
    let value = this.get("timestamp2");
    return value!.toBigInt();
  }

  set timestamp2(value: BigInt) {
    this.set("timestamp2", Value.fromBigInt(value));
  }
}
