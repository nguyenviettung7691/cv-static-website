export interface CertificationGroupItem {
    title: string
    groupId?: string
    groupTitle?: string
}

export interface CertificationGroup<T extends CertificationGroupItem = CertificationGroupItem> {
    id: string
    title: string
    items: T[]
    isGrouped: boolean
}

export function groupCertificationItems<T extends CertificationGroupItem>(
    items: T[],
): CertificationGroup<T>[]
