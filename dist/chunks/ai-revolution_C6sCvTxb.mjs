const aiRevolution = new Proxy({"src":"/_astro/ai-revolution.C11k6MiA.jpeg","width":735,"height":386,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/ai-revolution.jpeg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/ai-revolution.jpeg");
							return target[name];
						}
					});

export { aiRevolution as default };
