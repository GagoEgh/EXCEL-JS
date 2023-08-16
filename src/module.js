console.log('module')

async function as(){
  return await Promise.resolve('as')
}

as().then((result)=>{console.log('then',result)})