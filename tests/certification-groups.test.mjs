import assert from 'node:assert/strict'
import { test } from 'node:test'
import { groupCertificationItems } from '../docs/.vitepress/theme/certification-groups.mjs'

test('merges non-adjacent levels under the first-seen expertise group', () => {
  const certifications = [
    { title: 'Senior JavaScript Developer', groupId: 'javascript-developer', groupTitle: 'JavaScript Developer' },
    { title: 'Azure Administrator', issuer: 'Microsoft' },
    { title: 'Junior JavaScript Developer', groupId: 'javascript-developer', groupTitle: 'JavaScript Developer' },
  ]

  assert.deepEqual(groupCertificationItems(certifications).map(({ id, title, items, isGrouped }) => ({
    id,
    title,
    titles: items.map((item) => item.title),
    isGrouped,
  })), [
    { id: 'javascript-developer', title: 'JavaScript Developer', titles: ['Senior JavaScript Developer', 'Junior JavaScript Developer'], isGrouped: true },
    { id: 'Azure Administrator', title: 'Azure Administrator', titles: ['Azure Administrator'], isGrouped: false },
  ])
})

test('keeps unmarked certifications as separate timeline items', () => {
  const certifications = [
    { title: 'Azure Administrator', issuer: 'Microsoft' },
    { title: 'Cloud Practitioner', issuer: 'Microsoft' },
  ]

  assert.deepEqual(groupCertificationItems(certifications).map(({ id, items }) => ({
    id,
    titles: items.map((item) => item.title),
  })), [
    { id: 'Azure Administrator', titles: ['Azure Administrator'] },
    { id: 'Cloud Practitioner', titles: ['Cloud Practitioner'] },
  ])
})

test('keeps a unique explicit group ID ungrouped', () => {
  const certifications = [
    { title: 'Claude Architect - Professional', groupId: 'claude-architect', groupTitle: 'Claude Architect' },
  ]

  assert.equal(groupCertificationItems(certifications)[0].isGrouped, false)
})

test('does not combine different expertise IDs from the same issuer', () => {
  const certifications = [
    { title: 'Claude Architect - Foundations', issuer: 'Anthropic', groupId: 'claude-architect', groupTitle: 'Claude Architect' },
    { title: 'Claude Developer - Foundations', issuer: 'Anthropic', groupId: 'claude-developer', groupTitle: 'Claude Developer' },
  ]

  assert.deepEqual(groupCertificationItems(certifications).map(({ id, items }) => ({
    id,
    titles: items.map((item) => item.title),
  })), [
    { id: 'claude-architect', titles: ['Claude Architect - Foundations'] },
    { id: 'claude-developer', titles: ['Claude Developer - Foundations'] },
  ])
})
