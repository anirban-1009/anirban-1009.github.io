const GitHub_Logo = new Proxy({"src":"/_astro/GitHub_Logo.DFXTcOhG.png","width":780,"height":320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/GitHub_Logo.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/GitHub_Logo.png");
							return target[name];
						}
					});

export { GitHub_Logo as default };
