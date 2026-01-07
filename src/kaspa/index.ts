import { Encoding, Resolver, RpcClient } from './wasm/kaspa.js';

export const kaspa = new RpcClient({
	networkId: 'mainnet',
	resolver: new Resolver(),
	encoding: Encoding.Borsh
});

kaspa.connect().then(() => {
	console.log('Connected to Kaspa RPC');
});
