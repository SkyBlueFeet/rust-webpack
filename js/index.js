import("../pkg/index.js").then((pkg)=>{
    console.log(pkg)
    const flalt32=new Float32Array(100)

    flalt32.fill(10)
    pkg.transfer_to_wasm(flalt32,100)
}).catch(console.error);
