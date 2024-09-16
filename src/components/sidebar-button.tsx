'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from './ui/button'
import type { SidebarButtonType } from '~/lib/consts'

export default function SidebarButton({ name, path, dangerouslySetInnerHTML }: SidebarButtonType) {
  const pathname = usePathname()
  const isActive = pathname === path
  if (dangerouslySetInnerHTML) {
    if (isActive) {
      return (
        <Button variant="default" asChild>
          <Link href={path} dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
        </Button>
      )
    }
    return (
      <Button variant="outline" asChild>
        <Link href={path} dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
      </Button>
    )
  }
  if (isActive) {
    return (
      <Button variant="default" asChild>
        <Link href={path}>{name}</Link>
      </Button>
    )
  }
  return (
    <Button variant="outline" asChild>
      <Link href={path}>{name}</Link>
    </Button>
  )
}

export function FullPathSidebarButton({ name, path, dangerouslySetInnerHTML }: SidebarButtonType) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(path)
  if (dangerouslySetInnerHTML) {
    if (isActive) {
      return (
        <Button variant="default" asChild>
          <Link href={path} dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
        </Button>
      )
    }
    return (
      <Button variant="outline" asChild>
        <Link href={path} dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
      </Button>
    )
  }
  if (isActive) {
    return (
      <Button variant="default" asChild>
        <Link href={path}>{name}</Link>
      </Button>
    )
  }
  return (
    <Button variant="outline" asChild>
      <Link href={path}>{name}</Link>
    </Button>
  )
}