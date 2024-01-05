import { Box, css, HStack, Image, VStack } from '@kuma-ui/core'

const Hero: React.FC = () => {
  return (
    <HStack pt="sizes.header" pb={40} height="100vh" width="100%">
      <Box mr={64}>
        <Image
          className={css`
            max-width: 100%;
            height: 100%;
            object-fit: cover;
            user-select: none;
            border-radius: t('radii.sm');
          `}
          src="https://sylvester-abeng.vercel.app/images/garden-house.png"
          alt="hero"
        />
      </Box>
      <VStack
        lineHeight={1.15}
        mb={64}
        mr={80}
        className={css`
          font-size: t('fontSizes.heroLg');
          align-self: flex-end;
        `}
      >
        <span>Sylvester</span>
        <span>Abeng</span>
      </VStack>
    </HStack>
  )
}

export default Hero
