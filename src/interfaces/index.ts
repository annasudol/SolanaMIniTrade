export enum NetworkTypes {
  mainet = 'mainet',
  devnet = 'devnet',
  testnet = 'testnet'
}

export type CallbackFunctionNumber = (args: number) => void;
export type CallbackFunctionText = (args: string) => void;
