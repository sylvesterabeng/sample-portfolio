import { HStack, css } from '@kuma-ui/core'

const Header: React.FC = () => {
  return (
    <HStack
      justify="space-between"
      className={css`
        top: 0;
        left: 0;
        width: 100%;
        padding: 0 64px;
        position: fixed;
        align-items: center;
        height: t('sizes.header');
        font-size: t('fontSizes.lg');
      `}
    >
      <div>Sy</div>
      <div>Menu</div>
    </HStack>
  )
}

export default Header
