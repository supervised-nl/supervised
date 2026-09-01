#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const errors = []

function read(rel) {
  const abs = path.join(root, rel)
  if (!fs.existsSync(abs)) {
    errors.push(`missing ${rel}`)
    return ''
  }
  return fs.readFileSync(abs, 'utf8')
}

function listDirs(rel) {
  const abs = path.join(root, rel)
  if (!fs.existsSync(abs)) return []
  return fs
    .readdirSync(abs, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort()
}

const skillDirs = listDirs('skills')
if (!skillDirs.includes('strict-mode')) {
  errors.push('skills/strict-mode is required')
}

for (const name of skillDirs) {
  const rel = `skills/${name}/SKILL.md`
  const body = read(rel)
  if (!body) continue
  if (!/^---\nname: /m.test(body) || !/^description: /m.test(body)) {
    errors.push(`${rel} missing name or description frontmatter`)
  }
}

const mode = read('skills/strict-mode/SKILL.md')
if (mode && !/^## Design$/m.test(mode)) {
  errors.push('skills/strict-mode/SKILL.md must have a Design section')
}
if (mode && !/^## Review$/m.test(mode)) {
  errors.push('skills/strict-mode/SKILL.md must have a Review section')
}
if (mode && !/Reject a sketch/.test(mode)) {
  errors.push('Design must name sketches to reject')
}

const namedPlaybooks = [...mode.matchAll(/^\| `([^`]+\.md)` \|/gm)].map(
  (m) => m[1],
)
const uniqueNamed = [...new Set(namedPlaybooks)].sort()

const playbookDir = path.join(root, 'skills/strict-mode/playbooks')
const playbookFiles = fs.existsSync(playbookDir)
  ? fs
      .readdirSync(playbookDir)
      .filter((f) => f.endsWith('.md'))
      .sort()
  : []

if (uniqueNamed.join(',') !== playbookFiles.join(',')) {
  errors.push(
    `strict-mode table [${uniqueNamed.join(', ')}] does not match playbooks/ [${playbookFiles.join(', ')}]`,
  )
}

for (const file of playbookFiles) {
  const body = read(`skills/strict-mode/playbooks/${file}`)
  const steps = body.match(/^\d+\. /gm) || []
  if (steps.length < 4) {
    errors.push(`${file} has ${steps.length} numbered steps, need at least 4`)
  }
}

const mustDesign = [
  'feature.md',
  'bug-fix.md',
  'refactoring.md',
  'figure-it-out.md',
]
for (const file of mustDesign) {
  const body = read(`skills/strict-mode/playbooks/${file}`)
  if (body && !/Design in strict-mode/.test(body)) {
    errors.push(`${file} must call Design`)
  }
}

const mustReview = [
  'feature.md',
  'bug-fix.md',
  'refactoring.md',
  'ship.md',
  'figure-it-out.md',
]
for (const file of mustReview) {
  const body = read(`skills/strict-mode/playbooks/${file}`)
  if (body && !/Review in strict-mode/.test(body)) {
    errors.push(`${file} must call Review`)
  }
}

const bugFix = read('skills/strict-mode/playbooks/bug-fix.md')
if (bugFix && !/Reproduce/.test(bugFix)) {
  errors.push('bug-fix.md must start from a repro')
}
if (bugFix && !/silences/.test(bugFix)) {
  errors.push('bug-fix.md must reject a silencer as a fix')
}

const feature = read('skills/strict-mode/playbooks/feature.md')
if (feature && !/data shape/.test(feature)) {
  errors.push('feature.md must name the data shape')
}

const principles = read('principles.md')
const principleHeads = principles.match(/^## \d+\. /gm) || []
if (principleHeads.length < 8) {
  errors.push(
    `principles.md has ${principleHeads.length} numbered headings, need at least 8`,
  )
}

if (!read('agents/strict-agent.md')) {
  errors.push('agents/strict-agent.md missing')
}

const agents = read('AGENTS.md')
if (!agents.includes('node scripts/check.mjs')) {
  errors.push('AGENTS.md must name node scripts/check.mjs as verify')
}

const versions = ['plugin.json', '.grok-plugin/plugin.json'].map((rel) => {
  const raw = read(rel)
  if (!raw) return `${rel}:missing`
  try {
    return JSON.parse(raw).version || `${rel}:no-version`
  } catch {
    return `${rel}:invalid-json`
  }
})
if (new Set(versions).size !== 1) {
  errors.push(`plugin versions diverge: ${versions.join(', ')}`)
}

if (errors.length) {
  for (const e of errors) console.error(e)
  process.exit(1)
}

console.log(
  `ok ${skillDirs.length} skills, ${playbookFiles.length} playbooks, principles ${principleHeads.length}, version ${versions[0]}`,
)
