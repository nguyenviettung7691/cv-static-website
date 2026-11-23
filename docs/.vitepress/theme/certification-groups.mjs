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

    for (const item of items) {
        const id = item.groupId || item.title
        let group = item.groupId ? groupsById.get(id) : undefined

        if (!group) {
            group = {
                id,
                title: item.groupId ? item.groupTitle || item.title : item.title,
                items: [],
                isGrouped: false,
            }
            groups.push(group)
            if (item.groupId) groupsById.set(id, group)
        }

        group.items.push(item)
        if (group.items.length > 1) group.isGrouped = true
    }

    return groups
}
