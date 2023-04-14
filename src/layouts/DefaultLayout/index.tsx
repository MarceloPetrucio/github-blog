import { Outlet } from 'react-router-dom'
import backgroudLogo from './../../assets/cover.png'
import { LayoutContainer, LayoutContent } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <img src={backgroudLogo} alt="" />
      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </LayoutContainer>
  )
}
