export enum NetworkTypes {
  mainet = 'mainnet-beta',
  devnet = 'devnet',
  testnet = 'testnet'
}

export type CallbackFunctionNumber = (args: number) => void;
export type CallbackFunctionText = (args: string) => void;
