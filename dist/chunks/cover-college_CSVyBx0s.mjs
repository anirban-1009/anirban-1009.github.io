const coverCollege = new Proxy({"src":"/_astro/cover-college.Ccc7No5N.jpg","width":800,"height":450,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/cover-college.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/anirbansikdar/Projects/anirban.codes/src/images/cover/cover-college.jpg");
							return target[name];
						}
					});

export { coverCollege as default };
