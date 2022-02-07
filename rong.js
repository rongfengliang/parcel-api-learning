const { Parcel } = require('@parcel/core');

let bundler = new Parcel({
    entries: 'index.html',
    defaultTargetOptions: { distDir: "mydemoapp/rong",publicUrl:"." },
    defaultConfig: '@parcel/config-default'
});

(async function () {
    try {
        let { bundleGraph, buildTime } = await bundler.run();
        let bundles = bundleGraph.getBundles();
        console.log(`✨ Built ${bundles.length} bundles in ${buildTime}ms!`);
    } catch (err) {
        console.log(err.diagnostics);
    }
})()
