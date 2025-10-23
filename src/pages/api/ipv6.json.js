import { lookup } from 'node:dns/promises';

export const prerender = false;

export const GET = async ({ clientAddress }) => {
    const isIPv6 = clientAddress ? clientAddress.includes(':') : false;
    let hasIPv6Dns = false;

    try {
        const { address } = await lookup('ipv6.google.com');
        if (address) {
            hasIPv6Dns = true;
        }
    } catch (error) {
        // The lookup will fail if the DNS resolver can't handle IPv6
    }

    return new Response(JSON.stringify({ ipv6: isIPv6, ipv6Dns: hasIPv6Dns }), {
        headers: { 'Content-Type': 'application/json' },
    });
};