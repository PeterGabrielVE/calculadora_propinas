import type { menuItem } from "../types"

type MenuItemProps = {
  item: menuItem
}

export default function MenuItem({item} : MenuItemProps) {
  return (
    <button
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between mb-5"
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}

