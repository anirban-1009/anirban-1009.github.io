const RPi = new Proxy({"src":"/_astro/RPi.DivnYGkK.jpg","width":1360,"height":595,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/RPi.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/RPi.jpg");
							return target[name];
						}
					});

export { RPi as default };
