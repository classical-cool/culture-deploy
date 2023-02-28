(self.webpackChunk=self.webpackChunk||[]).push([[7231],{19394:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(17187);function o(e,t,r){try{Reflect.apply(e,t,r)}catch(e){setTimeout((()=>{throw e}))}}class i extends n.EventEmitter{emit(e,...t){let r="error"===e;const n=this._events;if(void 0!==n)r=r&&void 0===n.error;else if(!r)return!1;if(r){let e;if(t.length>0&&([e]=t),e instanceof Error)throw e;const r=new Error("Unhandled error."+(e?` (${e.message})`:""));throw r.context=e,r}const i=n[e];if(void 0===i)return!1;if("function"==typeof i)o(i,this,t);else{const e=i.length,r=function(e){const t=e.length,r=new Array(t);for(let n=0;n<t;n+=1)r[n]=e[n];return r}(i);for(let n=0;n<e;n+=1)o(r[n],this,t)}return!0}}t.default=i},85078:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(64778),o=r(2403),i=function(){function e(){this._semaphore=new o.default(1)}return e.prototype.acquire=function(){return n.__awaiter(this,void 0,void 0,(function(){var e;return n.__generator(this,(function(t){switch(t.label){case 0:return[4,this._semaphore.acquire()];case 1:return e=t.sent(),[2,e[1]]}}))}))},e.prototype.runExclusive=function(e){return this._semaphore.runExclusive((function(){return e()}))},e.prototype.isLocked=function(){return this._semaphore.isLocked()},e.prototype.release=function(){this._semaphore.release()},e}();t.default=i},2403:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(64778),o=function(){function e(e){if(this._maxConcurrency=e,this._queue=[],e<=0)throw new Error("semaphore must be initialized to a positive value");this._value=e}return e.prototype.acquire=function(){var e=this,t=this.isLocked(),r=new Promise((function(t){return e._queue.push(t)}));return t||this._dispatch(),r},e.prototype.runExclusive=function(e){return n.__awaiter(this,void 0,void 0,(function(){var t,r,o;return n.__generator(this,(function(n){switch(n.label){case 0:return[4,this.acquire()];case 1:t=n.sent(),r=t[0],o=t[1],n.label=2;case 2:return n.trys.push([2,,4,5]),[4,e(r)];case 3:return[2,n.sent()];case 4:return o(),[7];case 5:return[2]}}))}))},e.prototype.isLocked=function(){return this._value<=0},e.prototype.release=function(){if(this._maxConcurrency>1)throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");if(this._currentReleaser){var e=this._currentReleaser;this._currentReleaser=void 0,e()}},e.prototype._dispatch=function(){var e=this,t=this._queue.shift();if(t){var r=!1;this._currentReleaser=function(){r||(r=!0,e._value++,e._dispatch())},t([this._value--,this._currentReleaser])}},e}();t.default=o},48125:function(e,t,r){"use strict";t.WU=void 0;var n=r(85078);Object.defineProperty(t,"WU",{enumerable:!0,get:function(){return n.default}});var o=r(2403);var i=r(66810)},66810:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withTimeout=void 0;var n=r(64778);t.withTimeout=function(e,t,r){var o=this;return void 0===r&&(r=new Error("timeout")),{acquire:function(){return new Promise((function(i,s){return n.__awaiter(o,void 0,void 0,(function(){var o,a;return n.__generator(this,(function(n){switch(n.label){case 0:return o=!1,setTimeout((function(){o=!0,s(r)}),t),[4,e.acquire()];case 1:return a=n.sent(),o?(Array.isArray(a)?a[1]:a)():i(a),[2]}}))}))}))},runExclusive:function(e){return n.__awaiter(this,void 0,void 0,(function(){var t,r;return n.__generator(this,(function(n){switch(n.label){case 0:t=function(){},n.label=1;case 1:return n.trys.push([1,,7,8]),[4,this.acquire()];case 2:return r=n.sent(),Array.isArray(r)?(t=r[1],[4,e(r[0])]):[3,4];case 3:return[2,n.sent()];case 4:return t=r,[4,e()];case 5:return[2,n.sent()];case 6:return[3,8];case 7:return t(),[7];case 8:return[2]}}))}))},release:function(){e.release()},isLocked:function(){return e.isLocked()}}}},64778:function(e,t,r){"use strict";r.r(t),r.d(t,{__assign:function(){return i},__asyncDelegator:function(){return w},__asyncGenerator:function(){return b},__asyncValues:function(){return E},__await:function(){return g},__awaiter:function(){return l},__classPrivateFieldGet:function(){return j},__classPrivateFieldIn:function(){return B},__classPrivateFieldSet:function(){return C},__createBinding:function(){return f},__decorate:function(){return a},__exportStar:function(){return p},__extends:function(){return o},__generator:function(){return d},__importDefault:function(){return O},__importStar:function(){return P},__makeTemplateObject:function(){return R},__metadata:function(){return u},__param:function(){return c},__read:function(){return y},__rest:function(){return s},__spread:function(){return m},__spreadArray:function(){return v},__spreadArrays:function(){return _},__values:function(){return h}});var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function s(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function a(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s}function c(e,t){return function(r,n){t(r,n,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))}function d(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var f=Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function p(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||f(t,e,r)}function h(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s}function m(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(y(arguments[t]));return e}function _(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,o++)n[o]=i[s];return n}function v(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function g(e){return this instanceof g?(this.v=e,this):new g(e)}function b(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},s("next"),s("throw"),s("return"),n[Symbol.asyncIterator]=function(){return this},n;function s(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||a(e,t)}))})}function a(e,t){try{(r=o[e](t)).value instanceof g?Promise.resolve(r.value.v).then(c,u):l(i[0][2],r)}catch(e){l(i[0][3],e)}var r}function c(e){a("next",e)}function u(e){a("throw",e)}function l(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}function w(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:g(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function E(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=h(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function R(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var k=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function P(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&f(t,e,r);return k(t,e),t}function O(e){return e&&e.__esModule?e:{default:e}}function j(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function C(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}function B(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}},55850:function(e,t,r){r(75682),r(12352);const n=r(37253),o=(e,t)=>e+t,i=["sync","latest"];function s(e){return Number.parseInt(e,16)}e.exports=class extends n{constructor(e={}){super(),this._blockResetDuration=e.blockResetDuration||2e4,this._blockResetTimeout,this._currentBlock=null,this._isRunning=!1,this._onNewListener=this._onNewListener.bind(this),this._onRemoveListener=this._onRemoveListener.bind(this),this._resetCurrentBlock=this._resetCurrentBlock.bind(this),this._setupInternalEvents()}isRunning(){return this._isRunning}getCurrentBlock(){return this._currentBlock}async getLatestBlock(){if(this._currentBlock)return this._currentBlock;return await new Promise((e=>this.once("latest",e)))}removeAllListeners(e){e?super.removeAllListeners(e):super.removeAllListeners(),this._setupInternalEvents(),this._onRemoveListener()}_start(){}_end(){}_setupInternalEvents(){this.removeListener("newListener",this._onNewListener),this.removeListener("removeListener",this._onRemoveListener),this.on("newListener",this._onNewListener),this.on("removeListener",this._onRemoveListener)}_onNewListener(e,t){i.includes(e)&&this._maybeStart()}_onRemoveListener(e,t){this._getBlockTrackerEventCount()>0||this._maybeEnd()}_maybeStart(){this._isRunning||(this._isRunning=!0,this._cancelBlockResetTimeout(),this._start())}_maybeEnd(){this._isRunning&&(this._isRunning=!1,this._setupBlockResetTimeout(),this._end())}_getBlockTrackerEventCount(){return i.map((e=>this.listenerCount(e))).reduce(o)}_newPotentialLatest(e){const t=this._currentBlock;t&&s(e)<=s(t)||this._setCurrentBlock(e)}_setCurrentBlock(e){const t=this._currentBlock;this._currentBlock=e,this.emit("latest",e),this.emit("sync",{oldBlock:t,newBlock:e})}_setupBlockResetTimeout(){this._cancelBlockResetTimeout(),this._blockResetTimeout=setTimeout(this._resetCurrentBlock,this._blockResetDuration),this._blockResetTimeout.unref&&this._blockResetTimeout.unref()}_cancelBlockResetTimeout(){clearTimeout(this._blockResetTimeout)}_resetCurrentBlock(){this._currentBlock=null}}},75012:function(e,t,r){const n=r(12352),o=r(55850);function i(e,t){return new Promise((r=>{const n=setTimeout(r,e);n.unref&&t&&n.unref()}))}e.exports=class extends o{constructor(e={}){if(!e.provider)throw new Error("PollingBlockTracker - no provider specified.");const t=e.pollingInterval||2e4,r=e.retryTimeout||t/10,n=void 0===e.keepEventLoopActive||e.keepEventLoopActive,o=e.setSkipCacheFlag||!1;super(Object.assign({blockResetDuration:t},e)),this._provider=e.provider,this._pollingInterval=t,this._retryTimeout=r,this._keepEventLoopActive=n,this._setSkipCacheFlag=o}async checkForLatestBlock(){return await this._updateLatestBlock(),await this.getLatestBlock()}_start(){this._performSync().catch((e=>this.emit("error",e)))}async _performSync(){for(;this._isRunning;)try{await this._updateLatestBlock(),await i(this._pollingInterval,!this._keepEventLoopActive)}catch(e){const t=new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:\n${e.stack}`);try{this.emit("error",t)}catch(e){console.error(t)}await i(this._retryTimeout,!this._keepEventLoopActive)}}async _updateLatestBlock(){const e=await this._fetchLatestBlock();this._newPotentialLatest(e)}async _fetchLatestBlock(){const e={jsonrpc:"2.0",id:1,method:"eth_blockNumber",params:[]};this._setSkipCacheFlag&&(e.skipCache=!0);const t=await n((t=>this._provider.sendAsync(e,t)))();if(t.error)throw new Error(`PollingBlockTracker - encountered error fetching block:\n${t.error}`);return t.result}}},75682:function(e,t,r){const n=r(47529),o=r(23420)();function i(e){this.currentProvider=e}function s(e){return function(){const t=this;var r=[].slice.call(arguments),n=r.pop();t.sendAsync({method:e,params:r},n)}}function a(e,t){return function(){const r=this;var n=[].slice.call(arguments),o=n.pop();n.length<e&&n.push("latest"),r.sendAsync({method:t,params:n},o)}}e.exports=i,i.prototype.getBalance=a(2,"eth_getBalance"),i.prototype.getCode=a(2,"eth_getCode"),i.prototype.getTransactionCount=a(2,"eth_getTransactionCount"),i.prototype.getStorageAt=a(3,"eth_getStorageAt"),i.prototype.call=a(2,"eth_call"),i.prototype.protocolVersion=s("eth_protocolVersion"),i.prototype.syncing=s("eth_syncing"),i.prototype.coinbase=s("eth_coinbase"),i.prototype.mining=s("eth_mining"),i.prototype.hashrate=s("eth_hashrate"),i.prototype.gasPrice=s("eth_gasPrice"),i.prototype.accounts=s("eth_accounts"),i.prototype.blockNumber=s("eth_blockNumber"),i.prototype.getBlockTransactionCountByHash=s("eth_getBlockTransactionCountByHash"),i.prototype.getBlockTransactionCountByNumber=s("eth_getBlockTransactionCountByNumber"),i.prototype.getUncleCountByBlockHash=s("eth_getUncleCountByBlockHash"),i.prototype.getUncleCountByBlockNumber=s("eth_getUncleCountByBlockNumber"),i.prototype.sign=s("eth_sign"),i.prototype.sendTransaction=s("eth_sendTransaction"),i.prototype.sendRawTransaction=s("eth_sendRawTransaction"),i.prototype.estimateGas=s("eth_estimateGas"),i.prototype.getBlockByHash=s("eth_getBlockByHash"),i.prototype.getBlockByNumber=s("eth_getBlockByNumber"),i.prototype.getTransactionByHash=s("eth_getTransactionByHash"),i.prototype.getTransactionByBlockHashAndIndex=s("eth_getTransactionByBlockHashAndIndex"),i.prototype.getTransactionByBlockNumberAndIndex=s("eth_getTransactionByBlockNumberAndIndex"),i.prototype.getTransactionReceipt=s("eth_getTransactionReceipt"),i.prototype.getUncleByBlockHashAndIndex=s("eth_getUncleByBlockHashAndIndex"),i.prototype.getUncleByBlockNumberAndIndex=s("eth_getUncleByBlockNumberAndIndex"),i.prototype.getCompilers=s("eth_getCompilers"),i.prototype.compileLLL=s("eth_compileLLL"),i.prototype.compileSolidity=s("eth_compileSolidity"),i.prototype.compileSerpent=s("eth_compileSerpent"),i.prototype.newFilter=s("eth_newFilter"),i.prototype.newBlockFilter=s("eth_newBlockFilter"),i.prototype.newPendingTransactionFilter=s("eth_newPendingTransactionFilter"),i.prototype.uninstallFilter=s("eth_uninstallFilter"),i.prototype.getFilterChanges=s("eth_getFilterChanges"),i.prototype.getFilterLogs=s("eth_getFilterLogs"),i.prototype.getLogs=s("eth_getLogs"),i.prototype.getWork=s("eth_getWork"),i.prototype.submitWork=s("eth_submitWork"),i.prototype.submitHashrate=s("eth_submitHashrate"),i.prototype.sendAsync=function(e,t){var r;this.currentProvider.sendAsync((r=e,n({id:o(),jsonrpc:"2.0",params:[]},r)),(function(e,r){if(!e&&r.error&&(e=new Error("EthQuery - RPC Error - "+r.error.message)),e)return t(e);t(null,r.result)}))}},4445:function(e){e.exports=s,s.default=s,s.stable=l,s.stableStringify=l;var t="[...]",r="[Circular]",n=[],o=[];function i(){return{depthLimit:Number.MAX_SAFE_INTEGER,edgesLimit:Number.MAX_SAFE_INTEGER}}function s(e,t,r,s){var a;void 0===s&&(s=i()),c(e,"",0,[],void 0,0,s);try{a=0===o.length?JSON.stringify(e,t,r):JSON.stringify(e,f(t),r)}catch(e){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;0!==n.length;){var u=n.pop();4===u.length?Object.defineProperty(u[0],u[1],u[3]):u[0][u[1]]=u[2]}}return a}function a(e,t,r,i){var s=Object.getOwnPropertyDescriptor(i,r);void 0!==s.get?s.configurable?(Object.defineProperty(i,r,{value:e}),n.push([i,r,t,s])):o.push([t,r,e]):(i[r]=e,n.push([i,r,t]))}function c(e,n,o,i,s,u,l){var d;if(u+=1,"object"==typeof e&&null!==e){for(d=0;d<i.length;d++)if(i[d]===e)return void a(r,e,n,s);if(void 0!==l.depthLimit&&u>l.depthLimit)return void a(t,e,n,s);if(void 0!==l.edgesLimit&&o+1>l.edgesLimit)return void a(t,e,n,s);if(i.push(e),Array.isArray(e))for(d=0;d<e.length;d++)c(e[d],d,d,i,e,u,l);else{var f=Object.keys(e);for(d=0;d<f.length;d++){var p=f[d];c(e[p],p,d,i,e,u,l)}}i.pop()}}function u(e,t){return e<t?-1:e>t?1:0}function l(e,t,r,s){void 0===s&&(s=i());var a,c=d(e,"",0,[],void 0,0,s)||e;try{a=0===o.length?JSON.stringify(c,t,r):JSON.stringify(c,f(t),r)}catch(e){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;0!==n.length;){var u=n.pop();4===u.length?Object.defineProperty(u[0],u[1],u[3]):u[0][u[1]]=u[2]}}return a}function d(e,o,i,s,c,l,f){var p;if(l+=1,"object"==typeof e&&null!==e){for(p=0;p<s.length;p++)if(s[p]===e)return void a(r,e,o,c);try{if("function"==typeof e.toJSON)return}catch(e){return}if(void 0!==f.depthLimit&&l>f.depthLimit)return void a(t,e,o,c);if(void 0!==f.edgesLimit&&i+1>f.edgesLimit)return void a(t,e,o,c);if(s.push(e),Array.isArray(e))for(p=0;p<e.length;p++)d(e[p],p,p,s,e,l,f);else{var h={},y=Object.keys(e).sort(u);for(p=0;p<y.length;p++){var m=y[p];d(e[m],m,p,s,e,l,f),h[m]=e[m]}if(void 0===c)return h;n.push([c,o,e]),c[o]=h}s.pop()}}function f(e){return e=void 0!==e?e:function(e,t){return t},function(t,r){if(o.length>0)for(var n=0;n<o.length;n++){var i=o[n];if(i[1]===t&&i[0]===r){r=i[2],o.splice(n,1);break}}return e.call(this,t,r)}}},17398:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.JsonRpcEngine=void 0;const o=n(r(19394)),i=r(22374);class s extends o.default{constructor(){super(),this._middleware=[]}push(e){this._middleware.push(e)}handle(e,t){if(t&&"function"!=typeof t)throw new Error('"callback" must be a function if provided.');return Array.isArray(e)?t?this._handleBatch(e,t):this._handleBatch(e):t?this._handle(e,t):this._promiseHandle(e)}asMiddleware(){return async(e,t,r,n)=>{try{const[o,i,a]=await s._runAllMiddleware(e,t,this._middleware);return i?(await s._runReturnHandlers(a),n(o)):r((async e=>{try{await s._runReturnHandlers(a)}catch(t){return e(t)}return e()}))}catch(e){return n(e)}}}async _handleBatch(e,t){try{const r=await Promise.all(e.map(this._promiseHandle.bind(this)));return t?t(null,r):r}catch(e){if(t)return t(e);throw e}}_promiseHandle(e){return new Promise((t=>{this._handle(e,((e,r)=>{t(r)}))}))}async _handle(e,t){if(!e||Array.isArray(e)||"object"!=typeof e){const r=new i.EthereumRpcError(i.errorCodes.rpc.invalidRequest,"Requests must be plain objects. Received: "+typeof e,{request:e});return t(r,{id:void 0,jsonrpc:"2.0",error:r})}if("string"!=typeof e.method){const r=new i.EthereumRpcError(i.errorCodes.rpc.invalidRequest,"Must specify a string method. Received: "+typeof e.method,{request:e});return t(r,{id:e.id,jsonrpc:"2.0",error:r})}const r=Object.assign({},e),n={id:r.id,jsonrpc:r.jsonrpc};let o=null;try{await this._processRequest(r,n)}catch(e){o=e}return o&&(delete n.result,n.error||(n.error=i.serializeError(o))),t(o,n)}async _processRequest(e,t){const[r,n,o]=await s._runAllMiddleware(e,t,this._middleware);if(s._checkForCompletion(e,t,n),await s._runReturnHandlers(o),r)throw r}static async _runAllMiddleware(e,t,r){const n=[];let o=null,i=!1;for(const a of r)if([o,i]=await s._runMiddleware(e,t,a,n),i)break;return[o,i,n.reverse()]}static _runMiddleware(e,t,r,n){return new Promise((o=>{const s=e=>{const r=e||t.error;r&&(t.error=i.serializeError(r)),o([r,!0])},c=r=>{t.error?s(t.error):(r&&("function"!=typeof r&&s(new i.EthereumRpcError(i.errorCodes.rpc.internal,`JsonRpcEngine: "next" return handlers must be functions. Received "${typeof r}" for request:\n${a(e)}`,{request:e})),n.push(r)),o([null,!1]))};try{r(e,t,c,s)}catch(e){s(e)}}))}static async _runReturnHandlers(e){for(const t of e)await new Promise(((e,r)=>{t((t=>t?r(t):e()))}))}static _checkForCompletion(e,t,r){if(!("result"in t)&&!("error"in t))throw new i.EthereumRpcError(i.errorCodes.rpc.internal,`JsonRpcEngine: Response has no error or result for request:\n${a(e)}`,{request:e});if(!r)throw new i.EthereumRpcError(i.errorCodes.rpc.internal,`JsonRpcEngine: Nothing ended request:\n${a(e)}`,{request:e})}}function a(e){return JSON.stringify(e,null,2)}t.JsonRpcEngine=s},31841:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAsyncMiddleware=void 0,t.createAsyncMiddleware=function(e){return async(t,r,n,o)=>{let i;const s=new Promise((e=>{i=e}));let a=null,c=!1;const u=async()=>{c=!0,n((e=>{a=e,i()})),await s};try{await e(t,r,u),c?(await s,a(null)):o(null)}catch(e){a?a(e):o(e)}}}},48508:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createScaffoldMiddleware=void 0,t.createScaffoldMiddleware=function(e){return(t,r,n,o)=>{const i=e[t.method];return void 0===i?n():"function"==typeof i?i(t,r,n,o):(r.result=i,o())}}},33107:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getUniqueId=void 0;const r=4294967295;let n=Math.floor(Math.random()*r);t.getUniqueId=function(){return n=(n+1)%r,n}},85086:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createIdRemapMiddleware=void 0;const n=r(33107);t.createIdRemapMiddleware=function(){return(e,t,r,o)=>{const i=e.id,s=n.getUniqueId();e.id=s,t.id=s,r((r=>{e.id=i,t.id=i,r()}))}}},88625:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(85086),t),o(r(31841),t),o(r(48508),t),o(r(33107),t),o(r(17398),t),o(r(79962),t)},79962:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mergeMiddleware=void 0;const n=r(17398);t.mergeMiddleware=function(e){const t=new n.JsonRpcEngine;return e.forEach((e=>t.push(e))),t.asMiddleware()}},60010:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EthereumProviderError=t.EthereumRpcError=void 0;const n=r(4445);class o extends Error{constructor(e,t,r){if(!Number.isInteger(e))throw new Error('"code" must be an integer.');if(!t||"string"!=typeof t)throw new Error('"message" must be a nonempty string.');super(t),this.code=e,void 0!==r&&(this.data=r)}serialize(){const e={code:this.code,message:this.message};return void 0!==this.data&&(e.data=this.data),this.stack&&(e.stack=this.stack),e}toString(){return n.default(this.serialize(),i,2)}}t.EthereumRpcError=o;function i(e,t){if("[Circular]"!==t)return t}t.EthereumProviderError=class extends o{constructor(e,t,r){if(!function(e){return Number.isInteger(e)&&e>=1e3&&e<=4999}(e))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,t,r)}}},22608:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.errorValues=t.errorCodes=void 0,t.errorCodes={rpc:{invalidInput:-32e3,resourceNotFound:-32001,resourceUnavailable:-32002,transactionRejected:-32003,methodNotSupported:-32004,limitExceeded:-32005,parse:-32700,invalidRequest:-32600,methodNotFound:-32601,invalidParams:-32602,internal:-32603},provider:{userRejectedRequest:4001,unauthorized:4100,unsupportedMethod:4200,disconnected:4900,chainDisconnected:4901}},t.errorValues={"-32700":{standard:"JSON RPC 2.0",message:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{standard:"JSON RPC 2.0",message:"The JSON sent is not a valid Request object."},"-32601":{standard:"JSON RPC 2.0",message:"The method does not exist / is not available."},"-32602":{standard:"JSON RPC 2.0",message:"Invalid method parameter(s)."},"-32603":{standard:"JSON RPC 2.0",message:"Internal JSON-RPC error."},"-32000":{standard:"EIP-1474",message:"Invalid input."},"-32001":{standard:"EIP-1474",message:"Resource not found."},"-32002":{standard:"EIP-1474",message:"Resource unavailable."},"-32003":{standard:"EIP-1474",message:"Transaction rejected."},"-32004":{standard:"EIP-1474",message:"Method not supported."},"-32005":{standard:"EIP-1474",message:"Request limit exceeded."},4001:{standard:"EIP-1193",message:"User rejected the request."},4100:{standard:"EIP-1193",message:"The requested account and/or method has not been authorized by the user."},4200:{standard:"EIP-1193",message:"The requested method is not supported by this Ethereum provider."},4900:{standard:"EIP-1193",message:"The provider is disconnected from all chains."},4901:{standard:"EIP-1193",message:"The provider is disconnected from the specified chain."}}},76152:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ethErrors=void 0;const n=r(60010),o=r(5548),i=r(22608);function s(e,t){const[r,i]=c(t);return new n.EthereumRpcError(e,r||o.getMessageFromCode(e),i)}function a(e,t){const[r,i]=c(t);return new n.EthereumProviderError(e,r||o.getMessageFromCode(e),i)}function c(e){if(e){if("string"==typeof e)return[e];if("object"==typeof e&&!Array.isArray(e)){const{message:t,data:r}=e;if(t&&"string"!=typeof t)throw new Error("Must specify string message.");return[t||void 0,r]}}return[]}t.ethErrors={rpc:{parse:e=>s(i.errorCodes.rpc.parse,e),invalidRequest:e=>s(i.errorCodes.rpc.invalidRequest,e),invalidParams:e=>s(i.errorCodes.rpc.invalidParams,e),methodNotFound:e=>s(i.errorCodes.rpc.methodNotFound,e),internal:e=>s(i.errorCodes.rpc.internal,e),server:e=>{if(!e||"object"!=typeof e||Array.isArray(e))throw new Error("Ethereum RPC Server errors must provide single object argument.");const{code:t}=e;if(!Number.isInteger(t)||t>-32005||t<-32099)throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');return s(t,e)},invalidInput:e=>s(i.errorCodes.rpc.invalidInput,e),resourceNotFound:e=>s(i.errorCodes.rpc.resourceNotFound,e),resourceUnavailable:e=>s(i.errorCodes.rpc.resourceUnavailable,e),transactionRejected:e=>s(i.errorCodes.rpc.transactionRejected,e),methodNotSupported:e=>s(i.errorCodes.rpc.methodNotSupported,e),limitExceeded:e=>s(i.errorCodes.rpc.limitExceeded,e)},provider:{userRejectedRequest:e=>a(i.errorCodes.provider.userRejectedRequest,e),unauthorized:e=>a(i.errorCodes.provider.unauthorized,e),unsupportedMethod:e=>a(i.errorCodes.provider.unsupportedMethod,e),disconnected:e=>a(i.errorCodes.provider.disconnected,e),chainDisconnected:e=>a(i.errorCodes.provider.chainDisconnected,e),custom:e=>{if(!e||"object"!=typeof e||Array.isArray(e))throw new Error("Ethereum Provider custom errors must provide single object argument.");const{code:t,message:r,data:o}=e;if(!r||"string"!=typeof r)throw new Error('"message" must be a nonempty string');return new n.EthereumProviderError(t,r,o)}}}},22374:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getMessageFromCode=t.serializeError=t.EthereumProviderError=t.EthereumRpcError=t.ethErrors=t.errorCodes=void 0;const n=r(60010);Object.defineProperty(t,"EthereumRpcError",{enumerable:!0,get:function(){return n.EthereumRpcError}}),Object.defineProperty(t,"EthereumProviderError",{enumerable:!0,get:function(){return n.EthereumProviderError}});const o=r(5548);Object.defineProperty(t,"serializeError",{enumerable:!0,get:function(){return o.serializeError}}),Object.defineProperty(t,"getMessageFromCode",{enumerable:!0,get:function(){return o.getMessageFromCode}});const i=r(76152);Object.defineProperty(t,"ethErrors",{enumerable:!0,get:function(){return i.ethErrors}});const s=r(22608);Object.defineProperty(t,"errorCodes",{enumerable:!0,get:function(){return s.errorCodes}})},5548:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.serializeError=t.isValidCode=t.getMessageFromCode=t.JSON_RPC_SERVER_ERROR_MESSAGE=void 0;const n=r(22608),o=r(60010),i=n.errorCodes.rpc.internal,s={code:i,message:a(i)};function a(e,r="Unspecified error message. This is a bug, please report it."){if(Number.isInteger(e)){const r=e.toString();if(d(n.errorValues,r))return n.errorValues[r].message;if(u(e))return t.JSON_RPC_SERVER_ERROR_MESSAGE}return r}function c(e){if(!Number.isInteger(e))return!1;const t=e.toString();return!!n.errorValues[t]||!!u(e)}function u(e){return e>=-32099&&e<=-32e3}function l(e){return e&&"object"==typeof e&&!Array.isArray(e)?Object.assign({},e):e}function d(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.JSON_RPC_SERVER_ERROR_MESSAGE="Unspecified server error.",t.getMessageFromCode=a,t.isValidCode=c,t.serializeError=function(e,{fallbackError:t=s,shouldIncludeStack:r=!1}={}){var n,i;if(!t||!Number.isInteger(t.code)||"string"!=typeof t.message)throw new Error("Must provide fallback error with integer number code and string message.");if(e instanceof o.EthereumRpcError)return e.serialize();const u={};if(e&&"object"==typeof e&&!Array.isArray(e)&&d(e,"code")&&c(e.code)){const t=e;u.code=t.code,t.message&&"string"==typeof t.message?(u.message=t.message,d(t,"data")&&(u.data=t.data)):(u.message=a(u.code),u.data={originalError:l(e)})}else{u.code=t.code;const r=null===(n=e)||void 0===n?void 0:n.message;u.message=r&&"string"==typeof r?r:t.message,u.data={originalError:l(e)}}const f=null===(i=e)||void 0===i?void 0:i.stack;return r&&e&&f&&"string"==typeof f&&(u.stack=f),u}},23420:function(e){e.exports=function(e){var t=(e=e||{}).max||Number.MAX_SAFE_INTEGER,r=void 0!==e.start?e.start:Math.floor(Math.random()*t);return function(){return r%=t,r++}}},12352:function(e){"use strict";const t=(e,t)=>function(){const r=t.promiseModule,n=new Array(arguments.length);for(let e=0;e<arguments.length;e++)n[e]=arguments[e];return new r(((r,o)=>{t.errorFirst?n.push((function(e,n){if(t.multiArgs){const t=new Array(arguments.length-1);for(let e=1;e<arguments.length;e++)t[e-1]=arguments[e];e?(t.unshift(e),o(t)):r(t)}else e?o(e):r(n)})):n.push((function(e){if(t.multiArgs){const e=new Array(arguments.length-1);for(let t=0;t<arguments.length;t++)e[t]=arguments[t];r(e)}else r(e)})),e.apply(this,n)}))};e.exports=(e,r)=>{r=Object.assign({exclude:[/.+(Sync|Stream)$/],errorFirst:!0,promiseModule:Promise},r);const n=e=>{const t=t=>"string"==typeof t?e===t:t.test(e);return r.include?r.include.some(t):!r.exclude.some(t)};let o;o="function"==typeof e?function(){return r.excludeMain?e.apply(this,arguments):t(e,r).apply(this,arguments)}:Object.create(Object.getPrototypeOf(e));for(const i in e){const s=e[i];o[i]="function"==typeof s&&n(i)?t(s,r):s}return o}},37253:function(e,t,r){const n=r(89539),o=r(17187);var i="object"==typeof Reflect?Reflect:null,s=i&&"function"==typeof i.apply?i.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};function a(){o.call(this)}function c(e,t,r){try{s(e,t,r)}catch(e){setTimeout((()=>{throw e}))}}function u(e,t){for(var r=new Array(t),n=0;n<t;++n)r[n]=e[n];return r}e.exports=a,n.inherits(a,o),a.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var n="error"===e,o=this._events;if(void 0!==o)n=n&&void 0===o.error;else if(!n)return!1;if(n){var i;if(t.length>0&&(i=t[0]),i instanceof Error)throw i;var s=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw s.context=i,s}var a=o[e];if(void 0===a)return!1;if("function"==typeof a)c(a,this,t);else{var l=a.length,d=u(a,l);for(r=0;r<l;++r)c(d[r],this,t)}return!0}},47529:function(e){e.exports=function(){for(var e={},r=0;r<arguments.length;r++){var n=arguments[r];for(var o in n)t.call(n,o)&&(e[o]=n[o])}return e};var t=Object.prototype.hasOwnProperty}}]);