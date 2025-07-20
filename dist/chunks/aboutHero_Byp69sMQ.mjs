const aboutHero = new Proxy({"src":"/_astro/aboutHero.Do7ImDEE.jpg","width":1836,"height":1836,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anirbansikdar/Projects/anirban.codes/src/images/aboutHero.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/anirbansikdar/Projects/anirban.codes/src/images/aboutHero.jpg");
							return target[name];
						}
					});

export { aboutHero as default };
