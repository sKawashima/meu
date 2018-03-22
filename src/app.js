import { h, app } from 'hyperapp' // eslint-disable-line
import meu from './index.js'

import './style.sass'

const state = {
  'output': ''
}

const actions = {
  setOutput: (input) => state => ({ output: meu(input) })
}

const view = (state, actions) => (
  <main id='app'>
    <h1>meu DEMO</h1>
    <textarea id='editor' oninput={e => actions.setOutput(document.getElementById('editor').value)} placeholder='# any text' />
    <div>
      <h2>meu(input)</h2>
      <div id='preview' innerHTML={state.output}></div>
      <p>使いたい人は<a href='https://www.npmjs.com/package/meu'>npmjs</a>か<a href='https://github.com/sKawashima/meu'>github</a>をチェックめう！</p>
    </div>
  </main>
)

app(state, actions, view, document.body)
