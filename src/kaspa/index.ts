import { Encoding, RpcClient } from './wasm/kaspa.js';

export const kaspa = new RpcClient({
	networkId: 'mainnet',
	url: process.env.KASPA_NODE_URL,
	encoding: Encoding.Borsh
});

kaspa.connect().then(() => {
	console.log('Connected to Kaspa RPC');
});
