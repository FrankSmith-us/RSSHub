// proxy-fetch.js
import { bootstrap } from 'global-agent';
bootstrap();

// 手动覆盖 global.fetch（由 undici 提供）
// 将所有 undici 导入合并到一行
import { fetch, setGlobalDispatcher, ProxyAgent } from 'undici';

setGlobalDispatcher(
    new ProxyAgent('http://172.17.0.1:7890') // 与你的 Docker 宿主机代理一致
);

global.fetch = fetch;
