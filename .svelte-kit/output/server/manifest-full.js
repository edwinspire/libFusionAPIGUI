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
		client: {"start":"_app/immutable/entry/start.BJtx8805.js","app":"_app/immutable/entry/app.81aeRE8V.js","imports":["_app/immutable/entry/start.BJtx8805.js","_app/immutable/chunks/entry.Sczlh0rd.js","_app/immutable/chunks/scheduler.DlgdoLeO.js","_app/immutable/entry/app.81aeRE8V.js","_app/immutable/chunks/scheduler.DlgdoLeO.js","_app/immutable/chunks/index.DPSTnP1S.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
