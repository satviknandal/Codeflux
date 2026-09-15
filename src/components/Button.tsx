interface ButtonProps {
    label: string;
    className: string;
    icon?: string
}

const Button = ({label, className, icon}: ButtonProps) => {
  return <a className={className} href="/">
        {label}
        {icon && <span>+</span>}
    </a>
}

export default Button;
