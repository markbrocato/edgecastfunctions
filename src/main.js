
process.env.NODE_ENV = 'production'
process.chdir(__dirname)
const NextServer = require('next/dist/server/next-server').default
const path = require('path')

const nextServer = new NextServer({
  hostname: 'localhost',
  port: currentPort,
  dir: path.join(__dirname),
  dev: false,
  conf: {"env":{},"webpack":null,"webpackDevMiddleware":null,"eslint":{"ignoreDuringBuilds":false},"typescript":{"ignoreBuildErrors":false,"tsconfigPath":"tsconfig.json"},"distDir":"./.next","cleanDistDir":true,"assetPrefix":"","configOrigin":"next.config.js","useFileSystemPublicRoutes":true,"generateEtags":true,"pageExtensions":["tsx","ts","jsx","js"],"target":"server","poweredByHeader":true,"compress":true,"analyticsId":"","images":{"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[],"disableStaticImages":false,"minimumCacheTTL":60,"formats":["image/webp"],"dangerouslyAllowSVG":false,"contentSecurityPolicy":"script-src 'none'; frame-src 'none'; sandbox;"},"devIndicators":{"buildActivity":true,"buildActivityPosition":"bottom-right"},"onDemandEntries":{"maxInactiveAge":15000,"pagesBufferLength":2},"amp":{"canonicalBase":""},"basePath":"","sassOptions":{},"trailingSlash":false,"i18n":null,"productionBrowserSourceMaps":false,"optimizeFonts":true,"excludeDefaultMomentLocales":true,"serverRuntimeConfig":{},"publicRuntimeConfig":{},"reactStrictMode":true,"httpAgentOptions":{"keepAlive":true},"outputFileTracing":true,"staticPageGenerationTimeout":60,"swcMinify":false,"experimental":{"newNextLinkBehavior":false,"cpus":11,"sharedPool":true,"plugins":false,"profiling":false,"isrFlushToDisk":true,"workerThreads":false,"pageEnv":false,"optimizeCss":false,"nextScriptWorkers":false,"scrollRestoration":false,"externalDir":false,"reactRoot":true,"disableOptimizedLoading":false,"gzipSize":true,"swcFileReading":true,"craCompat":false,"esmExternals":true,"rootDir":false,"isrMemoryCacheSize":52428800,"serverComponents":false,"fullySpecified":false,"outputFileTracingRoot":"","outputStandalone":true,"images":{"layoutRaw":false},"trustHostHeader":false},"configFileName":"next.config.js"},
})

handler = nextServer.getRequestHandler()

export default function main(req, res) {
  try {
    await handler(req, res)
  } catch (err) {
    console.error(err);
    res.statusCode = 500
    res.end('internal server error')
  }
}

// import { cube } from "./lib/math.js";

// export default function myEdgeFunction(req, res) {
//    const result = cube(Math.PI);
//    // query type is URLSearchParams https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
//    // e.g. if the url is http://example.com/push?foo=abc&foo=xyz
//    // req.query.get("foo") returns abc
//    console.log(req.query.get("foo"));
//    // req.query.getAll("foo") returns [abc, xyz]
//    console.log(req.query.getAll("foo"));
//    // req and res headers type is Headers https://developer.mozilla.org/en-US/docs/Web/API/Headers
//    console.log(req.headers.get("x-header"));
//    res.headers.set('x-set', 'wow')
//    res.headers.append("x-append", "foo");
//    res.headers.append("x-append", "bar");
//    // you can chain status and send
//    // status function param type can be a number or a string
//    res.status('200').send(`Welcome to the Edge, Mark! PI Cubed: ${result}`);
// }
