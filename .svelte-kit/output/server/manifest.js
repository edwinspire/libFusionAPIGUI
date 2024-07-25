export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.B2SWDyoB.js","app":"_app/immutable/entry/app.BfQ9iAUt.js","imports":["_app/immutable/entry/start.B2SWDyoB.js","_app/immutable/chunks/entry.BA7kGO1f.js","_app/immutable/chunks/scheduler.CIA8Xbvb.js","_app/immutable/chunks/index.BYTTJY-C.js","_app/immutable/entry/app.BfQ9iAUt.js","_app/immutable/chunks/scheduler.CIA8Xbvb.js","_app/immutable/chunks/index.C07emJmb.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
