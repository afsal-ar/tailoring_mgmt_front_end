export function daysBetween(a:string,b:string){
  const d1 = new Date(a);
  const d2 = new Date(b);
  const diff = Math.ceil((d2.getTime()-d1.getTime())/(1000*60*60*24));
  return diff;
}
