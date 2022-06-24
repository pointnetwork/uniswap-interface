const ALLOWED_HOSTNAMES: { [hostname: string]: true } = {
  'etherscan.io': true,
  'ropsten.etherscan.io': true,
  'rinkeby.etherscan.io': true,
  'kovan.etherscan.io': true,
  'goerli.etherscan.io': true,
  'optimistic.etherscan.io': true,
  'kovan-optimistic.etherscan.io': true,
  'rinkeby-explorer.arbitrum.io': true,
  'arbiscan.io': true,
  'uniswap.org': true,
  'help.uniswap.org': true,
  'info.uniswap.org': true,
  'docs.uniswap.org': true,
  'discord.gg': true,
  'uniswap.canny.io': true,
}

/**
 * For https links to allowed hosts, it returns a link that works
 * in Point Browser (using the `/web2redirect` functionality).
 *
 * For any other host, it returns the link as is.
 */
export function getPointLink(href: string): string {
  try {
    const url = new URL(href)
    if (url.protocol === 'https:' && ALLOWED_HOSTNAMES[url.hostname]) {
      return `https://point/web2redirect?url=${href}`
    }
    return href
  } catch (err) {
    return href
  }
}
