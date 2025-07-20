const aquaskimmer = new Proxy({"src":"/_astro/aquaskimmer.Cyak8t-N.png","width":617,"height":242,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/aquaskimmer.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/aquaskimmer.png");
							return target[name];
						}
					});

export { aquaskimmer as default };
