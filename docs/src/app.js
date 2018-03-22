import { h, app } from 'hyperapp' // eslint-disable-line
import meu from 'meu'

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
    <div id='preview' innerHTML={state.output}></div>
  </main>
)

app(state, actions, view, document.body)
