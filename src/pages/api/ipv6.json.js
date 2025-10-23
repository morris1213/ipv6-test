// We are removing the node:dns/promises lookup because it's not available in the Cloudflare runtime.
// The API will now only report the client's IP address type.

export const prerender = false;

export const GET = async ({ clientAddress }) => {
    const isIPv6 = clientAddress ? clientAddress.includes(':') : false;

    // The DNS check has been removed for Cloudflare compatibility.
    const hasIPv6Dns = false; // Defaulting to false as we can't perform the check.

    return new Response(JSON.stringify({ ipv6: isIPv6, ipv6Dns: hasIPv6Dns }), {
        headers: { 'Content-Type': 'application/json' },
    });
};