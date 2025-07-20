import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_CCRwLsK6.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/anirbansikdar/Projects/anirban.codes/","cacheDir":"file:///Users/anirbansikdar/Projects/anirban.codes/node_modules/.astro/","outDir":"file:///Users/anirbansikdar/Projects/anirban.codes/dist/","srcDir":"file:///Users/anirbansikdar/Projects/anirban.codes/src/","publicDir":"file:///Users/anirbansikdar/Projects/anirban.codes/public/","buildClientDir":"file:///Users/anirbansikdar/Projects/anirban.codes/dist/client/","buildServerDir":"file:///Users/anirbansikdar/Projects/anirban.codes/dist/server/","adapterName":"","routes":[{"file":"file:///Users/anirbansikdar/Projects/anirban.codes/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/anirbansikdar/Projects/anirban.codes/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":true,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/index.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/anirbansikdar/Projects/anirban.codes/dist/blogs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blogs","isIndex":true,"type":"page","pattern":"^\\/blogs\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogs/index.astro","pathname":"/blogs","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/anirbansikdar/Projects/anirban.codes/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/anirbansikdar/Projects/anirban.codes/dist/work/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/work","isIndex":true,"type":"page","pattern":"^\\/work\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work/index.astro","pathname":"/work","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/anirbansikdar/Projects/anirban.codes/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://anirban-1009.github.io/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/anirbansikdar/Projects/anirban.codes/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/anirbansikdar/Projects/anirban.codes/src/pages/about/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/anirbansikdar/Projects/anirban.codes/src/pages/blogs/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/anirbansikdar/Projects/anirban.codes/src/pages/blogs/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/anirbansikdar/Projects/anirban.codes/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/anirbansikdar/Projects/anirban.codes/src/pages/tag/[tags].astro",{"propagation":"in-tree","containsHead":true}],["/Users/anirbansikdar/Projects/anirban.codes/src/pages/work/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/anirbansikdar/Projects/anirban.codes/src/pages/work/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blogs/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blogs/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/anirbansikdar/Projects/anirban.codes/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tag/[tags]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/work/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/work/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about/index@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blogs/index@_@astro":"pages/blogs.astro.mjs","\u0000@astro-page:src/pages/blogs/[...slug]@_@astro":"pages/blogs/_---slug_.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/tag/[tags]@_@astro":"pages/tag/_tags_.astro.mjs","\u0000@astro-page:src/pages/work/index@_@astro":"pages/work.astro.mjs","\u0000@astro-page:src/pages/work/[...slug]@_@astro":"pages/work/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CilBGosk.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/images/aboutHero.jpg":"chunks/aboutHero_Byp69sMQ.mjs","/Users/anirbansikdar/Projects/anirban.codes/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/anirbansikdar/Projects/anirban.codes/.astro/content-modules.mjs":"chunks/content-modules_A8iHho5O.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DRV6uWhL.mjs","/Users/anirbansikdar/Projects/anirban.codes/node_modules/astro/dist/assets/services/noop.js":"chunks/noop_B-Gb2hno.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/GitHub_Logo.png":"chunks/GitHub_Logo_D-3gcAL8.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/Hugo.png":"chunks/Hugo_DKhVUmFf.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/RPi.jpg":"chunks/RPi_Cm0Yp6BI.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/Routio.png":"chunks/Routio_CRsWgiMC.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/ai-revolution.jpeg":"chunks/ai-revolution_C6sCvTxb.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/aquaskimmer.png":"chunks/aquaskimmer_Bd4Nsg-e.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/cover-college.jpg":"chunks/cover-college_CSVyBx0s.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/deltax.jpg":"chunks/deltax_V4zbmiiq.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/eco.jpg":"chunks/eco_C3_Uhh0n.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/content/blog/Version-Control.mdx?astroPropagatedAssets":"chunks/Version-Control_DKasADYf.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/content/blog/Making-Hugo-Site.mdx?astroPropagatedAssets":"chunks/Making-Hugo-Site_C6-AgkU_.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/content/blog/college-experience.mdx?astroPropagatedAssets":"chunks/college-experience_5GYWCcQu.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/content/blog/ai-revolution.mdx?astroPropagatedAssets":"chunks/ai-revolution_3twMw4qm.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/content/work/Routio.mdx?astroPropagatedAssets":"chunks/Routio_DdRyHbQt.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/content/blog/eco-friendly.mdx?astroPropagatedAssets":"chunks/eco-friendly_DQd8wOnn.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/content/work/aquaskimmer.mdx?astroPropagatedAssets":"chunks/aquaskimmer_BjUZLlwN.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/content/work/Yuki.mdx?astroPropagatedAssets":"chunks/Yuki_UG_hTW6v.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/content/about/about.mdx?astroPropagatedAssets":"chunks/about_Bbd1TxBW.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/content/work/delta-x.mdx?astroPropagatedAssets":"chunks/delta-x_D0eOJdhv.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/content/blog/Version-Control.mdx":"chunks/Version-Control_D_efRSje.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/content/blog/Making-Hugo-Site.mdx":"chunks/Making-Hugo-Site_r3CjQef2.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/content/blog/college-experience.mdx":"chunks/college-experience_DEWiSenA.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/content/blog/ai-revolution.mdx":"chunks/ai-revolution_D4Jd9K-d.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/content/work/Routio.mdx":"chunks/Routio_j8cifeoi.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/content/blog/eco-friendly.mdx":"chunks/eco-friendly_CPpoDxeE.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/content/work/aquaskimmer.mdx":"chunks/aquaskimmer_CXpkDUKA.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/content/work/Yuki.mdx":"chunks/Yuki_uF8Dnl5j.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/content/about/about.mdx":"chunks/about_BDSrAtR6.mjs","/Users/anirbansikdar/Projects/anirban.codes/src/content/work/delta-x.mdx":"chunks/delta-x_DHmnuw12.mjs","/Users/anirbansikdar/Projects/anirban.codes/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CUqFY3xr.js","/Users/anirbansikdar/Projects/anirban.codes/src/components/Hamburger.astro?astro&type=script&index=0&lang.ts":"_astro/Hamburger.astro_astro_type_script_index_0_lang.T7ch7jrN.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/anirbansikdar/Projects/anirban.codes/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts","var o=\"@vercel/speed-insights\",u=\"1.2.0\",f=()=>{window.si||(window.si=function(...r){(window.siq=window.siq||[]).push(r)})};function l(){return typeof window<\"u\"}function h(){try{const e=\"production\"}catch{}return\"production\"}function d(){return h()===\"development\"}function v(e,r){if(!e||!r)return e;let n=e;try{const t=Object.entries(r);for(const[s,i]of t)if(!Array.isArray(i)){const a=c(i);a.test(n)&&(n=n.replace(a,`/[${s}]`))}for(const[s,i]of t)if(Array.isArray(i)){const a=c(i.join(\"/\"));a.test(n)&&(n=n.replace(a,`/[...${s}]`))}return n}catch{return e}}function c(e){return new RegExp(`/${g(e)}(?=[/?#]|$)`)}function g(e){return e.replace(/[.*+?^${}()|[\\]\\\\]/g,\"\\\\$&\")}function m(e){return e.scriptSrc?e.scriptSrc:d()?\"https://va.vercel-scripts.com/v1/speed-insights/script.debug.js\":e.dsn?\"https://va.vercel-scripts.com/v1/speed-insights/script.js\":e.basePath?`${e.basePath}/speed-insights/script.js`:\"/_vercel/speed-insights/script.js\"}function w(e={}){var r;if(!l()||e.route===null)return null;f();const n=m(e);if(document.head.querySelector(`script[src*=\"${n}\"]`))return null;e.beforeSend&&((r=window.si)==null||r.call(window,\"beforeSend\",e.beforeSend));const t=document.createElement(\"script\");return t.src=n,t.defer=!0,t.dataset.sdkn=o+(e.framework?`/${e.framework}`:\"\"),t.dataset.sdkv=u,e.sampleRate&&(t.dataset.sampleRate=e.sampleRate.toString()),e.route&&(t.dataset.route=e.route),e.endpoint?t.dataset.endpoint=e.endpoint:e.basePath&&(t.dataset.endpoint=`${e.basePath}/speed-insights/vitals`),e.dsn&&(t.dataset.dsn=e.dsn),d()&&e.debug===!1&&(t.dataset.debug=\"false\"),t.onerror=()=>{console.log(`[Vercel Speed Insights] Failed to load script from ${n}. Please check if any content blockers are enabled and try again.`)},document.head.appendChild(t),{setRoute:s=>{t.dataset.route=s??void 0}}}function p(){try{return}catch{}}customElements.define(\"vercel-speed-insights\",class extends HTMLElement{constructor(){super();try{const r=JSON.parse(this.dataset.props??\"{}\"),n=JSON.parse(this.dataset.params??\"{}\"),t=v(this.dataset.pathname??\"\",n);w({route:t,...r,framework:\"astro\",basePath:p(),beforeSend:window.speedInsightsBeforeSend})}catch(r){throw new Error(`Failed to parse SpeedInsights properties: ${r}`)}}});"],["/Users/anirbansikdar/Projects/anirban.codes/src/components/Hamburger.astro?astro&type=script&index=0&lang.ts","function t(){const e=document.querySelector(\".nav-links\");e&&e.classList.toggle(\"hidden\"),document.body.classList.toggle(\"overflow-hidden\")}const n=document.querySelector(\".hamburger\");n&&n.addEventListener(\"pointerdown\",e=>{n.setPointerCapture(e.pointerId),t()});const o=document.querySelector(\".close-icon\");o&&o.addEventListener(\"click\",()=>{t()});"]],"assets":["/file:///Users/anirbansikdar/Projects/anirban.codes/dist/404.html","/file:///Users/anirbansikdar/Projects/anirban.codes/dist/about/index.html","/file:///Users/anirbansikdar/Projects/anirban.codes/dist/blogs/index.html","/file:///Users/anirbansikdar/Projects/anirban.codes/dist/rss.xml","/file:///Users/anirbansikdar/Projects/anirban.codes/dist/work/index.html","/file:///Users/anirbansikdar/Projects/anirban.codes/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"KzhT4teyIUqSEFfIwnVSB7cbrgN/P7g9aglD8eHTNhQ="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
