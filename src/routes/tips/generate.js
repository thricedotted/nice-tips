import { parseDocument } from 'htmlparser2'
import { selectAll } from 'css-select'
import { textContent, removeElement } from 'domutils'
import * as tokenizer from 'sbd'

import { generateHash } from '$lib/util'

const WIKIHOW_URL = 'http://www.wikihow.com/Special:Randomizer'

const TEMPLATES = {
  tips: [
    'remember:',
    'remember,',
    'remember —',
    'remember...',
    'hey,',
    'hey —',
    'hey...',
    'hey.',
    'my advice:',
    'here\'s a cool tip:',
    'a cool tip:',
    'a cool tip is',
    'hey, remember:',
    'hey, remember —',
    'don\'t forget:',
    'don\'t forget,',
    'don\'t forget —',
    'hey, don\'t forget:',
    'hey, don\'t forget,',
    'hey, don\'t forget —',
    'hey don\'t forget:',
    'hey don\'t forget,',
    'hey don\'t forget —',
    'so',
    'so,',
    'hey, this might be important:',
    'this might be important:',
    'important:',
    'please,',
    'um,',
    'reminder:'
  ],

  warnings: [
    'watch out,',
    'watch out!',
    'watch out...',
    'watch out —',
    'be careful,',
    'be careful!',
    'be careful —',
    'be careful...',
    'be wary,',
    'be wary!',
    'be wary —',
    'be wary...',
    'beware,',
    'beware!',
    'beware —',
    'beware...',
    'careful,',
    'careful!',
    'careful —',
    'careful...',
    'hey:',
    'hey,',
    'hey —',
    'hey...',
    'hey.'
  ],
  
  suffixes: [
    ':)', 
    '<3', 
    'ok?', 
    '*nod*', 
    'trust me.', 
    'don\'t forget',
    'i would know.', 
    'please', 
    'it\'s for the best'
  ]
}

function nodeToText(node) {
  // remove citations
  selectAll('sup', node).forEach(removeElement)

  const text = textContent(node).trim()

  try {
    return tokenizer.sentences(text)[0]
  }
  catch {
    return text
  }
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export async function get() {
  let url = '', tips = [], warnings = []

  while (tips.length + warnings.length === 0) {
    const res = await fetch(WIKIHOW_URL)
    const html = await res.text()
    const root = parseDocument(html)

    const selectText = divId => selectAll(`${divId} ul li > div:first-child`, root).map(nodeToText)

    tips = selectText('#tips')
    warnings = selectText('#warnings')

    url = res.url
  }

  let advice = ''

  if (warnings.length === 0 || (tips.length > 0 && Math.random() < 0.9)) {
    advice = `${pickRandom(TEMPLATES.tips)} ${pickRandom(tips)}`.toLowerCase()
  }
  else {
    advice = `${pickRandom(TEMPLATES.warnings)} ${pickRandom(warnings)}`.toLowerCase()
  }

  if (Math.random() < 0.3) {
    advice = `${advice} ${pickRandom(TEMPLATES.suffixes)}`
  }

  return {
    body: {
      text: advice,
      url,
      hash: generateHash(advice, url)
    }
  }
}