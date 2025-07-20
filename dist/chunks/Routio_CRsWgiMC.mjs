const Routio = new Proxy({"src":"/_astro/Routio.NhObYnyR.png","width":1360,"height":595,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/Routio.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/Routio.png");
							return target[name];
						}
					});

export { Routio as default };
