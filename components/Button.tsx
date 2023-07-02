import Image from "next/image"
import { MouseEventHandler } from "react"

type Props = {
  title: string,
  leftIcon?: string | null,
  rightIcon?: string | null,
  type?: 'button' | 'submit',
  handleClick?: MouseEventHandler
  isSubmitting?: boolean,
  bgColor?: string,
  textColor?: string,
  className?: string,
}

const Button = ({
  title,
  leftIcon,
  rightIcon,
  type,
  isSubmitting,
  bgColor,
  textColor,
  handleClick,
  className,
}: Props) => {

  return (
    <button
      type={ type }
      disabled={ isSubmitting }
      className={`flexCenter gap-3 px-4 py-3
      ${ textColor ? textColor : 'text-white' }
        ${ isSubmitting ? 'bg-black/50' : bgColor || 'bg-primary-purple' }
        rounded-xl text-sm font-medium max-md:w-full
        ${ className ?? '' }
      `}
      onClick={ handleClick }
    >
      { leftIcon && <Image src={leftIcon} width={14} height={14} alt='left'/> }
      
      { title }

      { rightIcon && <Image src={rightIcon} width={14} height={14} alt='right'/> }
    </button>
  )
}

export default Button