/**
 * @typedef {{ title: string, groupId?: string, groupTitle?: string } & Record<string, unknown>} CertificationItem
 * @typedef {{ id: string, title: string, items: CertificationItem[], isGrouped: boolean }} CertificationGroup
 */

/**
 * @param {CertificationItem[]} items
 * @returns {CertificationGroup[]}
 */
export function groupCertificationItems(items) {
    const groups = []
    const groupsById = new Map()
    let fallbackPosition = 0

    for (const [index, item] of items.entries()) {
        const id = item.groupId || item.title
        let group = item.groupId ? groupsById.get(id) : undefined

        if (!group) {
            group = {
                id,
                title: item.groupId ? item.groupTitle || item.title : item.title,
                items: [],
                isGrouped: false,
                _issued: item.issued,
                _position: fallbackPosition++,
            }
            groups.push(group)
            if (item.groupId) groupsById.set(id, group)
        }

        group.items.push(item)
        if (group.items.length > 1) group.isGrouped = true
        if (!group._issued || (item.issued && item.issued > group._issued)) {
            group._issued = item.issued
        }

        if (!item.groupId) group._position = index
    }

    for (const group of groups) {
        if (group.items.length > 1) {
            group.items.sort((a, b) => (b.issued || '').localeCompare(a.issued || ''))
        }
    }

    groups.sort((a, b) => {
        const dateOrder = (b._issued || '').localeCompare(a._issued || '')
        return dateOrder || a._position - b._position
    })

    return groups.map(({ _issued, _position, ...group }) => group)
}
