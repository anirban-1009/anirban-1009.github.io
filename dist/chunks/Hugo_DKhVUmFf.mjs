const Hugo = new Proxy({"src":"/_astro/Hugo.CaI-P3ia.png","width":956,"height":261,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/Hugo.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/Hugo.png");
							return target[name];
						}
					});

export { Hugo as default };
