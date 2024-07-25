
export default function swDev() {
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`
  return (
    navigator.serviceWorker.register(swUrl).then((response)=>{
        console.warn(response)
    })
    .catch((e)=>{
        console.warn(e)
    })
  )
}
