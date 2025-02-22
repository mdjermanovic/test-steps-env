const releaseOutputs = JSON.parse(process.env.STEPS_RELEASE_OUTPUTS);

function getReleaseOutput(packageDir, name) {
	return releaseOutputs[`${packageDir}--${name}`];
}

console.log(getReleaseOutput("packages/config-array", "release_created"));
