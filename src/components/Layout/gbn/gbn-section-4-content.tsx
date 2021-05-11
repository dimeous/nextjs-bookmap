 const text =(params?:string) =>{return {
  h1: 'Get started in three simple steps',
  s1: {
    lbl: 'Get Bookmap Digital+',
    txt: 'Register, install and connect Bookmap to a compatible '
        + (params==='getbookmapnow'?'digital assets':'crypto') +' exchange',
  },
  s2: {
    lbl: 'Get Multibook',
    txt: 'Explore the benefit of multiple instruments within one chart',
  },
  s3: {
    lbl: 'Make informed decisions',
    txt: 'Analyze markets in a new way. Clearly see market liquidity and hidden patterns' +(params==='getbookmapnow'?'':' in trading.')

  },
}}
 export default text
