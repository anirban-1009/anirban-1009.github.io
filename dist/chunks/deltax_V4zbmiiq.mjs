const deltax = new Proxy({"src":"/_astro/deltax.Bo9ogi_d.jpg","width":900,"height":366,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/deltax.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/deltax.jpg");
							return target[name];
						}
					});

export { deltax as default };
