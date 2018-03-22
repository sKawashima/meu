function meu(str){
  const lines = str.split('\n')
  if (lines.length === 1) {
    if (str != '') return str + 'めう'
  }else{
    return lines.reduce((cur, prev, i) => {
      if(prev === '') return cur
      if(i === 1) {
        if (prev === '') return cur + 'めう\n'
        return cur + 'めう\n' + prev + 'めう\n'
      }
      else{
        return cur + prev + 'めう\n'
      }
    })
  }
}
module.exports = meu
