import { Encoding, Resolver, RpcClient } from './wasm/kaspa.js';

const resolver = new Resolver();

export const kaspa = new RpcClient({
	networkId: 'mainnet',
	url: process.env.KASPA_NODE_URL,
	encoding: Encoding.Borsh,
	resolver: !process.env.KASPA_NODE_URL ? resolver : undefined
});

kaspa.connect().then(() => {
	console.log('Connected to Kaspa RPC');
});
